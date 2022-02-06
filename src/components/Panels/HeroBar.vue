<script setup>
import { useGlobal } from '@/stores/global'
</script>

<template>
  <section
    class="p-6 border-t border-b border-gray-100 bg-panel dark:border-gray-900 dark:text-white"
  >
    <Level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <JbButton
        :label="useGlobal().darkMode ? 'Light Mode' : 'Dark Mode'"
        icon="mdi:theme-light-dark"
        @click="useGlobal().toggleDarkMode()"
      />
    </Level>
  </section>
</template>
