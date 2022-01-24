import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { darkModeKey, apiAddressKey } from '@/config.js'

import './css/main.css'

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

/* Default title tag */
const defaultDocumentTitle = 'Pi-Hole Admin Pro'

/* Collapse mobile aside menu on route change */
router.beforeEach((to) => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

router.afterEach((to) => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})

createApp(App).use(store).use(router).mount('#app')
