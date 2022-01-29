<script setup>
import { useStore } from 'vuex'

defineProps({
  number: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: null
  },
  prefix: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  bgColor: {
    type: String,
    default: undefined
  }
})

const store = useStore()

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <CardComponent :bgColor="bgColor" class="relative">
    <!-- <level mobile> -->
    <div class="z-[1] relative">
      <h3 class="text-lg leading-tight">
        {{ label }}
      </h3>
      <h1 class="text-3xl font-semibold leading-tight">
        <GrowingNumber :value="number" :prefix="prefix" :suffix="suffix" />
      </h1>
    </div>
    <div
      class="text-8xl absolute top-0 bottom-0 left-0 right-0 flex items-center justify-end z-[0]"
    >
      <UiIconify
        v-if="icon"
        :icon="icon"
        size="100%"
        w=""
        h="h-full aspect-square"
        :class="color"
      />
    </div>
    <!-- </level> -->
  </CardComponent>
</template>
