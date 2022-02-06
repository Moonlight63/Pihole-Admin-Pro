<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  headerIcon: {
    type: String,
    default: null
  },
  rounded: {
    type: String,
    default: 'md:rounded-2xl'
  },
  bgColor: {
    type: String,
    default: 'bg-panel'
  },
  hasTable: Boolean,
  empty: Boolean,
  form: Boolean,
  hoverable: Boolean
})

const emit = defineEmits(['header-icon-click', 'submit'])

const is = computed(() => (props.form ? 'form' : 'div'))

const componentClass = computed(() => {
  const base = [props.rounded, props.bgColor]

  if (props.hoverable) {
    base.push('hover:shadow-lg transition-shadow duration-500')
  }

  return base
})

const computedHeaderIcon = computed(() => props.headerIcon ?? 'mdi:cog')

const headerIconClick = () => {
  emit('header-icon-click')
}

const submit = (e) => {
  emit('submit', e)
}
</script>

<template>
  <Component
    :is="is"
    :class="componentClass"
    class="border border-gray-100 dark:border-gray-900"
    @submit="submit"
  >
    <header
      v-if="title"
      class="flex items-stretch border-b border-gray-100 dark:border-gray-700"
    >
      <p
        class="flex items-center py-3 font-bold grow"
        :class="[icon ? 'px-4' : 'px-6']"
      >
        <UiIconify v-if="icon" :icon="icon" class="mr-3" />
        {{ title }}
      </p>
      <a
        v-if="computedHeaderIcon"
        href="#"
        class="flex items-center justify-center px-4 py-3 ring-blue-700 focus:ring"
        aria-label="more options"
        @click.prevent="headerIconClick"
      >
        <UiIconify :icon="computedHeaderIcon" />
      </a>
    </header>
    <div
      v-if="empty"
      class="py-24 text-center text-gray-500 dark:text-gray-400"
    >
      <p>Nothing's here…</p>
    </div>
    <div v-else :class="{ 'p-6': !hasTable }">
      <slot />
    </div>
  </Component>
</template>
