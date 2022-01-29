<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import TitleBar from '@/components/Panels/TitleBar.vue'
import Divider from '@/components/UI/Divider.vue'
import Field from '@/components/Form/Field.vue'
import Control from '@/components/Form/Control.vue'
import FilePicker from '@/components/Form/FilePicker.vue'
import JbButton from '@/components/Form/JbButton.vue'
import BottomOtherPagesSection from '@/components/UnusedReference/BottomOtherPagesSection.vue'
import JbButtons from '@/components/Form/JbButtons.vue'
import UserCard from '@/components/UnusedReference/UserCard.vue'

const store = useStore()

const titleStack = ref(['Admin', 'Profile'])

const profileForm = reactive({
  name: store.state.userName,
  email: store.state.userEmail
})

const passwordForm = reactive({
  password_current: '',
  password: '',
  password_confirmation: ''
})

const submitProfile = () => {
  store.commit('user', profileForm)
}

const submitPass = () => {
  //
}
</script>

<template>
  <TitleBar :titleStack="titleStack" />

  <UserCard />

  <MainSection>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <CardComponent
        title="Edit Profile"
        icon="mdi:account-circle"
        form
        @submit.prevent="submitProfile"
      >
        <Field label="Avatar" help="Max 500kb">
          <FilePicker />
        </Field>

        <Field label="Name" help="Required. Your name">
          <Control
            v-model="profileForm.name"
            icon="mdi:account"
            name="username"
            required
            autocomplete="username"
          />
        </Field>
        <Field label="E-mail" help="Required. Your e-mail">
          <Control
            v-model="profileForm.email"
            icon="mdi:mail"
            type="email"
            name="email"
            required
            autocomplete="email"
          />
        </Field>

        <Divider />

        <JbButtons>
          <JbButton color="info" type="submit" label="Submit" />
          <JbButton color="info" label="Options" outline />
        </JbButtons>
      </CardComponent>

      <CardComponent
        title="Change Password"
        icon="mdi:lock"
        form
        @submit.prevent="submitPass"
      >
        <Field label="Current password" help="Required. Your current password">
          <Control
            v-model="passwordForm.password_current"
            icon="mdi:asterisk"
            name="password_current"
            type="password"
            required
            autocomplete="current-password"
          />
        </Field>

        <Divider />

        <Field label="New password" help="Required. New password">
          <Control
            v-model="passwordForm.password"
            icon="mdi:form-textbox-password"
            name="password"
            type="password"
            required
            autocomplete="new-password"
          />
        </Field>

        <Field
          label="Confirm password"
          help="Required. New password one more time"
        >
          <Control
            v-model="passwordForm.password_confirmation"
            icon="mdi:form-textbox-password"
            name="password_confirmation"
            type="password"
            required
            autocomplete="new-password"
          />
        </Field>

        <Divider />

        <JbButtons>
          <JbButton type="submit" color="info" label="Submit" />
          <JbButton color="info" label="Options" outline />
        </JbButtons>
      </CardComponent>
    </div>
  </MainSection>

  <BottomOtherPagesSection />
</template>
