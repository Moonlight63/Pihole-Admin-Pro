<script setup>
import { useStore } from 'vuex'

defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  }
})

const store = useStore()

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <section class="flex items-center justify-between px-6 mb-6">
    <div class="flex items-center justify-start">
      <UiIconify v-if="icon" :icon="icon" class="mr-3" />
      <h1 class="text-2xl">
        {{ title }}
      </h1>
    </div>
    <JbButton icon="mdi:cog" :outline="darkMode" small />
  </section>
</template>
