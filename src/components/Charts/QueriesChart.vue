<script setup>
// import { ref, watch, computed, onMounted } from 'vue'
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
import 'chartjs-adapter-date-fns'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const root = ref(null)

let chart

function padNumber(num) {
  return ('00' + num).substr(-2, 2)
}

const csstest = computed(() => getComputedStyle(document.documentElement,null).getPropertyValue('--colors-primary'))

// Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'bar',
    data: props.data,
    options: {
      interaction: {
        mode: 'x'
      },
      plugins: {
        tooltip: {
          enabled: true,
          mode: 'x',
          itemSort: function (a, b) {
            return b.datasetIndex - a.datasetIndex
          },
          callbacks: {
            title: function (tooltipItem) {
              console.log(
                '🚀 ~ file: QueriesChart.vue ~ line 46 ~ onMounted ~ tooltipItem',
                tooltipItem
              )
              const label = tooltipItem[0].label
              const time = label.match(/(\d?\d):?(\d?\d?)/)
              const h = parseInt(time[1], 10)
              const m = parseInt(time[2], 10) || 0
              const from = padNumber(h) + ':' + padNumber(m - 5) + ':00'
              const to = padNumber(h) + ':' + padNumber(m + 4) + ':59'
              return 'Queries from ' + from + ' to ' + to
            },
            label: (tooltipItems) => {
              console.log(
                '🚀 ~ file: QueriesChart.vue ~ line 77 ~ onMounted ~ tooltipItems.datasetIndex',
                tooltipItems
              )
              console.log(
                '🚀 ~ file: QueriesChart.vue ~ line 54 ~ onMounted ~ tooltipItems',
                tooltipItems.chart.data.datasets
              )

              let percentage = 0
              const current = parseInt(tooltipItems.parsed.y, 10)
              const blocked = parseInt(tooltipItems.parsed._stacks.y[0], 10)
              const cached = parseInt(tooltipItems.parsed._stacks.y[1], 10)
              const forwarded = parseInt(tooltipItems.parsed._stacks.y[2], 10)
              const total = blocked + cached + forwarded
              if (total > 0) {
                percentage = (100 * current) / total
              }

              return (
                tooltipItems.chart.data.datasets[tooltipItems.datasetIndex]
                  .label +
                ': ' +
                current +
                ' (' +
                percentage.toFixed(1) +
                '%)'
              )
            }
          }
        },
        legend: {
          display: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time',
          stacked: true,
          time: {
            unit: 'hour',
            displayFormats: {
              hour: 'HH:mm'
            },
            tooltipFormat: 'HH:mm'
          },
          gridLines: {
            color: '#ccc'
          },
          ticks: {
            fontColor: '#ddd'
          }
        },
        y: {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: '#ddd'
          },
          gridLines: {
            color: '#ccc'
          }
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
