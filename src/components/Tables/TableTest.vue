<script setup>
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import DataTable from '@/components/Tables/Datatables/DataTable.vue'
import TableBodyCell from './Datatables/Components/Table/TableBodyCell.vue'

const store = useStore()

const dataRaw = computed(() => store.state.clients)

const filter = ref('')
const sortation = ref({})
const pagination = ref({
  // totalRecordCount: computed(() => itemsUnsorted.value.length)
  // perPageOptions: { 0: 'All', 5: '5', 10: '10', 15: '15', 25: '25', 50: '50' },
  // perPageDefault: 5,
  // initalPage: 0
})

const getFilteredData = (data) => {
  sortation.value.sortedInput = data
}

</script>

<template>
  <!-- v-model:filter="filter" -->
  <!-- v-model:pagination="pagination" -->
  <!-- v-model:sortation="sortation" -->
  <DataTable
    :rows="dataRaw"
    :columns="[
      { 'key': 'name', 'sortable': true},
      { 'key': 'progress', 'label': 'Hits', 'sortable': true },
      { 'label': 'Status', 'key': 'progress' }
    ]"
    @output:filtered="getFilteredData"
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
  </DataTable>
</template>
