<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  largeTitle: {
    type: String,
    default: null
  },
  button: {
    type: String,
    default: 'info'
  },
  buttonLabel: {
    type: String,
    default: 'Done'
  },
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const confirmCancel = (mode) => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')
</script>

<template>
  <Overlay v-show="value" @overlayClick="cancel">
    <CardComponent
      v-show="value"
      :title="title"
      class="z-50 w-full shadow-lg max-h-modal md:w-3/5 lg:w-2/5"
      modal
      headerIcon="mdi:close"
      @headerIconClick="cancel"
    >
      <div class="space-y-3">
        <h1 v-if="largeTitle" class="text-2xl">
          {{ largeTitle }}
        </h1>
        <slot />
      </div>

      <Divider />

      <JbButtons>
        <JbButton :label="buttonLabel" :color="button" @click="confirm" />
        <JbButton
          v-if="hasCancel"
          label="Cancel"
          :color="button"
          outline
          @click="cancel"
        />
      </JbButtons>
    </CardComponent>
  </Overlay>
</template>
