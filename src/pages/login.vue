<script setup>
const form = reactive({
  login: 'john.doe',
  pass: 'highly-secure-password-fYjUw-',
  remember: ['remember']
})

const router = useRouter()

const submit = () => {
  router.push('/')
}
</script>

<template>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    rounded="rounded-lg"
    form
    @submit.prevent="submit"
  >
    <Field label="Login" help="Please enter your login">
      <Control
        v-model="form.login"
        icon="mdi:account"
        name="login"
        autocomplete="username"
      />
    </Field>

    <Field label="Password" help="Please enter your password">
      <Control
        v-model="form.pass"
        icon="mdi:asterisk"
        type="password"
        name="password"
        autocomplete="current-password"
      />
    </Field>

    <CheckRadioPicker
      v-model="form.remember"
      name="remember"
      :options="{ remember: 'Remember' }"
    />

    <Divider />

    <JbButtons>
      <JbButton type="submit" color="info" label="Login" />
      <JbButton to="/" color="info" outline label="Back" />
    </JbButtons>
  </CardComponent>
</template>

<route lang="yaml">
meta:
  layout: 'fullscreen'
  title: 'Login'
  icon: 'mdi:desktop-mac'
  bg: 'login'
  transition: 'bounce'
</route>
