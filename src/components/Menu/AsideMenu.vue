<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiMenu } from '@mdi/js'
import AsideMenuList from '@/components/Menu/AsideMenuList.vue'
import NavBarItem from '@/components/NavBar/NavBarItem.vue'
import Icon from '@/components/UI/Icon.vue'

defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const store = useStore()

const isFullScreen = computed(() => store.state.isFullScreen)

const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

const isAsideLgActive = computed(() => store.state.isAsideLgActive)

const asideLgClose = () => {
  store.dispatch('asideLgToggle', false)
}

</script>

<template>
  <aside
    v-show="!isFullScreen"
    id="aside"
    class="fixed top-0 z-40 h-screen bg-menu w-60 transition-position lg:left-0 dark:border-r dark:border-gray-800 "
    :class="[ isAsideMobileExpanded ? 'left-0' : '-left-60', isAsideLgActive ? 'block' : 'lg:hidden xl:block' ]"
  >
    <div class="flex flex-row items-center flex-1 w-full text-menu h-14">
      <NavBarItem
        type="hidden lg:flex xl:hidden"
        active-color="text-menu"
        active
        @click="asideLgClose"
      >
        <Icon
          :path="mdiMenu"
          class="cursor-pointer"
          size="24"
        />
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
          class="p-3 text-xs uppercase text-menu-accent"
        >
          {{ menuGroup }}
        </p>
        <AsideMenuList
          v-else
          :key="`b-${index}`"
          :menu="menuGroup"
        />
      </template>
    </div>
  </aside>
</template>
