<script setup>
defineProps({
  hasDivider: {
    type: Boolean,
    default: false
  }
})

const isDropdownActive = ref(false)

const toggleDropdownIcon = computed(() =>
  isDropdownActive.value ? 'mdi:chevron-up' : 'mdi:chevron-down'
)

const toggle = () => {
  isDropdownActive.value = !isDropdownActive.value
}

const root = ref(null)

const forceClose = (event) => {
  if (!root.value.$el.contains(event.target)) {
    isDropdownActive.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', forceClose)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', forceClose)
})
</script>

<template>
  <NavBarItem
    ref="root"
    type="block"
    :hasDivider="hasDivider"
    :active="isDropdownActive"
    dropdown
    class="dropdown"
    @click="toggle"
  >
    <a
      class="flex items-center px-3 py-2 bg-menu lg:bg-transparent"
    >
      <slot />
      <UiIconify
        :icon="toggleDropdownIcon"
        class="hidden transition-colors lg:inline-flex"
      />
    </a>
    <div
      class="text-sm border-t-0 border-b border-menu lg:border-t bg-menu lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b"
      :class="{ 'lg:hidden': !isDropdownActive }"
    >
      <slot name="dropdown" />
    </div>
  </NavBarItem>
</template>
