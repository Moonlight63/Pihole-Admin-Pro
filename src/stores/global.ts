import { defineStore } from 'pinia'
import { darkModeKey } from '@/config.js'

export const useGlobal = defineStore('main', {
  state: () => {
    return {
      /* Aside */
      menuActive: false,

      lockWidth: false,

      /* Dark mode */
      darkMode:
        localStorage.getItem(darkModeKey) !== null
          ? localStorage.getItem(darkModeKey) === '1'
          : !!window.matchMedia('(prefers-color-scheme: dark)').matches,

      /* Field focus with ctrl+k (to register only once) */
      isFieldFocusRegistered: false
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

    toggleDarkMode(value?: boolean) {
      const v = value !== undefined ? value : !this.darkMode
      document.documentElement.classList[v ? 'add' : 'remove']('dark')
      localStorage.setItem(darkModeKey, v ? '1' : '0')
      this.$state.darkMode = v
    }
  }
})
