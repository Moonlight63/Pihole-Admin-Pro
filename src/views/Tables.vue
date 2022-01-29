<script setup>
import { ref } from 'vue'
import MainSection from '@/components/MainSection.vue'
import Notification from '@/components/UI/Notification.vue'
import ClientsTable from '@/components/UnusedReference/ClientsTable.vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import TitleBar from '@/components/Panels/TitleBar.vue'
import HeroBar from '@/components/Panels/HeroBar.vue'
import BottomOtherPagesSection from '@/components/UnusedReference/BottomOtherPagesSection.vue'
import TitleSubBar from '@/components/Panels/TitleSubBar.vue'

const titleStack = ref(['Admin', 'Tables'])
</script>

<template>
  <TitleBar :titleStack="titleStack" />
  <HeroBar>Tables</HeroBar>
  <MainSection>
    <Notification color="info" icon="mdi:monitor-cellphone">
      <b>Responsive table.</b> Collapses on mobile
    </Notification>

    <CardComponent
      class="mb-6"
      title="Clients"
      icon="mdi:account-multiple"
      hasTable
    >
      <ClientsTable checkable />
    </CardComponent>

    <TitleSubBar icon="mdi:table-border" title="Wrapped variation" />

    <Notification color="success" icon="mdi:table-border">
      <b>Tightly wrapped</b> &mdash; table header becomes card header
    </Notification>

    <CardComponent class="mb-6" hasTable>
      <ClientsTable checkable />
    </CardComponent>

    <TitleSubBar icon="mdi:table-off" title="Empty variation" />

    <Notification color="danger" icon="mdi:table-off">
      <b>Empty table.</b> When there's nothing to show
    </Notification>

    <CardComponent empty />
  </MainSection>

  <BottomOtherPagesSection />
</template>
