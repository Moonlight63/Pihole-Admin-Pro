<script setup>
import { useStore } from 'vuex'
import menu from '@/menu.js'

const store = useStore()

const isAsideLgActive = computed(() => store.state.isAsideLgActive)
const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

const overlayClick = () => {
  store.dispatch('asideLgToggle', false)
}
</script>

<template>
  <div class="flex justify-center">
    <div
      class="relative w-full h-screen overflow-hidden shadow-xl max-w-screen-2xl shadow-black pt-14 xl:pl-60"
    >
      <AsideMenu :menu="menu" />
      <div
        class="absolute top-0 left-0 w-full h-full pt-14 xl:pl-60 transition-position"
        :class="{ 'ml-60 lg:ml-0': isAsideMobileExpanded }"
      >
        <NavBar />
        <div class="w-full h-full overflow-y-scroll">
          <RouterView />
          <FooterBar />
          <Overlay
            v-show="isAsideLgActive"
            zIndex="z-30"
            @overlayClick="overlayClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
