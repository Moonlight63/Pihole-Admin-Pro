import { defineStore } from 'pinia'
import axios from 'axios'
import { darkModeKey, apiAddressKey } from '@/config.js'

export const useGlobal = defineStore('main', {
  state: () => {
    /* Dark mode */
    const localStorageDarkModeValue = localStorage.getItem(darkModeKey)

    let initalDarkmode = false
    if (
      (localStorageDarkModeValue === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorageDarkModeValue === '1'
    ) {
      initalDarkmode = true
    }

    return {
      /* User */
      userName: null,
      userEmail: null,
      userAvatar: null,

      /* fullScreen - fullscreen form layout (e.g. login page) */
      isFullScreen: false,

      /* Aside */
      isAsideMobileExpanded: false,
      isAsideLgActive: false,

      /* Dark mode */
      darkMode: initalDarkmode,

      /* API Address */
      apiAddress: 'http://localhost:8080/',

      isConnecting: false,
      connected: false,

      currentSummary: {},

      /* Field focus with ctrl+k (to register only once) */
      isFieldFocusRegistered: false,

      /* Sample data (commonly used) */
      clients: [],
      loadingClients: false,
      history: [],
      myusers: []
    }
  },
  getters: {
    isFullScreen: (state) => {
      return state.isFullScreen
    }
  },
  actions: {
    asideMobileToggle(state, payload = null) {
      const isShow = payload !== null ? payload : !state.isAsideMobileExpanded

      document
        .getElementById('app')
        .classList[isShow ? 'add' : 'remove']('ml-60', 'lg:ml-0')

      document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped')

      state.isAsideMobileExpanded = isShow
    },

    asideLgToggle(state, payload = null) {
      state.isAsideLgActive =
        payload !== null ? payload : !state.isAsideLgActive
    },

    darkMode(state) {
      const value = !state.darkMode

      document.documentElement.classList[value ? 'add' : 'remove']('dark')

      localStorage.setItem(darkModeKey, value ? '1' : '0')

      state.darkMode = value
    }
  }
})
