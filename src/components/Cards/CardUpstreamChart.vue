<script setup>
import { useApi } from '@/stores/api'
import { useGlobal } from '@/stores/global';
import { useServer } from '@/stores/server';
import { useSession } from '@/stores/session';

const upstreams = computed(() => useApi().upstreams.upstreams)

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

  if(!upstreams.value) {
    chartData.value = null
    return
  }

  const streams = upstreams.value

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
      sum = 0,
      values = [];

  // Compute total number of queries
  streams.forEach(function (item) {
    sum += item.count;
  });

  // Collect values and colors
  streams.forEach(function (item) {
    let label = item.ip;
    if (item.name.length > 0) {
      label = item.ip;
    }

    let percent = (100 * item.count) / sum;
    values.push([label, percent, colors[i++ % colors.length]]);
  });

  // Split data into individual arrays for the graphs
  values.forEach(function (item) {
    k.push(item[0]);
    v.push(item[1]);
    c.push(item[2]);
  });

  // Build a single dataset with the data to be pushed
  // let dd = { data: v, backgroundColor: c };

  const data = {
    labels: k,
    datasets: [{ data: v, backgroundColor: c }]
  }

  chartData.value = data

  // Build a single dataset with the data to be pushed
  // var dd = { data: v, backgroundColor: c };
  // and push it at once
  // data.datasets[0] = { data: v, backgroundColor: c };
  // data.labels = k;






  // let v = [],
  //     c = [],
  //     k = [],
  //     i = 0,
  //     sum = 0;

  // // Compute total number of queries
  // Object.keys(types).forEach((item) => {
  //   sum += types[item];
  // });

  // // Fill chart with data (only include query types which appeared recently)
  // let querytypeids = [];
  // Object.keys(types).forEach((item) => {
  //   if (types[item] > 0) {
  //     v.push((100 * types[item]) / sum);
  //     c.push(colors[i % colors.length]);
  //     k.push(item);
  //     querytypeids.push(i + 1);
  //   }

  //   i++;
  // });

  // const data = {
  //   labels: [],
  //   datasets: []
  // }

  // // Build a single dataset with the data to be pushed
  // // var dd = { data: v, backgroundColor: c };
  // // and push it at once
  // data.datasets[0] = { data: v, backgroundColor: c };
  // data.labels = k;

  // chartData.value = data

}

watch(theme, val => {
  if (chartData.value) {
    fillChartData()
  }
})

watch(() => upstreams.value, val => {
  fillChartData()
}, { deep: true })

onMounted(() => {
  if(!upstreams.value) {
    return
  }
  fillChartData()
})

</script>

<template>
  <CardComponent
    title="Upstreams"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    @headerIconClick="fillChartData"
    v-if="show"
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
  </CardComponent>
</template>
  <!-- <CardComponent
    title="Upstream Servers"
    icon="mdi:finance"
    headerIcon="mdi:reload"
    @headerIconClick="fillChartData"
  >
    <div class="py-24 text-center text-on-main-muted">
      <p>No Data found...</p>
      <p>Future home of upstream server stats!</p>
    </div>
  </CardComponent> -->
