<script setup>
import { mdiCog } from '@mdi/js'
import { computed } from 'vue'
import { useStore } from 'vuex'
import CardComponent from '@/components/Cards/CardComponent.vue'
import GrowingNumber from '@/components/GrowingNumber.vue'
import Icon from '@/components/Icon.vue'
import Level from '@/components/Level.vue'
import JbButton from '@/components/JbButton.vue'

defineProps({
  number: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: null
  },
  prefix: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  bgColor: {
    type: String,
    default: undefined
  }
})

const store = useStore()

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <card-component
    :bg-color="bgColor"
    class="relative"
  >
    <!-- <level mobile> -->
    <div class="z-[1] relative">
      <h3 class="text-lg leading-tight">
        {{ label }}
      </h3>
      <h1 class="text-3xl font-semibold leading-tight">
        <growing-number
          :value="number"
          :prefix="prefix"
          :suffix="suffix"
        />
      </h1>
    </div>
    <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-end z-[0]">
      <icon
        v-if="icon"
        :path="icon"
        size="100%"
        w=""
        h="h-full aspect-square"
        :class="color"
      />
    </div>
    <!-- </level> -->
  </card-component>
</template>
