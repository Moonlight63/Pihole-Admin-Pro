<script setup>
import { useStore } from 'vuex'

defineProps({
  checkable: Boolean
})

const store = useStore()

const darkMode = computed(() => store.state.darkMode)

const itemsUnsorted = computed(() => store.state.clients)

const items = computed(() =>
  itemsUnsorted.value
    .slice(0)
    .sort((a, b) => parseFloat(b.progress) - parseFloat(a.progress))
    .slice(-10)
)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(10)

const currentPage = ref(0)

const checkedRows = ref([])

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id)
  }
}
</script>

<template>
  <ModalBox v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </ModalBox>

  <ModalBox
    v-model="isModalDangerActive"
    largeTitle="Please confirm"
    button="danger"
    hasCancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </ModalBox>

  <div v-if="checkedRows.length" class="p-3 bg-gray-50 dark:bg-gray-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <table>
    <thead>
      <tr>
        <th>Client</th>
        <th>Requests</th>
        <th>Frequency</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <td data-label="Client">
          {{ client.name }}
        </td>
        <td data-label="Requests">
          {{ client.progress }}
        </td>
        <!-- <td data-label="City">
          {{ client.city }}
        </td> -->
        <td data-label="Frequency" class="progress-cell">
          <progress max="100" :value="client.progress">
            {{ client.progress }}
          </progress>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="table-pagination">
    <Level>
      <JbButtons>
        <JbButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :outline="darkMode"
          small
          @click="currentPage = page"
        />
      </JbButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </Level>
  </div>
</template>
