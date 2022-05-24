<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
// import numeral from 'numeral'

const props = defineProps({
  prefix: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  value: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 500
  },
  // percision: {
  //   type: Number,
  //   default: 5
  // }
})

const newValue = ref(0)

const newValueFormatted = computed(() => {
  return newValue.value.toLocaleString()
    // const val = newValue.value % 1 != 0 ? newValue.value.toFixed(props.percision) : newValue.value
    // return newValue.value < 1000 ? val : parseFloat(val).toLocaleString()
    // if (newValue.value < 1000) {
    //   return newValue.value % 1 != 0 ? newValue.value.toFixed(props.percision) : newValue.value
    // } 
    // return newValue.value % 1 != 0 ? newValue.value.toFixed(props.percision).format('0,0') : newValue.value.format('0,0')
  }
)

const value = computed(() => props.value)

const grow = (m: number) => {
  const v = Math.ceil(newValue.value + m)

  if (v > value.value) {
    newValue.value = value.value
    return false
  }

  newValue.value = v

  setTimeout(() => {
    grow(m)
  }, 25)
}

const growInit = () => {
  grow(props.value / (props.duration / 25))
}

watch(value, () => {
  growInit()
})

onMounted(() => {
  growInit()
})
</script>

<template>
  <div>{{ prefix }}{{ newValueFormatted }}{{ suffix }}</div>
</template>
