<script setup>
import { useGlobal } from '@/stores/global'
import { useRoute } from 'vue-router'

const route = useRoute()

const bg = computed(() => {
  const value = route.meta.bg

  return ['login', 'error'].includes(value) ? value : 'error'
})

const store = useGlobal()

const darkMode = computed(() => store.darkMode)

const componentClass = computed(() => {
  const bgs = {
    login: 'bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500',
    loginDark: 'bg-gradient-to-tr from-purple-900 via-pink-900 to-red-900',
    error: 'bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-500',
    errorDark: 'bg-gradient-to-tr from-pink-900 via-red-900 to-yellow-900'
  }

  const bgKey = darkMode.value ? `${bg.value}Dark` : bg.value

  return bgs[bgKey] ?? ''
})
</script>

<template>
  <MainSection
    class="flex items-center justify-center h-screen"
    :class="componentClass"
  >
    <!-- <div class="flex justify-center">
    <div
      class="relative w-full h-screen overflow-hidden shadow-xl shadow-black"
    >
      <div class="absolute top-0 left-0 w-full h-full transition-position">
        <div class="w-full h-full"> -->
    <RouterView />
    <!-- </div>
      </div>
    </div>
  </div> -->
    <!-- <slot
      card-class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
      card-rounded="rounded-lg"
    /> -->
  </MainSection>
</template>
