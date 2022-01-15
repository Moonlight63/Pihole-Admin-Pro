<script setup>
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import ModalBox from '@/components/ModalBox.vue'
import CheckboxCell from '@/components/CheckboxCell.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Pagination from '@/components/Tables/Datatables/Components/Pagination/Pagination.vue'
import TableHead from '@/components/Tables/Datatables/Components/Table/TableHead.vue'
import TableHeadCell from '@/components/Tables/Datatables/Components/Table/TableHeadCell.vue'
import TableRow from '@/components/Tables/Datatables/Components/Table/TableRow.vue'
import DataTable from '@/components/Tables/Datatables/DataTable.vue'
import TableBodyCell from './Datatables/Components/Table/TableBodyCell.vue'

// defineProps({
//   checkable: Boolean
// })

const store = useStore()

const sortByKey = ref('')
const sortAcending = ref(false)
const perPage = ref(10)
const currentPage = ref(0)

const dataRaw = computed(() => store.state.clients)
const dataSorted = computed(() => {
  if (sortByKey.value === '') return dataRaw.value
  return dataRaw.value.slice(0).sort((a, b) => a[sortByKey.value].toString().toLowerCase().localeCompare(b[sortByKey.value].toString().toLowerCase()))
})
const dataPaginated = computed(
  () => dataSorted.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const filter = ref('')
const sortation = ref({})

const darkMode = computed(() => store.state.darkMode)
const itemsUnsorted = computed(() => store.state.clients)
const items = computed(() => itemsUnsorted.value.slice(0).sort((a, b) => parseFloat(b.progress) - parseFloat(a.progress)))
const isModalActive = ref(false)
const isModalDangerActive = ref(false)
const checkedRows = ref([])
// const totalRecordCount = computed(() => itemsUnsorted.value.length)

const itemsPaginated = computed(
  () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))
const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }
  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []
  arr.forEach(item => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })
  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === client.id)
  }
}

// const handlePageChange = (page) => {
//   currentPage.value = page
// }

const clickedRow = (row) => {
  console.log(row.name)
}

const pagination = reactive({
  totalRecordCount: computed(() => itemsUnsorted.value.length)
  // perPageOptions: { 0: 'All', 5: '5', 10: '10', 15: '15', 25: '25', 50: '50' },
  // perPageDefault: 5,
  // initalPage: 0
})

const loadData = (query) => {
  currentPage.value = query.page
  perPage.value = query.perPage > 0 ? query.perPage : itemsUnsorted.value.length
  sortByKey.value = query.sortByKey
  // console.log(query)
}

const getFilteredData = (data) => {
  sortation.value.sortedInput = data
}

</script>

<template>
  <!-- v-model:filter="filter" -->
  <DataTable
    v-model:sortation="sortation"
    :rows="dataPaginated"
    :columns="[
      { 'key': 'name', 'sortable': true},
      { 'key': 'progress', 'label': 'Hits', 'sortable': true },
      { 'label': 'Status', 'key': 'progress' }
    ]"
    :pagination="pagination"
    @loadData="loadData"
    @output:filteredData="getFilteredData"
  >
    <template #datatable-tbody-td-2="progressCell">
      <TableBodyCell
        :key="`datatable-tbody-td-${progressCell.uniqueId()}-${progressCell.column.label}`"
        class="progress-cell"
        :name="progressCell.column.key"
        :data-label="progressCell.column.label"
        :rdata1="progressCell.column"
      >
        <progress
          max="100"
          :value="progressCell.row.progress"
        >
          {{ progressCell.row.progress }}
        </progress>
      </TableBodyCell>
    </template>
    <!-- <template #thead>
      <TableHeadCell
        :sortable="true"
        :acending="sortAcending"
        :sorting="sortingBy === 'name'"
        @clicked="handleSort('name')"
      >
        Full Name
      </TableHeadCell>
      <TableHeadCell
        :sortable="true"
        :acending="sortAcending"
        :sorting="sortingBy === 'account'"
        @clicked="handleSort('account')"
      >
        Account
      </TableHeadCell>
      <TableHeadCell>Gender</TableHeadCell>
      <TableHeadCell
        :sortable="true"
        :acending="sortAcending"
        :sorting="sortingBy === 'progress'"
        @clicked="handleSort('progress')"
      >
        Progress
      </TableHeadCell>
      <TableHeadCell />
    </template> -->

    <!-- <template #tbody="{row}">
      <TableBodyCell v-text="`${row.name}`" />
      <TableBodyCell>
        <small>{{ row.company }}</small>
        <br>
        <small>{{ row.city }}</small>
      </TableBodyCell>
      <TableBodyCell v-text="row.login" />
      <TableBodyCell>
        <progress
          max="100"
          :value="row.progress"
        >
          {{ row.progress }}
        </progress>
      </TableBodyCell>
      <TableBodyCell>
        <JbButtons
          type="justify-start lg:justify-end"
          no-wrap
        >
          <JbButton
            color="success"
            :icon="mdiEye"
            small
          />
          <JbButton
            color="danger"
            :icon="mdiTrashCan"
            small
          />
        </JbButtons>
      </TableBodyCell>
    </template> -->
  </DataTable>
  <!-- <div
    v-if="checkedRows.length"
    class="p-3 bg-gray-50 dark:bg-gray-800"
  >
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <Level>
    <Field class="w-24">
      <Control
        v-model="perPage"
        :options="PER_PAGE_OPTIONS"
      />
    </Field>
    <Field>
      <Control
        placeholder="Search"
      />
    </Field>
  </Level>

  <table>
    <TableHead>
      <TableHeadCell v-if="checkable" />
      <TableHeadCell>Client</TableHeadCell>
      <TableHeadCell>Requests</TableHeadCell>
      <TableHeadCell>Frequency</TableHeadCell>
    </TableHead>
    <tbody>
      <TableRow
        v-for="client in itemsPaginated"
        :key="client.id"
        :clickable="false"
        @clicked="clickedRow(client)"
      >
        <CheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />
        <td data-label="Client">
          {{ client.name }}
        </td>
        <td data-label="Requests">
          {{ client.progress }}
        </td>
        <td
          data-label="Frequency"
          class="progress-cell"
        >
          <progress
            max="100"
            :value="client.progress"
          >
            {{ client.progress }}
          </progress>
        </td>
      </TableRow>
    </tbody>
  </table>
  <Pagination
    :total="11"
    :per-page="10"
    :current-page="currentPage"
    @changed="handlePageChange"
  >
    <template #pagination-info="paginationInfo">
      <slot
        name="pagination-info"
        :start="paginationInfo.start"
        :end="paginationInfo.end"
        :total="paginationInfo.total"
      >
        <small>
          Oh look! Showing {{ paginationInfo.start }} to {{ paginationInfo.end }} of {{ paginationInfo.total }} results.
        </small>
      </slot>
    </template>
  </Pagination> -->
  <!-- <div class="table-pagination">
    <level>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
      <jb-buttons>
        <jb-button
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :outline="darkMode"
          small
          @click="currentPage = page"
        />
      </jb-buttons>
    </level>
  </div> -->
</template>
