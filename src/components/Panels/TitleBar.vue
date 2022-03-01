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
          class="inline-block pr-3 text-2xl title-stack-item text-on-main-muted last:pr-0 last:font-black last:text-on-main"
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
