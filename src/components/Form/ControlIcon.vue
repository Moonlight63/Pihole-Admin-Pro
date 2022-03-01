<script setup>
defineProps({
  icon: {
    type: String,
    default: null
  },
  h: {
    type: String,
    default: null
  }
})
</script>

<template>
  <UiIconify
    :icon="icon"
    :class="h"
    class="absolute top-0 left-0 z-10 w-10 pointer-events-none text-on-main-muted"
  />
</template>
