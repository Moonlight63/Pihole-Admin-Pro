<script setup lang="ts">
import { useApi } from '@/stores/api'
import * as chartConfig from '@/components/Charts/chart.config.js'

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

const storeApi = useApi()

const dataRaw = computed(() => storeApi.currentSummary)

const quaryData = computed(() => ({
  clients: dataRaw.value.ftl?.clients?.total || 0,
  total: dataRaw.value.queries?.total || 0,
  blocked: dataRaw.value.queries?.blocked || 0,
  blocked_percent: dataRaw.value.queries?.percent_blocked || 0,
  domains_blocked: dataRaw.value.ftl?.database?.gravity || 0
}))

onMounted(() => {
  fillChartData()
})
</script>

<template>
  <div>
    <!-- <TitleBar :titleStack="titleStack" /> -->
    <MainSection>

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

      <CardQueryHistoryChart />

      <CardClientHistoryChart />

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CardQueryTypesChart />
        <CardUpstreamChart />

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
