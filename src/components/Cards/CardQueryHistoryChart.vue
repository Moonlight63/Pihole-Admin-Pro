<script setup>
import { useApi } from '@/stores/api'
import { useGlobal } from '@/stores/global';
import { useServer } from '@/stores/server';

const apiStore = useApi()

const chartData = ref(null)

const theme = computed(() => useGlobal().theme)

const getCssPrimary = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-primary')
const getCssSuccess = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-success')
const getCssDanger = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-danger')

const fillChartData = () => {

  if(!apiStore.queryHistory.history) {
    chartData.value = null
    return
  }

  const labels = [
    'Blocked DNS Queries',
    'Cached DNS Queries',
    'Forwarded DNS Queries'
  ]
  const colors = [getCssDanger(), getCssSuccess(), getCssPrimary()]

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

const animate = ref(true)

watch(theme, val => {
  if (chartData.value) {
    fillChartData()
  }
})

watch(() => apiStore.queryHistory, val => {
  fillChartData()
}, { deep: true })

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
      <QueriesChart :data="chartData" :animate="animate" class="h-96" />
    </div>
    <div v-else-if="useServer().connected" class="py-24 text-center text-on-main-muted" >
      <p>No Data found...</p>
      <p>It appears that you are connected to a server, but the server has not returned any data.</p>
      <p>Is this a new server, or do you have logging disabled?</p>
    </div>
    <div v-else class="py-24 text-center text-on-main-muted">
      <p>No Data found...</p>
      <p>Are you connected to a server?</p>
    </div>
  </CardComponent>
</template>
