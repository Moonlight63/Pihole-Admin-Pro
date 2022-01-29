<script setup>
defineProps({
  titleStack: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="p-6">
    <Level>
      <ul>
        <li
          v-for="(title, index) in titleStack"
          :key="index"
          class="inline-block pr-3 text-2xl text-gray-500 title-stack-item dark:text-gray-400 last:pr-0 last:font-black last:text-black dark:text-gray-100"
        >
          {{ title }}
        </li>
      </ul>
      <!-- <jb-button
        href="https://github.com/justboil/admin-one-vue-tailwind"
        color="info"
        label="Star on GitHub"
        target="_blank"
        icon="mdi:github"
      /> -->
    </Level>
  </section>
</template>

<style scoped>
li.title-stack-item:not(:last-child):after {
  content: '/';
  @apply inline-block pl-3;
}
</style>
