<script setup>
import { useApi } from '@/stores/api'
import { useGlobal } from '@/stores/global';
import { useServer } from '@/stores/server';

const queryTypes = computed(() => useApi().currentSummary?.queries?.types)

const chartData = ref(null)

const theme = computed(() => useGlobal().theme)

const getCssPrimary = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-primary')
const getCssWarning = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-warning')
const getCssInfo = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-info')
const getCssSuccess = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-success')
const getCssDanger = () => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-danger')

const fillChartData = () => {

  if(!queryTypes.value) {
    chartData.value = null
    return
  }

  const types = queryTypes.value

  const colors = [
    getCssPrimary(),
    getCssWarning(),
    getCssInfo(),
    getCssSuccess(),
    getCssDanger(),
  ]

  let v = [],
      c = [],
      k = [],
      i = 0,
      sum = 0;

  // Compute total number of queries
  Object.keys(types).forEach((item) => {
    sum += types[item];
  });

  // Fill chart with data (only include query types which appeared recently)
  let querytypeids = [];
  Object.keys(types).forEach((item) => {
    if (types[item] > 0) {
      v.push((100 * types[item]) / sum);
      c.push(colors[i % colors.length]);
      k.push(item);
      querytypeids.push(i + 1);
    }

    i++;
  });

  const data = {
    labels: [],
    datasets: []
  }

  // Build a single dataset with the data to be pushed
  // var dd = { data: v, backgroundColor: c };
  // and push it at once
  data.datasets[0] = { data: v, backgroundColor: c };
  data.labels = k;

  chartData.value = data

  // const labels = [
  //   'Blocked DNS Queries',
  //   'Cached DNS Queries',
  //   'Forwarded DNS Queries'
  // ]
  // const colors = [getCssDanger(), getCssSuccess(), getCssPrimary()]


  // // Collect values and colors, and labels
  // for (let i = 0; i < labels.length; i++) {
  //   data.datasets.push({
  //     data: [],
  //     backgroundColor: colors[i],
  //     pointRadius: 0,
  //     pointHitRadius: 5,
  //     pointHoverRadius: 5,
  //     label: labels[i],
  //     cubicInterpolationMode: 'monotone'
  //   })
  // }

  // // Add data for each dataset that is available
  // apiStore.queryHistory.history.forEach((item) => {
  //   const timestamp = new Date(1000 * parseInt(item.timestamp, 10))

  //   data.labels.push(timestamp)
  //   const blocked = item.blocked
  //   const cached = item.cached
  //   const permitted = item.total - (blocked + cached)
  //   data.datasets[0].data.push(blocked)
  //   data.datasets[1].data.push(cached)
  //   data.datasets[2].data.push(permitted)
  // })

  // chartData.value = data
}

watch(theme, val => {
  if (chartData.value) {
    fillChartData()
  }
})

watch(() => queryTypes.value, val => {
  fillChartData()
}, { deep: true })

</script>

<template>
  <!-- <CardComponent
    title="Query Types"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    class="mb-6"
    @headerIconClick="fillChartData"
  >
    <div v-if="chartData">
      <RingChart :data="chartData" class="h-96" />
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
  </CardComponent> -->

  <CardComponent
    title="Upstream Servers"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    class="mb-6"
    @headerIconClick="fillChartData"
  >
    <div class="py-24 text-center text-on-main-muted">
      <p>No Data found...</p>
      <p>Future home of upstream server stats!</p>
    </div>
  </CardComponent>
</template>
