<template>
  <th
    :class="{
      'cursor-pointer': sortable
    }"
    @click.stop="$emit('clicked')"
  >
    <Level>
      <slot />
      <Icon
        v-if="sortable"
        :path="computedState"
      />
    </Level>
  </th>
</template>

<script setup>
import { computed } from 'vue'
import Level from '@/components/Level.vue'
import Icon from '@/components/Icon.vue'
import { mdiSort, mdiSortAscending, mdiSortDescending } from '@mdi/js'

const States = {
  0: mdiSort,
  1: mdiSortAscending,
  2: mdiSortDescending
}

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

const computedState = computed(() => props.sorting ? props.ascending ? mdiSortAscending : mdiSortDescending : mdiSort)

const emits = defineEmits(['clicked'])

</script>
