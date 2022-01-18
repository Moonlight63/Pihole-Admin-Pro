<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiHandBackRight,
  mdiEarth,
  mdiViewListOutline
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import BarChart from '@/components/Charts/BarChart.vue'
import RingChart from '@/components/Charts/RingChart.vue'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import CardWidget from '@/components/Cards/CardMetric.vue'
import CardComponent from '@/components/Cards/CardComponent.vue'
import ClientsTable from '@/components/ClientsTable.vue'
import TopDomains from '@/components/Tables/TopDomains.vue'
import TopClients from '@/components/Tables/TopClients.vue'
import TableTest from '@/components/Tables/TableTest.vue'
import UsersTable from '@/components/UsersTable.vue'
import Notification from '@/components/Notification.vue'
import JbButton from '@/components/JbButton.vue'
import CardTransactionBar from '@/components/CardTransactionBar.vue'
import CardClientBar from '@/components/CardClientBar.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

const titleStack = ref(['Admin', 'Dashboard'])

const chartData = ref(null)
const chartData2 = ref(null)
const chartData3 = ref(null)
const chartData4 = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData(24)
  chartData2.value = chartConfig.sampleChartData(24)
  chartData3.value = chartConfig.sampleChartData(4, 1)
  chartData4.value = chartConfig.sampleChartData(4, 1)
}

onMounted(() => {
  fillChartData()
})

const store = useStore()

const clientBarItems = computed(() => store.state.clients.slice(0, 3))

const transactionBarItems = computed(() => store.state.history.slice(0, 3))

const darkMode = computed(() => store.state.darkMode)
</script>

<template>
  <TitleBar :title-stack="titleStack" />
  <!-- <hero-bar>Dashboard</hero-bar> -->
  <MainSection>
    <CardComponent
      title="Total Queries Over Last 24 Hours"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillChartData"
    >
      <TableTest :checkable="true" />
    </CardComponent>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
      <CardWidget
        color="text-emerald-400"
        :icon="mdiEarth"
        :number="512"
        label="Total Queries (8 Clients)"
        bg-color="bg-emerald-500"
      />
      <CardWidget
        color="text-blue-300 dark:text-blue-400"
        :icon="mdiHandBackRight"
        :number="7770"
        label="Queries Blocked"
        bg-color="bg-blue-400 dark:bg-blue-500"
      />
      <CardWidget
        color="text-orange-200 dark:text-orange-300"
        :icon="mdiChartPie"
        :number="82"
        suffix="%"
        bg-color="bg-orange-300 dark:bg-orange-400"
        label="Percentage Blocked"
      />
      <CardWidget
        color="text-red-300 dark:text-red-400"
        :icon="mdiViewListOutline"
        :number="2065813"
        label="Blocked Domains"
        bg-color="bg-red-400 dark:bg-red-500"
      />
    </div>

    <!-- <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-2">
      <div class="flex flex-col justify-between">
        <card-transaction-bar
          v-for="(transaction,index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>
      <div class="flex flex-col justify-between">
        <card-client-bar
          v-for="client in clientBarItems"
          :key="client.id"
          :name="client.name"
          :login="client.login"
          :date="client.created"
          :progress="client.progress"
        />
      </div>
    </div> -->

    <!-- <title-sub-bar
      :icon="mdiChartPie"
      title="Total Queries Over Last 24 Hours"
    /> -->

    <CardComponent
      title="Total Queries Over Last 24 Hours"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillChartData"
    >
      <div v-if="chartData">
        <BarChart
          :data="chartData"
          class="h-96"
        />
      </div>
    </CardComponent>

    <!-- <title-sub-bar
      :icon="mdiChartPie"
      title="Client Activity Over Last 24 Hours"
    /> -->

    <CardComponent
      title="Client activity over last 24 hours"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillChartData"
    >
      <div v-if="chartData2">
        <BarChart
          :data="chartData2"
          class="h-96"
        />
      </div>
    </CardComponent>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
      <CardComponent
        title="Query Types"
        :icon="mdiFinance"
        :header-icon="mdiReload"
        class="mb-6"
        @header-icon-click="fillChartData"
      >
        <div v-if="chartData3">
          <RingChart
            :data="chartData3"
            class="h-96"
          />
        </div>
      </CardComponent>
      <CardComponent
        title="Upstream Servers"
        :icon="mdiFinance"
        :header-icon="mdiReload"
        class="mb-6"
        @header-icon-click="fillChartData"
      >
        <div v-if="chartData4">
          <RingChart
            :data="chartData4"
            class="h-96"
          />
        </div>
      </CardComponent>
      <CardComponent
        :icon="mdiMonitorCellphone"
        title="Top Allowed Domains"
        has-table
      >
        <TopDomains />
      </CardComponent>

      <CardComponent
        :icon="mdiMonitorCellphone"
        title="Top Clients"
        has-table
      >
        <TopClients />
      </CardComponent>
    </div>
  </MainSection>
</template>
