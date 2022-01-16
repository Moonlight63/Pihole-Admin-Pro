<script setup>
import { computed, ref, watch, reactive } from 'vue'
import Level from '@/components/Level.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import TableWrapper from './Components/Table/TableWrapper.vue'
import TableHead from './Components/Table/TableHead.vue'
import TableHeadCell from './Components/Table/TableHeadCell.vue'
import TableRow from './Components/Table/TableRow.vue'
import Pagination from './Components/Pagination/Pagination.vue'
import TableBodyCell from './Components/Table/TableBodyCell.vue'
import filterForString from './Components/Filters/deep-text-filter'

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

const uniqueId = () => Math.floor(Math.random() * 100)

const props = defineProps({
  rows: { type: Array, required: true },
  columns: { type: Array, required: true },
  filter: { type: [Boolean, String], required: false, default: null },
  sortation: { type: Object, required: false, default: null },
  pagination: { type: Object, required: false, default: null },
  loading: { type: Boolean, required: false, default: false },
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
  }
})

const emit = defineEmits([
  'loadData',
  'rowClicked',
  'update:filter',
  'output:filtered',
  'update:sortation',
  'output:sortedData',
  'update:pagination'
])

// FILTERING
const internalFilter = ref('')

const calculatedFilterState = computed(() => {
  if (props.filter !== null) return props.filter
  return internalFilter.value
})

const internalFilterFunc = () => {
  let result = []
  if (calculatedFilterState.value === '') result = props.rows
  result = filterForString(props.rows, calculatedFilterState.value)
  emit('output:filtered', result)
  return result
}

const dataFiltered = computed(() => {
  if (props.filter !== null || props.filter === false) {
    // console.log('External Filtering!')
    return props.rows
  } else {
    // console.log('Internal Filtering!')
    return internalFilterFunc()
  }
})

// SORTATION
const internalSort = reactive({
  sortByKey: '',
  ascending: false
})

const calculatedSortState = computed(() => {
  if (props.sortation !== null) return props.sortation
  return internalSort
})

const internalSortFunc = () => {
  let sorted = []
  if (calculatedSortState.value.sortByKey === '') {
    sorted = dataFiltered.value
  } else {
    sorted = dataFiltered.value.slice(0).sort((b, a) => {
      return a[calculatedSortState.value.sortByKey]
        .toString()
        .toLowerCase()
        .localeCompare(b[calculatedSortState.value.sortByKey]
          .toString()
          .toLowerCase())
    })
  }
  if (calculatedSortState.value.ascending) sorted.reverse()

  emit('output:sortedData', sorted)
  return sorted
}

const dataSorted = computed(() => {
  if (props.sortation !== null) {
    if (props.filter !== null) {
      // console.log('No Sorting!')
      return props.rows
    }
    // console.log('External Sorting!')
    return props.sortation.sortedInput || []
  } else {
    // console.log('Internal Sorting!')
    return internalSortFunc()
  }
})

// PAGINATION
const internalPaged = reactive({
  page: 0,
  perPage: 10
})

const calculatedPagedState = computed(() => {
  if (props.paginationOptions === false) return { page: 0, perPage: 0 }
  if (props.pagination !== null) return props.pagination
  return internalPaged
})

const dataPaginated = computed(() => {
  if (props.paginationOptions === false) return dataSorted.value
  if (props.pagination !== null) {
    if (props.filter !== null && props.sortation !== null) {
      if (props.pagination.pagedInput !== null) {
        throw new TypeError('Can not use paged input while overriding filter and sorting. Please input data into rows property.')
      }
      // console.log('No Paging!')
      return props.rows
    }
    // console.log('External Paging!')
    return props.pagination.pagedInput || []
  } else {
    // console.log('Internal Pagination!')
    return dataSorted.value.slice(calculatedPagedState.value.perPage * calculatedPagedState.value.page, calculatedPagedState.value.perPage * (calculatedPagedState.value.page + 1))
  }
})

const showPagination = computed(() => props.paginationOptions !== false)

const totalData = computed(() => {
  if (props.pagination !== null) {
    if (props.filter !== null && props.sortation !== null) {
      if (!props.pagination.totalRecordCount) {
        console.error('Binding to pagination without supplying totalRecordCount. Only bind the pagination prop if you intend to override the default behaviour. You must supply a totalRecordCount in order to use external pagination.', 'DataTable.vue')
        return props.rows.length
      }
      return props.pagination.totalRecordCount
    }
  }
  return dataSorted.value.length
})

const tableRows = computed(() => dataPaginated.value)

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

const handleOnSearchChange = debounce((value) => {
  internalFilter.value = value
  // UnSort
  handleChangeSort('')
  if (props.filter !== null) {
    emit('update:filter', value)
  } else {
    if (props.sortation !== null) {
      // manually call filter, because it wont be called by sort
      internalFilterFunc()
    }
  }
})

const handleChangeSort = (sortBy) => {
  if (sortBy === internalSort.sortByKey) {
    internalSort.ascending = !internalSort.ascending
  } else {
    internalSort.sortByKey = sortBy
  }

  if (props.sortation !== null) {
    emit('update:sortation', {
      ...props.sortation,
      sortByKey: sortBy || '',
      ascending: internalSort.ascending || false
    })
  } else if (props.pagination !== null) {
    // manually call sort, because it wont be called by pageination
    internalSortFunc()
  }
}

const handlePageChange = (page) => {
  internalPaged.page = page

  if (props.pagination !== null) {
    emit('update:pagination', {
      ...props.pagination,
      page: page
    })
  }
}

const handleOnPaginationSizeChange = (value) => {
  internalPaged.perPage = value

  if (props.pagination !== null) {
    emit('update:pagination', {
      ...props.pagination,
      perPage: value
    })
  }
}

const rowClickHandler = (row) => {
  if (props.clickable || !props.hoverable) {
    return
  }
  emit('rowClicked', row)
}

watch(() => props.rows, () => {
  if (props.filter === null && props.sortation !== null) internalFilterFunc()
  if (props.sortation === null && props.pagination !== null) internalSortFunc()
}, {
  deep: true
})

</script>

<template>
  <div class="">
    <Level>
      <Field class="w-24">
        <Control
          :model-value="calculatedPagedState.perPage"
          :options="props.paginationOptions"
          @update:modelValue="handleOnPaginationSizeChange"
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
            :ascending="calculatedSortState.ascending"
            :sorting="calculatedSortState.sortByKey === column.key"
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
        :current-page="calculatedPagedState.page"
        :per-page="parseInt(calculatedPagedState.perPage.toString())"
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
