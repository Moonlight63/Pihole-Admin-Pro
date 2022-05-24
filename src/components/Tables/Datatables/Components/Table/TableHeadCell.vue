<template>
  <th
    :class="{
      'cursor-pointer': sortable
    }"
    @click.stop="clicked()"
  >
    <Level>
      <slot />
      <UiIconify v-if="sortable" :icon="computedState" />
    </Level>
  </th>
</template>

<script setup>
const props = defineProps({
  sortable: {
    type: Boolean,
    default: false
  },
  sorting: {
    type: Boolean,
    default: false
  },
  ascending: {
    type: Boolean,
    default: false
  }
})

const computedState = computed(() =>
  props.sorting
    ? props.ascending
      ? 'mdi:sort-ascending'
      : 'mdi:sort-descending'
    : 'mdi:sort'
)

const emits = defineEmits(['clicked'])

const clicked = () => {
  if (props.sortable) {
    emits('clicked')
  }
}
</script>
