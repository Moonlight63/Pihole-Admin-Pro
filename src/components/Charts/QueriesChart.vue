<script setup>
import { useGlobal } from '@/stores/global';
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  animate: {
    type: Boolean,
    default: true
  }
})

const theme = computed(() => useGlobal().theme)

const root = ref(null)

let chart

function padNumber(num) {
  return ('00' + num).substr(-2, 2)
}

const getCssText = () => getComputedStyle(document.documentElement,null).getPropertyValue('--text-color-on-main')
const getCssLines = () => getComputedStyle(document.documentElement,null).getPropertyValue('--border-color-divider')

onMounted(() => {
  const cssText = getCssText()
  const cssLines = getCssLines()
  chart = new Chart(root.value, {
    type: 'bar',
    data: props.data,
    options: {
      // animation: shouldAnimate.value,
      animation: false,
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
              const label = tooltipItem[0].label
              const time = label.match(/(\d?\d):?(\d?\d?)/)
              const h = parseInt(time[1], 10)
              const m = parseInt(time[2], 10) || 0
              const from = padNumber(h) + ':' + padNumber(m - 5) + ':00'
              const to = padNumber(h) + ':' + padNumber(m + 4) + ':59'
              return 'Queries from ' + from + ' to ' + to
            },
            label: (tooltipItems) => {
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
          grid: {
            color: cssLines,
            // tickColor: cssText,
            borderWidth: 0
          },
          ticks: {
            color: cssText
          }
        },
        y: {
          stacked: true,
          ticks: {
            beginAtZero: true,
            color: cssText
          },
          grid: {
            color: cssLines,
            // tickColor: cssText,
            borderWidth: 0
          }
        }
      }
    }
  })
})

const chartData = computed(() => props.data)
// const shouldAnimate = computed(() => props.animate)

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})

watch(theme, (theme) => {
  if (chart) {
    const cssText = getCssText()
    const cssLines = getCssLines()
    chart.options.scales.x.grid.color = cssLines
    chart.options.scales.x.ticks.color = cssText
    chart.options.scales.y.grid.color = cssLines
    chart.options.scales.y.ticks.color = cssText
    chart.update()
  }
})

// watch(shouldAnimate, (data) => {
//   if (chart) {
//     chart.options.animate = data.value
//     chart.update()
//   }
// })
</script>

<template>
  <canvas ref="root" />
</template>
