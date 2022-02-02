import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { darkModeKey, apiAddressKey } from '@/config.js'
import { createPinia } from 'pinia'
import { useGlobal } from './store/global'

import './css/main.css'

// import icons data genereted by PurgeIcons
import '@purge-icons/generated'

// Migrate to Pinia
const pinia = createPinia()

/* Fetch sample data */
store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'history')

store.dispatch('getusers', 'myusers')

// console.log(store.state.clients)
// console.log(store.state.users)

/* Dark mode */
const localStorageDarkModeValue = localStorage.getItem(darkModeKey)

if (
  (localStorageDarkModeValue === null &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) ||
  localStorageDarkModeValue === '1'
) {
  store.dispatch('darkMode')
}

const localStorageApiAddressValue = localStorage.getItem(apiAddressKey)

if (localStorageApiAddressValue !== null) {
  store.dispatch('apiAddress', localStorageApiAddressValue)
}

createApp(App).use(store).use(pinia).use(router).mount('#app')

const globalStore = useGlobal()

/* Default title tag */
const defaultDocumentTitle = 'Pi-Hole Admin Pro'

/* Collapse mobile aside menu on route change */
router.beforeEach((to) => {
  globalStore.toggleMenu(false)
})

router.afterEach((to) => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})
