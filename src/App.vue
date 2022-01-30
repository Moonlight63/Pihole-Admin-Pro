<script setup>
// import { computed } from 'vue'
import { useStore } from 'vuex'
// import menu from '@/menu.js'
// import NavBar from '@/components/NavBar/NavBar.vue'
// import AsideMenu from '@/components/Menu/AsideMenu.vue'
// import FooterBar from '@/components/Panels/FooterBar.vue'
// import Overlay from '@/components/UI/Overlay.vue'

const store = useStore()

store.commit('user', {
  name: 'John Doe',
  email: 'john@example.com',
  avatar:
    'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93'
})

// const isAsideLgActive = computed(() => store.state.isAsideLgActive)

// const overlayClick = () => {
//   store.dispatch('asideLgToggle', false)
// }
</script>

<template>
  <!-- <NavBar />
  <AsideMenu :menu="menu" />
  <RouterView />
  <FooterBar />
  <Overlay
    v-show="isAsideLgActive"
    zIndex="z-30"
    @overlayClick="overlayClick"
  /> -->
  <RouterView />
</template>
