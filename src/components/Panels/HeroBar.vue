<script setup>
import { useStore } from 'vuex'

const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const darkModeToggle = () => {
  store.dispatch('darkMode')
}
</script>

<template>
  <section
    class="p-6 bg-white border-t border-b border-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:text-white"
  >
    <Level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <JbButton
        :label="darkMode ? 'Light Mode' : 'Dark Mode'"
        icon="mdi:theme-light-dark"
        :outline="darkMode"
        @click="darkModeToggle"
      />
    </Level>
  </section>
</template>
