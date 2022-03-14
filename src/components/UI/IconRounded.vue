<script setup>
import { computed } from 'vue'
import { colorsText, colorsBg } from '@/colors.js'
import Icon from '@/components/UI/Icon.vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  bg: Boolean
})

const iconStyle = computed(() =>
  props.bg
    ? colorsBg[props.type]
    : [colorsText[props.type], 'bg-gray-50 dark:bg-gray-800']
)
</script>

<template>
  <UiIconify :icon="icon" class="text-2xl rounded-full" :class="iconStyle" />
</template>
