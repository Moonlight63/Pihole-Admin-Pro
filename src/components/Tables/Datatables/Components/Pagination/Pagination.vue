<script setup lang="ts">
import { computed, PropType } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/UI/Level.vue'

import JbButtons from '@/components/Form/JbButtons.vue'
import JbButton from '@/components/Form/JbButton.vue'

const props = defineProps({
  total: { type: Number as PropType<number>, required: true },
  perPage: { type: Number as PropType<number>, required: true },
  currentPage: {
    type: Number as PropType<number>,
    required: false,
    default: 0
  },
  maxVisibleButtons: {
    type: Number as PropType<number>,
    required: false,
    default: 5
  }
})

const emit = defineEmits(['changed'])

const currentStart = computed(() => props.currentPage * props.perPage + 1)
const currentEnd = computed(() =>
  props.total > (props.currentPage + 1) * props.perPage
    ? (props.currentPage + 1) * props.perPage
    : props.total
)
const totalPages = computed(() => Math.ceil(props.total / props.perPage))
const store = useStore()
const darkMode = computed(() => store.state.darkMode)

const startPage = computed(() => {
  if (props.currentPage === 0) {
    return 0
  }

  if (props.currentPage > totalPages.value - props.maxVisibleButtons) {
    return totalPages.value - props.maxVisibleButtons
  }

  return props.currentPage - 1
})
const endPage = computed(() =>
  Math.min(startPage.value + props.maxVisibleButtons - 1, totalPages.value - 1)
)
const pages = computed(() => {
  const range = []
  for (let i = startPage.value; i <= endPage.value; i += 1) {
    if (i >= 0) {
      range.push(i)
    }
  }
  return range
})

const isInFirstPage = computed(() => props.currentPage === 0)
const isInLastPage = computed(() => props.currentPage === totalPages.value - 1)

const goToPageNumber = (page: number) => {
  emit('changed', page)
}
const gotoFirstPage = () => goToPageNumber(0)
const gotoLastPage = () => goToPageNumber(totalPages.value - 1)
const gotoNextPage = () =>
  goToPageNumber(
    props.currentPage >= totalPages.value - 1
      ? totalPages.value - 1
      : props.currentPage + 1
  )
const gotoPreviousPage = () =>
  goToPageNumber(props.currentPage <= 0 ? 0 : props.currentPage - 1)
// const LEFT = 'left'
// const showDots = (position = LEFT) => {
//   const number = position === LEFT ? 1 : totalPages.value - 1
//   const nextNumber = position === LEFT ? 2 : totalPages.value - 1
//   // return !pages.value.includes(number) || !pages.value.includes(nextNumber)
//   return false
// }
</script>

<template>
  <div v-if="totalPages" class="table-pagination">
    <Level>
      <div v-if="total">
        <slot
          name="pagination-info"
          :start="currentStart"
          :end="currentEnd"
          :total="total"
        >
          <small>
            Showing {{ currentStart }} to {{ currentEnd }} of
            {{ total }} results.
          </small>
        </slot>
      </div>

      <JbButtons v-if="totalPages > 1">
        <!-- :outline="darkMode" -->
        <JbButton
          key="page_first"
          :disabled="isInFirstPage"
          :outline="darkMode"
          label="&laquo;"
          small
          @click.prevent="gotoFirstPage"
        />
        <JbButton
          key="page_previous"
          :disabled="isInFirstPage"
          :outline="darkMode"
          label="&lsaquo;"
          small
          @click.prevent="gotoPreviousPage"
        />
        <!-- <template v-if="showDots('left')">
          <JbButton
            key="page_0"
            :disabled="isInFirstPage"
            :active="isInFirstPage"
            :outline="darkMode"
            label="1"
            small
            @click.prevent="gotoFirstPage"
          />
          <JbButton
            key="page_divider_left"
            :disabled="true"
            :active="false"
            :outline="darkMode"
            label="..."
            small
          />
        </template> -->
        <JbButton
          v-for="page in pages"
          :key="`pages_${page}`"
          :active="page === currentPage"
          :disabled="page === currentPage"
          :label="page + 1"
          :outline="darkMode"
          small
          @click.prevent="goToPageNumber(page)"
        />
        <!-- <template v-if="showDots('right')">
          <JbButton
            key="page_divider_right"
            :disabled="true"
            :active="false"
            :outline="darkMode"
            label="..."
            small
          />
          <JbButton
            :key="`page_${totalPages - 1}`"
            :disabled="isInLastPage"
            :active="isInLastPage"
            :label="totalPages"
            :outline="darkMode"
            small
            @click.prevent="gotoLastPage"
          />
        </template> -->
        <JbButton
          key="page_next"
          :disabled="isInLastPage"
          :outline="darkMode"
          label="&rsaquo;"
          small
          @click.prevent="gotoNextPage"
        />
        <JbButton
          key="page_last"
          :disabled="isInLastPage"
          :outline="darkMode"
          label="&raquo;"
          small
          @click.prevent="gotoLastPage"
        />
      </JbButtons>
    </Level>
  </div>
</template>
