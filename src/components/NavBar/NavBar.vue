<script setup>
import { useGlobal } from '@/stores/global'
import { useUsers } from '@/stores/user'
import NavBarThemeSwitch from './NavBarThemeSwitch.vue';

const storeGlobal = useGlobal()
const storeUser = useUsers()

const userName = computed(() => storeUser.userName)

const menuToggleMobileIcon = computed(() =>
  storeGlobal.menuActive ? 'mdi:backburger' : 'mdi:forwardburger'
)

const isMenuNavBarActive = ref(false)

const menuNavBarToggleIcon = computed(() =>
  isMenuNavBarActive.value ? 'mdi:close' : 'mdi:dots-vertical'
)

const menuNavBarToggle = () => {
  isMenuNavBarActive.value = !isMenuNavBarActive.value
}
</script>

<template>
  <nav
    class="absolute top-0 left-0 right-0 z-30 flex w-screen border-b-menu bg-menu h-14 transition-position xl:pl-60 lg:w-auto lg:items-stretch"
  >
    <div class="flex items-stretch flex-1 h-14">
      <NavBarItem
        type="flex xl:hidden"
        @click.prevent="storeGlobal.toggleMenu()"
      >
        <UiIconify :icon="menuToggleMobileIcon" class="text-2xl lg:hidden" />
        <UiIconify icon="mdi:menu" class="hidden text-2xl lg:block xl:hidden" />
      </NavBarItem>
      <NavBarApiUrl />
    </div>
    <div class="flex items-stretch flex-none h-14 lg:hidden">
      <NavBarItem @click.prevent="menuNavBarToggle">
        <UiIconify :icon="menuNavBarToggleIcon" class="text-2xl" />
      </NavBarItem>
    </div>
    <div
      class="absolute left-0 w-screen shadow bg-menu top-14 lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none"
      :class="[isMenuNavBarActive ? 'block' : 'hidden']"
    >
      <div
        class="overflow-y-auto max-h-screen-menu lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <!-- <NavBarMenu hasDivider>
          <NavBarItemLabel icon="mdi:menu" label="Sample menu" />

          <template #dropdown>
            <NavBarItem>
              <NavBarItemLabel icon="mdi:clock-outline" label="Item One" />
            </NavBarItem>
            <NavBarItem>
              <NavBarItemLabel icon="mdi:cloud" label="Item Two" />
            </NavBarItem>
            <NavBarMenuDivider />
            <NavBarItem>
              <NavBarItemLabel icon="mdi:crop" label="Item Last" />
            </NavBarItem>
          </template>
        </NavBarMenu>
        <NavBarMenu hasDivider>
          <NavBarItemLabel :label="userName">
            <UserAvatar class="inline-flex w-6 h-6 mr-3" />
          </NavBarItemLabel>

          <template #dropdown>
            <NavBarItem to="/profile">
              <NavBarItemLabel icon="mdi:account" label="My Profile" />
            </NavBarItem>
            <NavBarItem>
              <NavBarItemLabel icon="mdi:cog-outline" label="Settings" />
            </NavBarItem>
            <NavBarItem>
              <NavBarItemLabel icon="mdi:email" label="Messages" />
            </NavBarItem>
            <NavBarMenuDivider />
            <NavBarItem>
              <NavBarItemLabel icon="mdi:logout" label="Log Out" />
            </NavBarItem>
          </template>
        </NavBarMenu> -->

        <NavBarThemeSwitch />

        <NavBarItem isDesktopIconOnly>
          <NavBarItemLabel
            icon="mdi:logout"
            label="Log out"
            isDesktopIconOnly
          />
        </NavBarItem>
      </div>
    </div>
  </nav>
</template>
