<script setup>
import { computed } from 'vue'

const props = defineProps({
  path: {
    type: String,
    required: true
  },
  w: {
    type: String,
    default: 'w-6'
  },
  h: {
    type: String,
    default: 'h-6'
  },
  sizeW: {
    type: [String, Number],
    default: ''
  },
  sizeH: {
    type: [String, Number],
    default: ''
  },
  size: {
    type: [String, Number],
    default: 16
  }
})

const spanClass = computed(() => `inline-flex justify-center items-center ${props.w} ${props.h}`)
const svgWidth = computed(() => {
  if (props.sizeW || props.sizeH) {
    return props.sizeW
  }
  return props.size
})
const svgHeight = computed(() => {
  if (props.sizeW || props.sizeH) {
    return props.sizeH
  }
  return props.size
})
</script>

<template>
  <span :class="spanClass">
    <svg
      viewBox="0 0 24 24"
      :width="svgWidth"
      :height="svgHeight"
      class="inline-block"
    >
      <path
        fill="currentColor"
        :d="path"
      />
    </svg>
  </span>
</template>
