import { defineStore } from 'pinia'
import axios from 'axios'
import { darkModeKey, apiAddressKey } from '@/config.js'

export const useGlobal = defineStore('main', {
  state: () => {
    return {
      /* User */
      userName: null,
      userEmail: null,
      userAvatar: null,

      /* Aside */
      menuActive: false,

      lockWidth: false,

      /* Dark mode */
      darkMode:
        localStorage.getItem(darkModeKey) !== null
          ? localStorage.getItem(darkModeKey) === '1'
          : !!window.matchMedia('(prefers-color-scheme: dark)').matches,

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
    isMenuActive: (state) => {
      return state.menuActive
    }
  },
  actions: {
    toggleMenu(value?: boolean) {
      this.$state.menuActive = value !== undefined ? value : !this.menuActive
    },

    darkMode() {
      const value = !this.darkMode

      document.documentElement.classList[value ? 'add' : 'remove']('dark')

      localStorage.setItem(darkModeKey, value ? '1' : '0')

      this.$state.darkMode = value
    }
  }
})
