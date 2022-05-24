<script lang="ts">
export default {
  beforeRouteEnter: () => {
    // Future navigation guard for auth?
    console.log(useSession().valid)
    console.log(useServer().isConnecting)
    console.log(useServer().connected)

    console.log("🚀 ~ file: login.vue ~ line 10 ~ auth.updating", useAuth().updating)
    // while(useServer().isConnecting) {
    //   // stall
    //   console.log("waiting...")
    // }
    // if (!useServer().connected) {
    //   // not connected to a server, so redirect
    //   console.log("Connection Failed!")
    // }
  },
};
</script>

<script lang="ts" setup>
import { useAuth } from '@/stores/auth';
import { useServer } from '@/stores/server';
import { useSession } from '@/stores/session';

const form = reactive({
  login: 'john.doe',
  pass: 'highly-secure-password-fYjUw-',
  remember: ['remember']
})

const server = useServer()

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

// const test = async () => {
//   const res = await auth.checkAuth()
//   console.log("🚀 ~ file: login.vue ~ line 15 ~ submit ~ res", res)
// }

onMounted(()=> {
  
  console.log("🚀 ~ file: login.vue ~ line 75 ~ onMounted ~ ", "Fully Loaded")
  // This is unlikely to happen, but not impossible.
  if(useSession().valid) {
    router.push('/')
    return
  }
  // It is highly likely that the component will mount
  // before the session has been validated. Ideally we
  // should wait for the session to be checked before loading.
  useSession().$subscribe((_, state) => {
    if (state.valid) {
      console.log("🚀 ~ file: login.vue ~ line 84 ~ useSession ~ state.valid", state.valid)
      router.push('/')  
    }
  })

  if (!server.connected) {
    if (server.isConnecting) {
      server.$subscribe((_, state) => {
        if (state.isConnecting === false && state.connected == false) {
          router.push('/')
        }
      })
    } else {
      // TODO: We need to watch for race conditions...
      router.push('/')
    }
  }

  auth.$subscribe((_, state) => {
    console.log("🚀 ~ file: login.vue ~ line 100 ~ auth.$subscribe ~ state", state.updating)
  })
})
</script>

<template>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    rounded="rounded-lg"
    v-if="useSession().valid"
  >
    <div class="py-10 text-4xl text-center text-success">
      <p>Success!</p>
    </div>
  </CardComponent>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    rounded="rounded-lg"
    v-else-if="server.isConnecting || auth.updating"
  >
    <div class="py-10 text-2xl text-center text-on-main-muted">
      <p>Connecting to server...</p>
      <p>{{ server.apiAddress }}</p>
    </div>
  </CardComponent>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    :class="shaking ? 'shaker' : ''"
    rounded="rounded-lg"
    form
    @submit.prevent="submit"
    v-else-if="server.connected"
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
      <!-- <JbButton color="primary" label="Test" :loading="loading" @click="test"/> -->
      <JbButton to="/" color="info" outline label="Back" />
    </JbButtons>
  </CardComponent>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    rounded="rounded-lg"
    v-else
  >
    <div class="py-10 text-2xl text-center text-on-main-muted">
      <p>Not connected to any server...</p>
    </div>
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
  requiredSessionState: 'invalid'
</route>
