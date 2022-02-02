<script setup>
import menu from '@/menu.js'

import { useGlobal } from '@/store/global'

const store = useGlobal()
</script>

<template>
  <div class="flex justify-center bg-main">
    <div
      class="relative w-full h-screen overflow-hidden shadow-xl shadow-black pt-14 xl:pl-60"
      :class="{ 'max-w-screen-2xl': store.lockWidth }"
    >
      <AsideMenu :menu="menu" />
      <div
        class="absolute top-0 left-0 w-full h-full pt-14 xl:pl-60 transition-position"
        :class="{ 'ml-60 lg:ml-0': store.isMenuActive }"
      >
        <NavBar />
        <div
          class="relative flex flex-col w-full h-full min-h-full overflow-hidden overflow-y-auto"
        >
          <div class="relative flex flex-row flex-grow flex-nowrap">
            <RouterView v-slot="{ Component, route }">
              <Transition :name="route.meta.transition || 'slide-up'">
                <div :key="route.path" class="w-full">
                  <Component :is="Component" :key="route.path" />
                </div>
              </Transition>
            </RouterView>
          </div>
          <FooterBar />
        </div>

        <Transition
          enterActiveClass="transition duration-150 ease-in"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveActiveClass="transition duration-150 ease-in"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <Overlay
            v-show="store.isMenuActive"
            class="hidden lg:block xl:hidden"
            zIndex="z-30"
            @overlayClick="store.toggleMenu(false)"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.25s ease-out;
  flex: none;
}

.slide-up-enter-active {
  margin-left: -100%;
}

.slide-up-enter-from {
  transform: translateY(100%);
}
.slide-up-leave-to {
  transform: translateY(-100%);
}
</style>
