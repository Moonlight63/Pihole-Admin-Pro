<script setup>
import { computed } from 'vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import Level from '@/components/UI/Level.vue'
import Pill from '@/components/UI/Pill.vue'
import IconRounded from '@/components/UI/IconRounded.vue'

const props = defineProps({
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  business: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  }
})

const icon = computed(() => {
  if (props.type === 'withdrawal') {
    return {
      icon: 'mdi:cash-minus',
      type: 'danger'
    }
  } else if (props.type === 'deposit') {
    return {
      icon: 'mdi:cash-plus',
      type: 'success'
    }
  } else if (props.type === 'invoice') {
    return {
      icon: 'mdi:receipt',
      type: 'warning'
    }
  }

  return {
    icon: 'mdi:credit-card-outline',
    type: 'info'
  }
})
</script>

<template>
  <CardComponent class="mb-6 last:mb-0" hoverable>
    <Level>
      <Level type="justify-start">
        <IconRounded :icon="icon.icon" :type="icon.type" class="md:mr-6" />
        <div class="space-y-1 text-center md:text-left md:mr-6">
          <h4 class="text-xl">${{ amount }}</h4>
          <p class="text-on-main-muted">
            <b>{{ date }}</b> via {{ business }}
          </p>
        </div>
      </Level>
      <div class="space-y-1 text-center md:text-right">
        <p>{{ name }}</p>
        <div>
          <Pill type="info" :text="account" small />
          <Pill :type="icon.type" :text="type" small />
        </div>
      </div>
    </Level>
  </CardComponent>
</template>
