<script setup>
import { useUsers } from '@/stores/user'

const props = defineProps({
  username: {
    type: String,
    default: null
  },
  bg: {
    type: String,
    default: 'bg-gray-100 dark:bg-gray-800'
  },
  api: {
    type: String,
    default: 'api/avataaars'
  }
})

const storeUser = useUsers()

const avatar = computed(() =>
  props.username
    ? `https://avatars.dicebear.com/${props.api}/${props.username.replace(
        /[^a-z0-9]+/i,
        '-'
      )}.svg`
    : storeUser.userAvatar
)

const name = computed(() =>
  props.username ? props.username : storeUser.userName
)
</script>

<template>
  <div>
    <img
      :src="avatar"
      :alt="name"
      class="block w-full h-auto max-w-full rounded-full"
      :class="bg"
    />
  </div>
</template>
