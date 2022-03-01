<script setup>
import { useApi } from '@/stores/api'
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '@/../tailwind.config.js'
// import { TailwindConfig } from 'tailwindcss/tailwind-config'

// const fullConfig = resolveConfig(tailwindConfig as unknown as TailwindConfig)

// const orange = fullConfig.theme.colors
// console.log('🚀 ~ file: CardQueryHistoryChart.vue ~ line 10 ~ orange', orange)

// const titleStack = ref(['Admin', 'Dashboard'])

const apiStore = useApi()

const chartData = ref(null)

const fillChartData = () => {
  const labels = [
    'Blocked DNS Queries',
    'Cached DNS Queries',
    'Forwarded DNS Queries'
  ]
  const colors = ['rgb(239 68 68)', 'rgb(16 185 129)', 'rgb(59 130 246)']

  const data = {
    labels: [],
    datasets: []
  }

  // Collect values and colors, and labels
  for (let i = 0; i < labels.length; i++) {
    data.datasets.push({
      data: [],
      backgroundColor: colors[i],
      pointRadius: 0,
      pointHitRadius: 5,
      pointHoverRadius: 5,
      label: labels[i],
      cubicInterpolationMode: 'monotone'
    })
  }

  // Add data for each dataset that is available
  apiStore.queryHistory.history.forEach((item) => {
    const timestamp = new Date(1000 * parseInt(item.timestamp, 10))

    data.labels.push(timestamp)
    const blocked = item.blocked
    const cached = item.cached
    const permitted = item.total - (blocked + cached)
    data.datasets[0].data.push(blocked)
    data.datasets[1].data.push(cached)
    data.datasets[2].data.push(permitted)
  })

  chartData.value = data
}

// const props = defineProps({
//   name: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <CardComponent
    title="Client activity over last 24 hours"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    class="mb-6"
    @headerIconClick="fillChartData"
  >
    <div v-if="chartData">
      <QueriesChart :data="chartData" class="h-96" />
    </div>
    <div v-else class="py-24 text-center text-on-main-muted">
      <p>No Data found...</p>
      <p>Are you connected to a server?</p>
    </div>
  </CardComponent>
</template>
