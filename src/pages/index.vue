<script setup lang="ts">
import { useApi } from '@/stores/api'
// import { useClients } from '@/stores/clients'
import * as chartConfig from '@/components/Charts/chart.config.js'

// const titleStack = ref(['Admin', 'Dashboard'])

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

const csstest = computed(() => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-primary'))

const storeApi = useApi()
// const storeClients = useClients()

const dataRaw = computed(() => storeApi.currentSummary)

const quaryData = computed(() => ({
  clients: dataRaw.value.ftl?.clients?.total || 0,
  total: dataRaw.value.queries?.total || 0,
  blocked: dataRaw.value.queries?.blocked || 0,
  blocked_percent: dataRaw.value.queries?.percent_blocked || 0,
  domains_blocked: dataRaw.value.ftl?.database?.gravity || 0
}))

// const clientBarItems = computed(() => storeClients.clients.slice(0, 3))

// const transactionBarItems = computed(() => storeClients.history.slice(0, 3))

onMounted(() => {
  fillChartData()
})
</script>

<template>
  <div>
    <!-- <TitleBar :titleStack="titleStack" /> -->
    <MainSection>
      <!-- <CardComponent
      title="Total Queries Over Last 24 Hours"
      :icon="mdiFinance"
      :headerIcon="mdiReload"
      class="mb-6"
      @headerIconClick="fillChartData"
    >
      <TableTest :checkable="true" />
    </CardComponent> -->
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
        <CardMetric
          class="text-on-success"
          color="text-white text-opacity-25"
          icon="ion:earth"
          :number="quaryData.total"
          :label="`Total Queries (${quaryData.clients} Clients)`"
          bgColor="bg-success"
        />
        <CardMetric
          class="text-on-primary"
          color="text-white text-opacity-25"
          icon="ion:hand-right"
          :number="quaryData.blocked"
          label="Queries Blocked"
          bgColor="bg-primary"
        />
        <CardMetric
          class="text-on-warning"
          color="text-white text-opacity-25"
          icon="ion:pie-chart"
          :number="quaryData.blocked_percent"
          suffix="%"
          bgColor="bg-warning"
          label="Percentage Blocked"
        />
        <CardMetric
          class="text-on-danger"
          color="text-white text-opacity-25"
          icon="ion:ios-list-box"
          :number="quaryData.domains_blocked"
          label="Blocked Domains"
          bgColor="bg-danger"
        />
      </div>

      <!-- <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <CardWidget
          trend="12%"
          trendType="up"
          color="text-emerald-500"
          icon="mdi:account-multiple"
          :number="512"
          label="Clients"
        />
        <CardWidget
          trend="12%"
          trendType="down"
          color="text-blue-500"
          icon="mdi:cart-outline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <CardWidget
          trend="Overflow"
          trendType="alert"
          color="text-red-500"
          icon="mdi:chart-timeline-variant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </div>

      <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-2">
        <div class="flex flex-col justify-between">
          <CardTransactionBar
            v-for="(transaction, index) in transactionBarItems"
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
          <CardClientBar
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

      <CardQueryHistoryChart />

      <!-- <title-sub-bar
      :icon="mdiChartPie"
      title="Client Activity Over Last 24 Hours"
    /> -->

      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <CardComponent
          title="Query Types"
          icon="mdi:finance"
          headerIcon="mdi:reload"
          class="mb-6"
          @headerIconClick="fillChartData"
        >
          <div v-if="chartData3">
            <RingChart :data="chartData3" class="h-96" />
          </div>
        </CardComponent>
        <CardComponent
          title="Upstream Servers"
          icon="mdi:finance"
          headerIcon="mdi:reload"
          class="mb-6"
          @headerIconClick="fillChartData"
        >
          <div v-if="chartData4">
            <RingChart :data="chartData4" class="h-96" />
          </div>
        </CardComponent>
        <CardComponent
          icon="mdi:monitor-cellphone"
          title="Top Allowed Domains"
          hasTable
        >
          <TopDomains />
        </CardComponent>

        <CardComponent
          icon="mdi:monitor-cellphone"
          title="Top Clients"
          hasTable
        >
          <TopClients />
        </CardComponent>
      </div>
    </MainSection>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'default'
  title: 'Dashboard'
  icon: 'mdi:desktop-mac'
</route>
