<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
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

const spanClass = computed(
  () => `inline-flex justify-center items-center ${props.w} ${props.h}`
)
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
    <slot class="inline-block" :width="svgWidth" :height="svgHeight" />
  </span>
</template>

<!-- <script lang="ts">
export default {
  name: 'JbButtons',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  render() {
    // return h(resolveComponent('icon-' + this.icon))
    return h(IconMdiEarth)
  }
}
</script> -->
