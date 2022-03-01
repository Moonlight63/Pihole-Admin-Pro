<script setup>
import { useClients } from '@/stores/clients'

defineProps({
  checkable: Boolean
})

const items = computed(() => useClients().myusers)

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

const doStuff = () => {
  console.log(store.state.myusers)
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

  <JbButtons>
    <JbButton label="Do Stuff" @click="doStuff()" />
  </JbButtons>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>Name</th>
        <th>Username</th>
        <th>E-Mail</th>
        <th>Phone</th>
        <th>Website</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <CheckboxCell v-if="checkable" @checked="checked($event, client)" />
        <td class="image-cell">
          <UserAvatar :username="client.name" class="image" />
        </td>
        <td data-label="Name">
          {{ client.name }}
        </td>
        <td data-label="Username">
          {{ client.username }}
        </td>
        <td data-label="E-Mail">
          {{ client.email }}
        </td>
        <td data-label="Phone">
          {{ client.phone }}
        </td>
        <td data-label="Website">
          <small class="text-on-main-muted" :title="client.website">{{
            client.website
          }}</small>
        </td>
        <td class="actions-cell">
          <JbButtons type="justify-start lg:justify-end" noWrap>
            <JbButton
              color="success"
              icon="mdi:eye"
              small
              @click="isModalActive = true"
            />
            <JbButton
              color="danger"
              icon="mdi:trash-can"
              small
              @click="isModalDangerActive = true"
            />
          </JbButtons>
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
          small
          @click="currentPage = page"
        />
      </JbButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </Level>
  </div>
</template>
