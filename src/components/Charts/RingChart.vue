<script setup>
import { ref, watch, computed, onMounted } from 'vue'
// import {
//   Chart,
//   LineElement,
//   PointElement,
//   LineController,
//   LinearScale,
//   CategoryScale,
//   Tooltip
// } from 'chart.js'

import Chart from 'chart.js/auto'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
  // labels: {
  //   type: Array,
  //   required: false,
  //   default: []
  // }
})

const root = ref(null)

let chart

// Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'doughnut',
    data: props.data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false
        },
        x: {
          display: false
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'right',
          align: 'start'
        }
      }
    }
  })
})

const chartData = computed(() => props.data)

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root" />
</template>
