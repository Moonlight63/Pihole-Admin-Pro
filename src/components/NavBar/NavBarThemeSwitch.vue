<script setup>
import { useGlobal } from '@/stores/global'
import { useUsers } from '@/stores/user'

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

const changeTheme = (theme) => {
  storeGlobal.changeTheme(theme)
}
</script>

<template>
  <NavBarMenu 
    hasDivider
    isDesktopIconOnly
  >
    <NavBarItemLabel
      icon="mdi:theme-light-dark"
      label="Light/Dark"
      isDesktopIconOnly
    />

    <template #dropdown>
      <NavBarItem @click="changeTheme('base')">
        <NavBarItemLabel label="Default" />
      </NavBarItem>
      <NavBarItem @click="changeTheme('light')">
        <NavBarItemLabel label="Light" />
      </NavBarItem>
      <NavBarItem @click="changeTheme('dark')">
        <NavBarItemLabel label="Dark" />
      </NavBarItem>
      <NavBarItem @click="changeTheme('nordic')">
        <NavBarItemLabel label="Nordic" />
      </NavBarItem>
      <NavBarItem @click="changeTheme('nordark')">
        <NavBarItemLabel label="Nordark" />
      </NavBarItem>
      <NavBarItem @click="changeTheme('metro')">
        <NavBarItemLabel label="Metro" />
      </NavBarItem>
      <NavBarItem @click="changeTheme('metrodark')">
        <NavBarItemLabel label="Metro Dark" />
      </NavBarItem>
    </template>
  </NavBarMenu>
</template>
