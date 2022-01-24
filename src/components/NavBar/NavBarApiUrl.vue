<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiLogin } from '@mdi/js'
import Control from '@/components/Form/Control.vue'
import NavBarItem from '@/components/NavBar/NavBarItem.vue'
import NavBarItemLabel from '@/components/NavBar/NavBarItemLabel.vue'

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
      <NavBarItemLabel :icon="mdiLogin" label="Connect" isDesktopIconOnly />
    </NavBarItem>
  </div>
</template>
