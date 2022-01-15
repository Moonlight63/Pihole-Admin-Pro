<script setup>
import { computed, ref, watch, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import Level from '@/components/Level.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import TableWrapper from './Components/Table/TableWrapper.vue'
import TableHead from './Components/Table/TableHead.vue'
import TableHeadCell from './Components/Table/TableHeadCell.vue'
import TableRow from './Components/Table/TableRow.vue'
import Pagination from './Components/Pagination/Pagination.vue'
import TableBodyCell from './Components/Table/TableBodyCell.vue'

const debounce = (callback, wait = 400) => {
  let timeout

  return (...args) => {
    // This is perfectly valid code, but eslint incorectly matches it.
    // https://github.com/standard/eslint-plugin-standard/issues/12#issuecomment-323561586
    // eslint-disable-next-line node/no-callback-literal
    const next = () => callback(...args)
    clearTimeout(timeout)
    timeout = setTimeout(next, wait)
  }
}

const props = defineProps({
  rows: { type: Array, required: true },
  columns: { type: Array, required: true },
  filter: { type: [Boolean, String], required: false, default: null },
  sortation: { type: Object, required: false, default: null },
  pagination: { type: Object, required: false, default: null },
  loading: { type: Boolean, required: false, default: false },
  query: { type: Object, required: false, default: () => ({}) },
  hoverable: { type: Boolean, required: false, default: false },
  clickable: { type: Boolean, required: false, default: false },
  paginationOptions: {
    type: [Object, Array, Boolean],
    required: false,
    default: () => ({
      0: 'All',
      5: '5',
      10: '10',
      15: '15',
      25: '25',
      50: '50'
    })
  },
  paginationData: { type: Array, required: false, default: null }
})

const dataFiltered = computed(() => {
  if (props.filter !== null || props.filter === false) {
    console.log('External Filtering!')
    return props.rows
  } else {
    console.log('Internal Filtering!')
    emit('output:filteredData', props.rows)
    return props.rows
  }
})

const dataSorted = computed(() => {
  if (props.sortation !== null) {
    if (props.filter !== null) {
      console.log('No Sorting!')
      return props.rows
    }
    console.log('External Sorting!')
    return props.sortation.sortedInput || {}
  } else {
    console.log('Internal Sorting!')
    return dataFiltered.value
  }
})

const renderRows = computed(() => {
  return dataSorted.value
})

const emit = defineEmits([
  'loadData',
  'rowClicked',
  'update:filter',
  'output:filteredData',
  'update:sortation'
])

const tableQuery = reactive({
  page: props.pagination.initalPage || 0,
  search: props.query.search || '',
  perPage: props.pagination.perPageDefault || 10,
  sortByKey: '',
  sortAccending: false
})

const showPagination = computed(() => !!props.pagination)
const totalData = computed(() => props.pagination.totalRecordCount || props.rows.length)
const tableRows = computed(() => renderRows.value)
const tableColumns = computed(() => {
  const newArr = []
  for (const idx in props.columns) {
    const column = props.columns[idx]
    if (Object.getPrototypeOf(column) === String.prototype) {
      newArr.push({ idx: idx, key: column.toLowerCase(), label: column[0].toUpperCase() + column.substring(1), sortable: false })
    } else if (Object.getPrototypeOf(column) === Object.prototype) {
      const newObj = { ...column }
      if (!('sortable' in newObj)) {
        newObj.sortable = false
      }
      if (!('key' in newObj) && ('label' in newObj)) {
        newObj.key = newObj.label.toLowerCase()
      }
      if (('key' in newObj) && !('label' in newObj)) {
        newObj.label = (newObj.key[0].toUpperCase() + newObj.key.substring(1))
      }
      newObj.idx = idx
      newArr.push(newObj)
    }
  }
  return newArr
})

const uniqueId = () => Math.floor(Math.random() * 100)

const fireDataLoad = () => {
  emit('loadData', tableQuery)
}
watch(() => ({ ...tableQuery }), () => {
  fireDataLoad()
}, {
  deep: true,
  immediate: true
})
const handlePageChange = (page) => {
  tableQuery.page = page
}
const handleOnSearchChange = debounce((value) => {
  tableQuery.search = value
  tableQuery.sortByKey = ''
  tableQuery.page = 0

  if (props.filter !== null) {
    emit('update:filter', value)
  }
})
const handleOnPaginationSizeChange = (value) => {
  tableQuery.perPage = value
}

const handleChangeSort = (sortBy) => {
  if (sortBy === tableQuery.sortByKey) {
    tableQuery.sortAccending = !tableQuery.sortAccending
  } else {
    tableQuery.sortByKey = sortBy
  }

  if (props.sortation !== null) {
    emit('update:sortation', {
      ...props.sortation,
      sortByKey: tableQuery.sortByKey || '',
      accending: tableQuery.sortAccending || false
    })
  }
}

const rowClickHandler = (row) => {
  if (props.clickable || !props.hoverable) {
    return
  }
  emit('rowClicked', row)
}

</script>

<template>
  <div class="">
    <Level>
      <Field class="w-24">
        <Control
          v-model="tableQuery.perPage"
          :options="pagination.perPageOptions || { 0: 'All', 5: '5', 10: '10', 15: '15', 25: '25', 50: '50' }"
        />
      </Field>
      <Field v-if="props.filter !== false">
        <Control
          placeholder="Search"
          @update:modelValue="handleOnSearchChange"
        />
      </Field>
    </Level>

    <TableWrapper>
      <TableHead>
        <slot
          name="thead"
          :column="tableColumns"
        >
          <TableHeadCell
            v-for="(column) in tableColumns"
            :key="`datatable-thead-th-${column.label}`"
            :sortable="column.sortable"
            :acending="tableQuery.sortAccending"
            :sorting="tableQuery.sortByKey === column.key"
            @clicked="handleChangeSort(column.key)"
          >
            {{ column.label }}
          </TableHeadCell>
        </slot>
      </TableHead>

      <tbody>
        <TableRow
          v-for="(row, rowIndex) in tableRows"
          :key="`datatable-row-${uniqueId()}-${rowIndex}`"
          :hoverable="hoverable"
          :clickable="clickable"
          :row-index="rowIndex"
          @clicked="rowClickHandler(row)"
        >
          <slot
            name="tbody"
            :index="rowIndex"
            :row="row"
          >
            <slot
              v-for="(column) in tableColumns"
              :name="`datatable-tbody-td-${column.idx}`"
              :column="column"
              :row="row"
              :uniqueId="uniqueId"
            >
              <TableBodyCell
                :key="`datatable-tbody-td-${uniqueId()}-${column.label}`"
                :name="column.key"
                :data-label="column.label"
                v-text="row[column.key]"
              />
            </slot>
          </slot>
        </TableRow>

        <TableRow
          v-if="tableRows.length === 0"
          :row-index="0"
        >
          <slot name="empty" />
        </TableRow>
      </tbody>
    </TableWrapper>

    <div v-if="showPagination">
      <Pagination
        :total="totalData"
        :current-page="tableQuery.page"
        :per-page="parseInt(tableQuery.perPage.toString())"
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
              Showing {{ paginationInfo.start }} to {{ paginationInfo.end }} of {{ paginationInfo.total }} results.
            </small>
          </slot>
        </template>
      </Pagination>
    </div>
  </div>
</template>
