<script setup>import { useApi } from '@/stores/api';


const apiStore = useApi()

const version = computed(() => apiStore.version)

</script>

<template>
  <footer class="px-6 py-2 bg-card">
    <Level>
      <div class="text-center md:text-left">
        <b><a href="#" target="_blank">Donate</a></b>
        if you found this useful.
      </div>
      <div v-if="version.core" class="md:py-2">
        <b>Pi-hole </b>
        <a href="#">{{ version.core.tag }}</a>
        <b> | FTL </b>
        <a href="#">{{ version.ftl.tag }}</a>
        <b> | Web Interface </b>
        <a href="#">{{ version.web.tag }}</a>
      </div>
    </Level>
  </footer>
</template>
