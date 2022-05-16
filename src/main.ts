import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './css/main.css'

// import icons data genereted by PurgeIcons
import '@purge-icons/generated'

// Migrate to Pinia
const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')

// const globalStore = useGlobal()
// const clientsStore = useClients()
// const serverStore = useServer()

/* Default title tag */
const defaultDocumentTitle = 'Pi-Hole Admin Pro'

/* Collapse mobile aside menu on route change */
// router.beforeEach((to) => {
//   globalStore.toggleMenu(false)
// })

router.afterEach((to) => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})
