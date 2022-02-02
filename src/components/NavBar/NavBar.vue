<script setup>
import { useStore } from 'vuex'
import { useGlobal } from '@/store/global'

const store = useStore()

const storeG = useGlobal()

const toggleLightDark = () => {
  store.dispatch('darkMode')
}

const userName = computed(() => store.state.userName)

const menuToggleMobileIcon = computed(() =>
  storeG.isMenuActive ? 'mdi:backburger' : 'mdi:forwardburger'
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
    class="absolute top-0 left-0 right-0 z-30 flex w-screen border-b border-gray-100 bg-panel h-14 transition-position xl:pl-60 lg:w-auto lg:items-stretch dark:border-gray-800"
  >
    <div class="flex items-stretch flex-1 h-14">
      <NavBarItem type="flex xl:hidden" @click.prevent="storeG.toggleMenu()">
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
      class="absolute left-0 w-screen shadow bg-panel top-14 lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none"
      :class="[isMenuNavBarActive ? 'block' : 'hidden']"
    >
      <div
        class="overflow-y-auto max-h-screen-menu lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <NavBarMenu hasDivider>
          <NavBarItemLabel :icon="mdiMenu" label="Sample menu" />

          <template #dropdown>
            <NavBarItem>
              <NavBarItemLabel :icon="mdiClockOutline" label="Item One" />
            </NavBarItem>
            <NavBarItem>
              <NavBarItemLabel :icon="mdiCloud" label="Item Two" />
            </NavBarItem>
            <NavBarMenuDivider />
            <NavBarItem>
              <NavBarItemLabel :icon="mdiCrop" label="Item Last" />
            </NavBarItem>
          </template>
        </NavBarMenu>
        <NavBarMenu hasDivider>
          <!-- <UserAvatar class="inline-flex w-6 h-6 mr-3" />
          <div>
            <span>{{ userName }}</span>
          </div> -->
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
        </NavBarMenu>
        <NavBarItem
          hasDivider
          isDesktopIconOnly
          @click.prevent="toggleLightDark"
        >
          <NavBarItemLabel
            icon="mdi:theme-light-dark"
            label="Light/Dark"
            isDesktopIconOnly
          />
        </NavBarItem>
        <!-- <nav-bar-item
          href="https://github.com/justboil/admin-one-vue-tailwind"
          has-divider
          is-desktop-icon-only
        >
          <nav-bar-item-label
            :icon="mdiGithub"
            label="GitHub"
            is-desktop-icon-only
          />
        </nav-bar-item> -->
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
