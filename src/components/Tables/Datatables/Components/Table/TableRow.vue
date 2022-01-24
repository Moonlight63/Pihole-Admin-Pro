<template>
  <tr
    :class="{
      'cursor-pointer': clickable
    }"
    @click.stop="$emit('clicked')"
  >
    <slot />
  </tr>
</template>

<script setup>
const emits = defineEmits(['clicked'])
const props = defineProps({
  clickable: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>
