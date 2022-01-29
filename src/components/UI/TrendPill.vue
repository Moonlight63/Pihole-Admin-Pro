<script setup>
const props = defineProps({
  trend: {
    type: String,
    required: true
  },
  trendType: {
    type: String,
    default: null
  },
  small: Boolean
})

const trendStyle = computed(() => {
  if (props.trendType === 'up') {
    return {
      icon: 'mdi:chevron-up',
      style: 'success'
    }
  }

  if (props.trendType === 'down') {
    return {
      icon: 'mdi:chevron-down',
      style: 'danger'
    }
  }

  if (props.trendType === 'alert') {
    return {
      icon: 'mdi:alert-circle-outline',
      style: 'warning'
    }
  }

  return {
    style: 'info'
  }
})
</script>

<template>
  <Pill
    :text="trend"
    :type="trendStyle.style"
    :icon="trendStyle.icon"
    :small="small"
  />
</template>
