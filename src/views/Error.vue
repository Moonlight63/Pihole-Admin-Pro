<script setup>
import FullScreenSection from '@/components/FullScreenSection.vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import Divider from '@/components/UI/Divider.vue'
import JbButton from '@/components/Form/JbButton.vue'
import JbButtons from '@/components/Form/JbButtons.vue'
</script>

<template>
  <FullScreenSection v-slot="{ cardClass, cardRounded }" bg="error">
    <CardComponent :class="cardClass" :rounded="cardRounded">
      <div class="space-y-3">
        <h1 class="text-2xl">Unhandled exception</h1>

        <p>An Error Occurred</p>
      </div>

      <Divider />

      <JbButtons>
        <JbButton label="Done" to="/" color="danger" />
      </JbButtons>
    </CardComponent>
  </FullScreenSection>
</template>
