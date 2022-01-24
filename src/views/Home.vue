<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import {
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiChartPie,
  mdiHandBackRight,
  mdiEarth,
  mdiViewListOutline
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'

const titleStack = ref(['Admin', 'Dashboard'])

const chartData = ref<unknown>(null)
const chartData2 = ref<unknown>(null)
const chartData3 = ref<unknown>(null)
const chartData4 = ref<unknown>(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData(24)
  chartData2.value = chartConfig.sampleChartData(24)
  chartData3.value = chartConfig.sampleChartData(4, 1)
  chartData4.value = chartConfig.sampleChartData(4, 1)
}

const store = useStore()

const dataRaw = computed(() => store.state.currentSummary)

const quaryData = computed(() => ({
  clients: dataRaw.value.ftl?.clients?.total || 0,
  total: dataRaw.value.queries?.total || 0,
  blocked: dataRaw.value.queries?.blocked || 0,
  blocked_percent: dataRaw.value.queries?.percent_blocked || 0,
  domains_blocked: dataRaw.value.queries?.unique_domains || 0
}))

onMounted(() => {
  fillChartData()
})
</script>

<template>
  <TitleBar :titleStack="titleStack" />
  <MainSection>
    <CardComponent
      title="Total Queries Over Last 24 Hours"
      :icon="mdiFinance"
      :headerIcon="mdiReload"
      class="mb-6"
      @headerIconClick="fillChartData"
    >
      <TableTest :checkable="true" />
    </CardComponent>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
      <CardWidget
        color="text-emerald-400"
        :icon="mdiEarth"
        :number="quaryData.total"
        :label="`Total Queries (${quaryData.clients} Clients)`"
        bgColor="bg-emerald-500"
      />
      <CardWidget
        color="text-blue-300 dark:text-blue-400"
        :icon="mdiHandBackRight"
        :number="quaryData.blocked"
        label="Queries Blocked"
        bgColor="bg-blue-400 dark:bg-blue-500"
      />
      <CardWidget
        color="text-orange-200 dark:text-orange-300"
        :icon="mdiChartPie"
        :number="quaryData.blocked_percent"
        suffix="%"
        bgColor="bg-orange-300 dark:bg-orange-400"
        label="Percentage Blocked"
      />
      <CardWidget
        color="text-red-300 dark:text-red-400"
        :icon="mdiViewListOutline"
        :number="quaryData.domains_blocked"
        label="Blocked Domains"
        bgColor="bg-red-400 dark:bg-red-500"
      />
    </div>

    <!-- <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-2">
      <div class="flex flex-col justify-between">
        <card-transaction-bar
          v-for="(transaction,index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>
      <div class="flex flex-col justify-between">
        <card-client-bar
          v-for="client in clientBarItems"
          :key="client.id"
          :name="client.name"
          :login="client.login"
          :date="client.created"
          :progress="client.progress"
        />
      </div>
    </div> -->

    <!-- <title-sub-bar
      :icon="mdiChartPie"
      title="Total Queries Over Last 24 Hours"
    /> -->

    <CardComponent
      title="Total Queries Over Last 24 Hours"
      :icon="mdiFinance"
      :headerIcon="mdiReload"
      class="mb-6"
      @headerIconClick="fillChartData"
    >
      <div v-if="chartData">
        <BarChart :data="chartData" class="h-96" />
      </div>
    </CardComponent>

    <!-- <title-sub-bar
      :icon="mdiChartPie"
      title="Client Activity Over Last 24 Hours"
    /> -->

    <CardComponent
      title="Client activity over last 24 hours"
      :icon="mdiFinance"
      :headerIcon="mdiReload"
      class="mb-6"
      @headerIconClick="fillChartData"
    >
      <div v-if="chartData2">
        <BarChart :data="chartData2" class="h-96" />
      </div>
    </CardComponent>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
      <CardComponent
        title="Query Types"
        :icon="mdiFinance"
        :headerIcon="mdiReload"
        class="mb-6"
        @headerIconClick="fillChartData"
      >
        <div v-if="chartData3">
          <RingChart :data="chartData3" class="h-96" />
        </div>
      </CardComponent>
      <CardComponent
        title="Upstream Servers"
        :icon="mdiFinance"
        :headerIcon="mdiReload"
        class="mb-6"
        @headerIconClick="fillChartData"
      >
        <div v-if="chartData4">
          <RingChart :data="chartData4" class="h-96" />
        </div>
      </CardComponent>
      <CardComponent
        :icon="mdiMonitorCellphone"
        title="Top Allowed Domains"
        hasTable
      >
        <TopDomains />
      </CardComponent>

      <CardComponent :icon="mdiMonitorCellphone" title="Top Clients" hasTable>
        <TopClients />
      </CardComponent>
    </div>
  </MainSection>
</template>
