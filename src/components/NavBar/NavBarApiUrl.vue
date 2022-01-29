<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()

const apiAddress = ref(store.state.apiAddress)

const tryConnect = () => {
  store.dispatch('apiAddress', apiAddress.value)
}
</script>

<template>
  <div class="flex items-stretch flex-1 h-14">
    <NavBarItem hasDivider>
      <Control
        ref="root"
        v-model="apiAddress"
        placeholder="http://localhost:8080/"
        transparent
        borderless
      />
    </NavBarItem>
    <NavBarItem
      isDesktopIconOnly
      hasDivider
      class=""
      @click.prevent="tryConnect()"
    >
      <NavBarItemLabel icon="mdi:login" label="Connect" isDesktopIconOnly />
    </NavBarItem>
  </div>
</template>
