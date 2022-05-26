<script setup lang="ts">
import { useServer } from '@/stores/server';
import { useSession } from '@/stores/session';
import DataTable from '@/components/Tables/Datatables/DataTable.vue'
import TableBodyCell from '@/components/Tables/Datatables/Components/Table/TableBodyCell.vue'
import {
  DataTableColumns
} from '@/components/Tables/Datatables/types/DataTableTypes'
import { useApi } from '@/stores/api';

const show = computed(() => {
  return (useServer().connected && useSession().valid)
})

const apiStore = useApi()

const dataRaw = computed(() => apiStore.topClients?.top_clients)

const columns: DataTableColumns = [
  { key: 'name', label: 'Client', sortable: true },
  { key: 'count', label: 'Requests', sortable: true },
  { key: 'count', label: 'Frequency' }
]

</script>

<template>
  <CardComponent
    title="Top Clients"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    v-if="show"
    hasTable
  >
    <div v-if="dataRaw != null && dataRaw != undefined && apiStore.topClients.total_queries > 0">
      <DataTable
        :rows="dataRaw"
        :columns="columns"
        :filter="false"
        :paginationOptions="false"
        :initState="{ sortation: { sortByKey: 'count' }}"
      >
        <template #tbody="{ row }">
          <TableBodyCell v-text="`${row.name}`" />
          <TableBodyCell v-text="row.count" />
          <TableBodyCell class="progress-cell">
            <progress :max="(dataRaw[0].count*1.1)+10" :value="row.count">
              {{ row.progress }}
            </progress>
          </TableBodyCell>
        </template>
      </DataTable>
    </div>
    <div v-else class="py-24 text-center text-on-main-muted">
      <p>No Data found...</p>
    </div>
  </CardComponent>
</template>
