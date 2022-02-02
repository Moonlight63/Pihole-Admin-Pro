<script setup>
defineProps({
  zIndex: {
    type: String,
    default: 'z-50'
  }
})

const emit = defineEmits(['overlay-click'])

const overlayClick = (event) => {
  emit('overlay-click', event)
}
</script>

<template>
  <div
    class="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
    :class="zIndex"
  >
    <Transition
      enterActiveClass="transition duration-1000 ease-in"
      enterFromClass="opacity-0"
      enterToClass="opacity-100"
      leaveActiveClass="transition duration-1000 ease-in"
      leaveFromClass="opacity-100"
      leaveToClass="opacity-0"
    >
      <div
        class="absolute inset-0 bg-gradient-to-tr from-gray-700 via-gray-900 to-gray-700 opacity-90"
        @click="overlayClick"
      />
    </Transition>
    <Transition
      enterActiveClass="transition duration-100 ease-out"
      enterFromClass="transform scale-95 opacity-0"
      enterToClass="transform scale-100 opacity-100"
      leaveActiveClass="animate-fadeOut"
    >
      <slot />
    </Transition>
  </div>
</template>
