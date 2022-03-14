<script setup>
defineProps({
  custom: Boolean,
  first: Boolean,
  last: Boolean
})
</script>

<template>
  <section
    class="px-6 py-24 text-center lg:px-0 lg:max-w-2xl lg:mx-auto"
    :class="{ '-mb-6': first, '-mt-6': last, '-my-6': !first && !last }"
  >
    <slot v-if="custom" />
    <h1 v-else class="text-2xl text-on-main-muted">
      <slot />
    </h1>
  </section>
</template>
