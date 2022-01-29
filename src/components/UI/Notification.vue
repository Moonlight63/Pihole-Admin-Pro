<script setup>
import { useStore } from 'vuex'
import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  outline: Boolean,
  color: {
    type: String,
    required: true
  }
})

const componentClass = computed(() =>
  props.outline
    ? colorsOutline[props.color]
    : [colorsBg[props.color], colorsBorders[props.color]]
)

const isDismissed = ref(false)

const dismiss = () => {
  isDismissed.value = true
}

const slots = useSlots()

const hasRightSlot = computed(() => slots.right)

const store = useStore()

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <div
    v-if="!isDismissed"
    :class="componentClass"
    class="px-3 py-6 mx-6 mb-6 transition-colors duration-150 border rounded md:py-3 md:mx-0 last:mb-0"
  >
    <Level>
      <div class="flex flex-col items-center md:flex-row">
        <UiIconify v-if="icon" :icon="icon" class="text-2xl md:mr-2" />
        <span class="text-center md:text-left"><slot /></span>
      </div>
      <slot v-if="hasRightSlot" name="right" />
      <JbButton
        v-else
        icon="mdi:close"
        :outline="
          outline || (darkMode && ['white', 'light'].indexOf(color) < 0)
        "
        small
        @click="dismiss"
      />
    </Level>
  </div>
</template>
