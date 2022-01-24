<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiCheckDecagram } from '@mdi/js'
import Level from '@/components/UI/Level.vue'
import UserAvatar from '@/components/UnusedReference/UserAvatar.vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import CheckRadioPicker from '@/components/Form/CheckRadioPicker.vue'
import Pill from '@/components/UI/Pill.vue'

const store = useStore()

const userName = computed(() => store.state.userName)

const userSwitchVal = ref([])
</script>

<template>
  <CardComponent rounded="">
    <Level type="justify-around lg:justify-center">
      <UserAvatar class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
          <CheckRadioPicker
            v-model="userSwitchVal"
            name="sample-switch"
            type="switch"
            :options="{ one: 'Notifications' }"
          />
        </div>
        <h1 class="text-2xl">
          Howdy, <b>{{ userName }}</b
          >!
        </h1>
        <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
        <div class="flex justify-center md:block">
          <Pill text="Verified" type="info" :icon="mdiCheckDecagram" />
        </div>
      </div>
    </Level>
  </CardComponent>
</template>
