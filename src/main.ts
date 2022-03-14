import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { apiAddressKey, themeKey } from '@/config.js'
import { createPinia } from 'pinia'
import { useGlobal } from './stores/global'
import { useClients } from './stores/clients'
import { useServer } from './stores/server'

import './css/main.css'

// import icons data genereted by PurgeIcons
import '@purge-icons/generated'

// Migrate to Pinia
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')

const globalStore = useGlobal()
const clientsStore = useClients()
const serverStore = useServer()

/* Dark mode */
if (
  (!localStorage[themeKey] &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  globalStore.changeTheme('dark')
} else if (localStorage[themeKey]) {
  globalStore.changeTheme(localStorage[themeKey])
}

/* Fetch sample data */
clientsStore.fetchClients()
clientsStore.fetchHistory()
clientsStore.getusers()

const localStorageApiAddressValue = localStorage.getItem(apiAddressKey)
if (localStorageApiAddressValue !== null) {
  serverStore.apiAddress = localStorageApiAddressValue
  serverStore.connect(localStorageApiAddressValue)
}

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
