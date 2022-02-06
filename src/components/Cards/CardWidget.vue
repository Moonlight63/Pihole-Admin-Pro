<script setup>
defineProps({
  number: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: null
  },
  prefix: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  trend: {
    type: String,
    default: null
  },
  trendType: {
    type: String,
    default: null
  }
})
</script>

<template>
  <CardComponent>
    <Level v-if="trend" class="mb-3" mobile>
      <TrendPill :trend="trend" :trendType="trendType" small />
      <JbButton icon="mdi:cog" iconW="w-4" iconH="h-4" small />
    </Level>
    <Level mobile>
      <div>
        <h3 class="text-lg leading-tight text-gray-500 dark:text-gray-400">
          {{ label }}
        </h3>
        <h1 class="text-3xl font-semibold leading-tight">
          <GrowingNumber :value="number" :prefix="prefix" :suffix="suffix" />
        </h1>
      </div>
      <UiIconify v-if="icon" :icon="icon" class="text-5xl" :class="color" />
    </Level>
  </CardComponent>
</template>
