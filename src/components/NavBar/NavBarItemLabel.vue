<script setup>
defineProps({
  icon: {
    type: String,
    default: null
  },
  label: {
    type: String,
    required: true
  },
  isDesktopIconOnly: Boolean
})
</script>

<template>
  <slot />
  <UiIconify v-if="icon" :icon="icon" class="transition-colors" />
  <span
    class="px-2 transition-colors"
    :class="{ 'lg:hidden': isDesktopIconOnly }"
    >{{ label }}</span
  >
</template>
