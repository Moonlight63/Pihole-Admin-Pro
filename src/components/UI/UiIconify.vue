<script setup lang="ts">
import Iconify from '@purge-icons/generated'

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

const el = ref<HTMLElement | null>(null)

const spanClass = computed(() => 'inline-flex justify-center items-center')

const update = async () => {
  await nextTick()
  if (el.value) {
    const svg = Iconify.renderSVG(props.icon)
    if (svg) {
      el.value.innerText = ''
      el.value.appendChild(svg)
    } else {
      const span = document.createElement('span')
      span.className = 'iconify'
      span.dataset.icon = props.icon
      el.value.textContent = ''
      el.value.appendChild(span)
    }
  }
}

watch(() => props.icon, update, { flush: 'post' })

onMounted(update)
</script>

<template>
  <span ref="el" :class="spanClass" />
</template>

<style>
span.iconify {
  background: rgba(190, 53, 53, 0.596);
  border-radius: 100%;
  min-width: 1em;
  min-height: 1em;
  display: block;
}
</style>
