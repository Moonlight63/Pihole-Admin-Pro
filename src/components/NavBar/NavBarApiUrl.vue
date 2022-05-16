<script setup lang="ts">
import { useServer } from '@/stores/server'

const storeServer = useServer()

const apiAddress = ref(storeServer.apiAddress)

const tryConnect = () => {
  if(!storeServer.connected) {
    console.log(apiAddress.value)
    storeServer.connect(apiAddress.value)
  }
  else
    storeServer.disconnect()
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
