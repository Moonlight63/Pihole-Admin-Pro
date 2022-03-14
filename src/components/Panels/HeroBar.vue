<script setup>
import { useGlobal } from '@/stores/global'
</script>

<template>
  <section
    class="p-6 border-t-card border-b-card bg-card"
  >
    <Level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <!-- <JbButton
        :label="useGlobal().darkMode ? 'Light Mode' : 'Dark Mode'"
        icon="mdi:theme-light-dark"
        @click="useGlobal().toggleDarkMode()"
      /> -->
    </Level>
  </section>
</template>
