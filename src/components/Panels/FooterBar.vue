<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/UI/Level.vue'

const store = useStore()

const isFooterBarVisible = computed(() => !store.state.isFullScreen)
</script>

<template>
  <footer
    v-show="isFooterBarVisible"
    class="px-6 py-2 bg-panel"
  >
    <Level>
      <div class="text-center md:text-left">
        <b><a
          href="#"
          target="_blank"
        >Donate</a></b>
        if you found this useful.
      </div>
      <div class="md:py-2">
        <b>Pi-hole  </b>
        <a href="#">v5.7</a>
        <b>  |  FTL  </b>
        <a href="#">v5.12.1</a>
        <b>  |  Web Interface  </b>
        <a href="#">v5.9</a>
      </div>
    </Level>
  </footer>
</template>
