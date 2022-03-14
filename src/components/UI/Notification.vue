<script setup>
// import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  outline: Boolean,
  color: {
    type: String,
    default: 'neutral'
  }
})

// const componentClass = computed(() =>
//   props.outline
//     ? colorsOutline[props.color]
//     : [colorsBg[props.color], colorsBorders[props.color]]
// )

// TODO: Overly complicated due to tailwinds auto purging of 'unused' classes.
// dynamic classes (`bg-${props.color}`) are not detected.
// I may start extracting styles to a separate validators directory.
const componentClass = computed(() => {
  // props.outline
  //   ? `border-${props.color}`
  //   : [`bg-${props.color}`, `border-${props.color}`]

  if(props.outline) {
    switch (props.color) {
      case 'primary':
        return "border-primary"
      case 'secondary':
        return "border-secondary"
      case 'accent':
        return "border-accent"
      case 'info':
        return "border-info"
      case 'success':
        return "border-success"
      case 'warning':
        return "border-warning"
      case 'danger':
        return "border-danger"
      case 'neutral':
        return "border-neutral"
      default:
        break;
    }
  } else {
    switch (props.color) {
      case 'primary':
        return "border-primary bg-primary text-on-primary"
      case 'secondary':
        return "border-secondary bg-secondary text-on-secondary"
      case 'accent':
        return "border-accent bg-accent text-on-accent"
      case 'info':
        return "border-info bg-info text-on-info"
      case 'success':
        return "border-success bg-success text-on-success"
      case 'warning':
        return "border-warning bg-warning text-on-warning"
      case 'danger':
        return "border-danger bg-danger text-on-danger"
      case 'neutral':
        return "border-neutral bg-neutral text-on-neutral"
      default:
        break;
    }
  }
})

const isDismissed = ref(false)

const dismiss = () => {
  isDismissed.value = true
}

const slots = useSlots()

const hasRightSlot = computed(() => slots.right)
</script>

<template>
  <div
    v-if="!isDismissed"
    :class="componentClass"
    class="px-3 py-6 mx-6 mb-6 transition-colors duration-150 border rounded-card md:py-3 md:mx-0 last:mb-0"
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
        :outline="outline || ['white', 'light'].indexOf(color) < 0"
        small
        @click="dismiss"
      />
    </Level>
  </div>
</template>
