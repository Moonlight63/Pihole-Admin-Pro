<script setup lang="ts">
import { useAuth } from '@/stores/auth';

const form = reactive({
  login: 'john.doe',
  pass: 'highly-secure-password-fYjUw-',
  remember: ['remember']
})

const router = useRouter()

const auth = useAuth()

const hasError = ref(false)
const loading = ref(false)
const shaking = ref(false)

let errorTimout: number | null = null

const submit = async () => {
  hasError.value = false
  loading.value = true

  const res = await auth.login(form.pass)

  if (res) {
    loading.value = false
    router.push('/')
  } else {
    hasError.value = true
    shaking.value = true

    setTimeout(() => {
      loading.value = false
      shaking.value = false
    }, 800) // <-- Equal to animation length time, keeps button disabled while shaking
    if (errorTimout !== null) clearTimeout(errorTimout)
    errorTimout = setTimeout(() => hasError.value = false, 5000)
  }
  console.log("🚀 ~ file: login.vue ~ line 15 ~ submit ~ res", res)
}

const test = async () => {
  const res = await auth.checkAuth()
  console.log("🚀 ~ file: login.vue ~ line 15 ~ submit ~ res", res)
}
</script>

<template>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    :class="shaking ? 'shaker' : ''"
    rounded="rounded-lg"
    form
    @submit.prevent="submit"
  >
    <!-- <Field label="Login" help="Please enter your login">
      <Control
        v-model="form.login"
        icon="mdi:account"
        name="login"
        autocomplete="username"
      />
    </Field> -->

    <Field label="Password" help="Please enter your password">
      <Control
        v-model="form.pass"
        icon="mdi:asterisk"
        type="password"
        name="password"
        autocomplete="current-password"
        :error="hasError"
      />
    </Field>

    <CheckRadioPicker
      v-model="form.remember"
      name="remember"
      :options="{ remember: 'Remember' }"
    />

    <Divider />

    <JbButtons>
      <JbButton type="submit" color="info" label="Login" :loading="loading"/>
      <JbButton color="primary" label="Test" :loading="loading" @click="test"/>
      <JbButton to="/" color="info" outline label="Back" />
    </JbButtons>
  </CardComponent>
</template>

<style>
.shaker {
  animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(4px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(8px, 0, 0);
  }
}
</style>

<route lang="yaml">
meta:
  layout: 'fullscreen'
  title: 'Login'
  icon: 'mdi:desktop-mac'
  bg: 'login'
  transition: 'bounce'
</route>
