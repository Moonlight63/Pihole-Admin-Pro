<script setup>
import { computed } from 'vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import Level from '@/components/UI/Level.vue'
import Pill from '@/components/UI/Pill.vue'
import UserAvatar from '@/components/UnusedReference/UserAvatar.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null
  }
})

const pillType = computed(() => {
  if (props.type) {
    return props.type
  }

  if (props.progress) {
    if (props.progress >= 60) {
      return 'success'
    }
    if (props.progress >= 40) {
      return 'warning'
    }

    return 'danger'
  }

  return 'info'
})

const pillIcon = computed(() => {
  return {
    success: 'mdi:trending-up',
    warning: 'mdi:trending-neutral',
    danger: 'mdi:trending-down',
    info: null
  }[pillType.value]
})

const pillText = computed(() => props.text ?? `${props.progress}%`)
</script>

<template>
  <CardComponent class="mb-6 last:mb-0" hoverable>
    <Level>
      <Level type="justify-start">
        <UserAvatar class="w-12 h-12 md:mr-6" :username="name" />
        <div class="text-center md:text-left">
          <h4 class="text-xl">
            {{ name }}
            <span class="text-on-main-muted">@{{ login }}</span>
          </h4>
          <p class="text-on-main-muted">
            {{ date }}
          </p>
        </div>
      </Level>
      <Pill :type="pillType" :text="pillText" :icon="pillIcon" />
    </Level>
  </CardComponent>
</template>
