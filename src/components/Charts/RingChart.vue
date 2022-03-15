<script setup>
import { useGlobal } from '@/stores/global';
import Chart from 'chart.js/auto'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const root = ref(null)

let chart

const chartData = computed(() => props.data)

const getCssText = () => getComputedStyle(document.documentElement,null).getPropertyValue('--text-color-on-main')

const hoverPointer = ref(false)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'doughnut',
    data: chartData.value,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        arc: {
          borderWidth: 0,
        }
      },
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
          labels: {
            color: getCssText()
          },
          display: true,
          position: 'right',
          align: 'start',
          rtl: true,
          onClick: Chart.overrides.doughnut.plugins.legend.onClick,
          onHover: () => { hoverPointer.value = true },
          onLeave: () => { hoverPointer.value = false }
        }
      }
    }
  })

  // Stop animations after inital load
  chart.options.animation.duration = 0
})

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})

const theme = computed(() => useGlobal().theme)

watch(theme, (theme) => {
  if (chart) {
    const cssText = getCssText()
    chart.options.plugins.legend.labels.color = cssText
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root" :class="hoverPointer ? 'cursor-pointer' : ''" />
</template>
