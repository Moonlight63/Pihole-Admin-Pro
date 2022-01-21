<script setup>
import { mdiCog } from '@mdi/js'
import { computed } from 'vue'
import { useStore } from 'vuex'
import Icon from '@/components/UI/Icon.vue'
import JbButton from '@/components/Form/JbButton.vue'

defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  }
})

const store = useStore()

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <section class="flex items-center justify-between px-6 mb-6 sm:px-0">
    <div class="flex items-center justify-start">
      <Icon
        v-if="icon"
        :path="icon"
        class="mr-3"
      />
      <h1 class="text-2xl">
        {{ title }}
      </h1>
    </div>
    <JbButton
      :icon="mdiCog"
      :outline="darkMode"
      small
    />
  </section>
</template>
