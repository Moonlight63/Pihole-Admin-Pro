<script setup>
import { useApi } from '@/stores/api'
import { useGlobal } from '@/stores/global';
import { useServer } from '@/stores/server';
import { useSession } from '@/stores/session';

const apiStore = useApi()

const chartData = ref(null)

const theme = computed(() => useGlobal().theme)

const show = computed(() => {
  return (useServer().connected && useSession().valid)
})

const getCssPrimary = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-primary')
const getCssWarning = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-warning')
const getCssInfo = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-info')
const getCssSuccess = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-success')
const getCssDanger = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-danger')

const fillChartData = () => {

  if(!apiStore.clientHistory.history) {
    chartData.value = null
    return
  }

  const labels = []
  const colors = [
    getCssPrimary(),
    getCssWarning(),
    getCssInfo(),
    getCssSuccess(),
    getCssDanger(),
  ]
  const data = {
    labels: [],
    datasets: []
  }


  apiStore.clientHistory.clients.forEach(function (client) {
    labels.push(client.name !== null ? client.name : client.ip);
  });

  for (let i = 0; i < apiStore.clientHistory.clients.length; i++) {
    data.datasets.push({
      data: [],
      // If we ran out of colors, make a random one
      backgroundColor:
        i < colors.length
          ? colors[i]
          : "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
      pointRadius: 0,
      pointHitRadius: 5,
      pointHoverRadius: 5,
      label: labels[i],
      cubicInterpolationMode: "monotone"
    });
  }


  // Add data for each dataset that is available
  apiStore.clientHistory.clients.forEach(function (i, c) {
    apiStore.clientHistory.history.forEach(function (item) {
      data.datasets[c].data.push(item.data[c]);
    });
  });

  // Extract data timestamps
  apiStore.clientHistory.history.forEach(function (item) {
    var d = new Date(1000 * parseInt(item.timestamp, 10));
    data.labels.push(d);
  });

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

watch(() => apiStore.clientHistory, val => {
  fillChartData()
}, { deep: true })

onMounted(() => {
  if(!apiStore.clientHistory.history) {
    return
  }
  fillChartData()
})

</script>

<template>
  <CardComponent
    title="Client activity over last 24 hours"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    class="mb-6"
    @headerIconClick="fillChartData"
    v-if="show"
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
