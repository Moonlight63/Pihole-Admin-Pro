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
      class="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent"
    >
      <slot />
      <UiIconify
        :icon="toggleDropdownIcon"
        class="hidden transition-colors lg:inline-flex"
      />
    </a>
    <div
      class="text-sm border-b border-gray-100 lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-700"
      :class="{ 'lg:hidden': !isDropdownActive }"
    >
      <slot name="dropdown" />
    </div>
  </NavBarItem>
</template>
