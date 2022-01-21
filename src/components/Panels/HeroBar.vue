<script setup>
import { mdiThemeLightDark } from '@mdi/js'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Level from '@/components/UI/Level.vue'
import JbButton from '@/components/Form/JbButton.vue'

const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const darkModeToggle = () => {
  store.dispatch('darkMode')
}
</script>

<template>
  <section class="bg-white border-t border-b border-gray-100 p-6 dark:bg-gray-900 dark:border-gray-900 dark:text-white">
    <Level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <JbButton
        :label="darkMode ? 'Light Mode' : 'Dark Mode'"
        :icon="mdiThemeLightDark"
        :outline="darkMode"
        @click="darkModeToggle"
      />
    </Level>
  </section>
</template>
