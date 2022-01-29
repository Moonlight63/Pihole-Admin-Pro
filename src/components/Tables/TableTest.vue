<script setup lang="ts">
import { useStore } from 'vuex'
import DataTable from '@/components/Tables/Datatables/DataTable.vue'
import TableBodyCell from './Datatables/Components/Table/TableBodyCell.vue'
import {
  DataTableColumns,
  DataTableSortation
} from './Datatables/types/DataTableTypes'

const store = useStore()

const dataRaw = computed(() => store.state.clients)
const dataReady = computed(() => !store.state.loadingClients)

// const filter = ref('')
const sortation = ref<DataTableSortation>({})
// const pagination = ref<DataTablePagination>({
//   totalRecordCount: computed(() => dataRaw.value.length).value,
//   pagedInput: dataRaw.value
// })

const getFilteredData = (data: { [x: string]: unknown }[] | undefined) => {
  sortation.value.sortedInput = data
}

const columns: DataTableColumns = [
  { key: 'name', sortable: true },
  { key: 'progress', label: 'Hits', sortable: true },
  { label: 'Status', key: 'progress' }
]
</script>

<template>
  <!-- v-model:filter="filter"
  v-model:pagination="pagination"
  v-model:sortation="sortation" -->
  <DataTable
    v-if="dataReady"
    :rows="dataRaw"
    :columns="columns"
    @output:filtered="getFilteredData"
  >
    <!-- <template #datatable-tbody-td-2="progressCell">
      <TableBodyCell
        :key="`datatable-tbody-td-${progressCell.uniqueId()}-${
          progressCell.column.label
        }`"
        class="progress-cell"
        :name="progressCell.column.key"
        :data-label="progressCell.column.label"
        :rdata1="progressCell.column"
      >
        <progress max="100" :value="progressCell.row.progress">
          {{ progressCell.row.progress }}
        </progress>
      </TableBodyCell>
    </template> -->
    <template #tbody="{ row }">
      <TableBodyCell v-text="`${row.name}`" />
      <TableBodyCell v-text="row.progress" />
      <TableBodyCell class="progress-cell">
        <progress max="100" :value="row.progress as number">
          {{ row.progress }}
        </progress>
      </TableBodyCell>
    </template>
  </DataTable>
</template>
