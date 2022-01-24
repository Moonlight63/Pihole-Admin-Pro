<script setup>
import { ref } from 'vue'
import {
  mdiMonitorCellphone,
  mdiAccountMultiple,
  mdiTableBorder,
  mdiTableOff
} from '@mdi/js'
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
    <Notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </Notification>

    <CardComponent
      class="mb-6"
      title="Clients"
      :icon="mdiAccountMultiple"
      hasTable
    >
      <ClientsTable checkable />
    </CardComponent>

    <TitleSubBar :icon="mdiTableBorder" title="Wrapped variation" />

    <Notification color="success" :icon="mdiTableBorder">
      <b>Tightly wrapped</b> &mdash; table header becomes card header
    </Notification>

    <CardComponent class="mb-6" hasTable>
      <ClientsTable checkable />
    </CardComponent>

    <TitleSubBar :icon="mdiTableOff" title="Empty variation" />

    <Notification color="danger" :icon="mdiTableOff">
      <b>Empty table.</b> When there's nothing to show
    </Notification>

    <CardComponent empty />
  </MainSection>

  <BottomOtherPagesSection />
</template>
