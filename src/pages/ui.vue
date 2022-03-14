<script setup>
import { useGlobal } from '@/stores/global'

const titleStack = ref(['Admin', 'UI Components'])

const modalOneActive = ref(false)

const modalTwoActive = ref(false)

const modalThreeActive = ref(false)

const notificationSettingsModel = ref([])

const notificationsOutline = computed(
  () => notificationSettingsModel.value.indexOf('outline') > -1
)

const buttonSettingsModel = ref([])

const buttonsOutline = computed(
  () => buttonSettingsModel.value.indexOf('outline') > -1
)

const buttonsSmall = computed(
  () => buttonSettingsModel.value.indexOf('small') > -1
)

const buttonsDisabled = computed(
  () => buttonSettingsModel.value.indexOf('disabled') > -1
)
</script>

<template>
  <ModalBox
    v-model="modalOneActive"
    title="Please confirm action"
    buttonLabel="Confirm"
    hasCancel
  >
    <p>This is sample modal</p>
  </ModalBox>

  <ModalBox
    v-model="modalTwoActive"
    largeTitle="Unhandled exception"
    button="danger"
    shake
  >
    <p>This is sample modal</p>
  </ModalBox>

  <ModalBox v-model="modalThreeActive" largeTitle="Success" button="success">
    <p>This is sample modal</p>
  </ModalBox>

  <TitleBar :titleStack="titleStack" />

  <HeroBar>UI Components</HeroBar>

  <TitledSection first> Dark mode </TitledSection>

  <MainSection>
    <CardComponent class="shadow-2xl md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto">
      <div class="py-24 text-center text-on-main-muted lg:py-12">
        <div class="flex items-center justify-center">
          <!-- <JbButton
            class="mr-2"
            label="Toggle"
            outline
            @click="useGlobal().toggleDarkMode()"
          /> -->
          <button class="button button-sm">
            Button2
          </button>
        </div>
        <div class="flex items-center justify-center mt-6">
          <input type="checkbox" class="checkbox" />
        </div>
      </div>
    </CardComponent>
  </MainSection>

  <TitledSection> Modal examples </TitledSection>

  <MainSection>
    <div class="space-y-12">
      <CardComponent
        title="Confirm modal"
        headerIcon="mdi:close"
        class="shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
        hoverable
        @click="modalOneActive = true"
      >
        <div class="space-y-3">
          <p>Click to see in action</p>
        </div>

        <Divider />

        <JbButtons>
          <JbButton label="Confirm" color="info" />
          <JbButton label="Cancel" color="info" outline />
        </JbButtons>
      </CardComponent>

      <CardComponent
        class="shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
        hoverable
        @click="modalTwoActive = true"
      >
        <div class="space-y-3">
          <h1 class="text-2xl">Unhandled exception</h1>
          <p>Click to see in action</p>
        </div>

        <Divider />

        <JbButtons>
          <JbButton label="Done" color="danger" />
        </JbButtons>
      </CardComponent>

      <CardComponent
        class="shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
        hoverable
        @click="modalThreeActive = true"
      >
        <div class="space-y-3">
          <h1 class="text-2xl">Success</h1>
          <p>Click to see in action</p>
        </div>

        <Divider />

        <JbButton label="Done" color="success" />
      </CardComponent>
    </div>
  </MainSection>

  <TitledSection custom>
    <h1 class="text-2xl text-on-main-muted">Notifications</h1>
    <div class="flex items-center justify-center mt-6">
      <CheckRadioPicker
        v-model="notificationSettingsModel"
        type="switch"
        name="notifications-switch"
        :options="{ outline: 'Outline' }"
      />
    </div>
  </TitledSection>

  <MainSection>
    <Notification
      color="info"
      icon="mdi:information-outline"
      :outline="notificationsOutline"
    >
      <b>Info state</b>. Notification
      <template #right>
        <JbButton
          icon="mdi:open-in-new"
          label="Button"
          color="info"
          :outline="notificationsOutline"
          small
        />
      </template>
    </Notification>

    <Notification
      color="success"
      icon="mdi:check-circle-outline"
      :outline="notificationsOutline"
    >
      <b>Success state</b>. Notification
      <template #right>
        <JbButton
          icon="mdi:open-in-new"
          label="Button"
          color="success"
          :outline="notificationsOutline"
          small
        />
      </template>
    </Notification>

    <Notification
      color="warning"
      icon="mdi:alert-circle-outline"
      :outline="notificationsOutline"
    >
      <b>Warning state</b>. Notification
      <template #right>
        <JbButton
          icon="mdi:open-in-new"
          label="Button"
          color="warning"
          :outline="notificationsOutline"
          small
        />
      </template>
    </Notification>

    <Notification
      color="danger"
      icon="mdi:alert-circle"
      :outline="notificationsOutline"
    >
      <b>Danger state</b>. Notification
      <template #right>
        <JbButton
          class="border border-danger-hocus"
          icon="mdi:open-in-new"
          label="Button"
          color="danger"
          :outline="notificationsOutline"
          small
        />
      </template>
    </Notification>

    <Notification
      icon="mdi:select-color"
      :outline="notificationsOutline"
    >
      <b>White</b>. Notification
    </Notification>

    <Notification
      color="light"
      icon="mdi:feather"
      :outline="notificationsOutline"
    >
      <b>Light</b>. Notification
    </Notification>
  </MainSection>

  <TitledSection>Buttons</TitledSection>

  <MainSection>
    <CardComponent>
      <Field label="Settings">
        <CheckRadioPicker
          v-model="buttonSettingsModel"
          name="buttons-switch"
          type="switch"
          :options="{
            outline: 'Outline',
            small: 'Small',
            disabled: 'Disabled'
          }"
        />
      </Field>

      <Divider />

      <JbButtons>
        <JbButton
          color="white"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="light"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="info"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="success"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="warning"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="danger"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
      </JbButtons>

      <Divider />

      <JbButtons>
        <JbButton
          color="white"
          label="Button"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="light"
          label="Button"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="info"
          label="Button"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="success"
          label="Button"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="warning"
          label="Button"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="danger"
          label="Button"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
      </JbButtons>

      <Divider />

      <JbButtons>
        <JbButton
          color="white"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="light"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="info"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="success"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="warning"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="danger"
          icon="mdi:open-in-new"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
      </JbButtons>

      <Divider />

      <div class="button-group">
        <JbButton
          color="white"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="light"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="info"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="success"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="warning"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
        <JbButton
          color="danger"
          label="Button"
          :small="buttonsSmall"
          :outline="buttonsOutline"
          :disabled="buttonsDisabled"
        />
      </div>
      
    </CardComponent>
  </MainSection>

  <TitledSection>Cards</TitledSection>

  <MainSection>
    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
      <CardComponent title="With Title" mb="">
        <div class="py-24 text-center text-on-main-muted lg:py-12">
          With title
        </div>
      </CardComponent>

      <CardComponent
        title="Title & Icons"
        icon="mdi:monitor-cellphone"
        headerIcon="mdi:close"
        mb=""
      >
        <div class="py-24 text-center text-on-main-muted lg:py-12">
          With title & icons
        </div>
      </CardComponent>
    </div>

    <TitleSubBar icon="mdi:alert-circle" title="Empty variation" />

    <CardComponent empty />
  </MainSection>

  <BottomOtherPagesSection />
</template>

<route lang="yaml">
meta:
  layout: 'default'
  title: 'UI'
  icon: 'mdi:desktop-mac'
</route>
