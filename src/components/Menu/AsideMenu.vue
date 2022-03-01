<script setup>
import { useGlobal } from '@/stores/global'

defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const store = useGlobal()
</script>

<template>
  <aside
    id="aside"
    class="absolute top-0 z-40 h-screen border-r-menu bg-menu w-60 transition-position xl:left-0"
    :class="store.isMenuActive ? 'left-0' : '-left-60'"
  >
    <div class="flex flex-row items-center flex-1 w-full text-on-menu h-14">
      <NavBarItem
        type="hidden lg:flex xl:hidden"
        activeColor="text-on-menu"
        active
        @click="store.toggleMenu(false)"
      >
        <UiIconify icon="mdi:menu" class="text-2xl cursor-pointer" />
      </NavBarItem>
      <div class="flex-1 px-3 text-center">
        <span>Pi-</span> <b class="font-black">Hole</b>
      </div>
    </div>
    <div>
      <template v-for="(menuGroup, index) in menu">
        <p
          v-if="typeof menuGroup === 'string'"
          :key="`a-${index}`"
          class="p-3 text-xs uppercase text-on-menu-muted"
        >
          {{ menuGroup }}
        </p>
        <AsideMenuList v-else :key="`b-${index}`" :menu="menuGroup" />
      </template>
    </div>
  </aside>
</template>
