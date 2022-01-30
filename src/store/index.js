import { createStore } from 'vuex'
import axios from 'axios'
import { darkModeKey, apiAddressKey } from '@/config.js'

export default createStore({
  state: {
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
    darkMode: false,

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
  },
  mutations: {
    /* A fit-them-all commit */
    basic(state, payload) {
      state[payload.key] = payload.value

      // console.log(payload)
    },

    updateCurrentSummary(state, payload) {
      state.currentSummary = payload
    },

    /* User */
    user(state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },

    popClient(state) {
      console.log('Pop Client')
      state.clients = state.clients.slice(1)
    }
  },
  actions: {
    asideMobileToggle({ commit, state }, payload = null) {
      const isShow = payload !== null ? payload : !state.isAsideMobileExpanded

      // document
      //   .getElementById('app')
      //   .classList[isShow ? 'add' : 'remove']('ml-60', 'lg:ml-0')

      // document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped')

      commit('basic', {
        key: 'isAsideMobileExpanded',
        value: isShow
      })
    },

    asideLgToggle({ commit, state }, payload = null) {
      commit('basic', {
        key: 'isAsideLgActive',
        value: payload !== null ? payload : !state.isAsideLgActive
      })
    },

    fullScreenToggle({ commit, state }, value) {
      commit('basic', { key: 'isFullScreen', value })

      document.documentElement.classList[value ? 'add' : 'remove'](
        'full-screen'
      )
    },

    darkMode({ commit, state }) {
      const value = !state.darkMode

      document.documentElement.classList[value ? 'add' : 'remove']('dark')

      localStorage.setItem(darkModeKey, value ? '1' : '0')

      commit('basic', {
        key: 'darkMode',
        value
      })
    },

    async apiAddress({ commit, state }, value) {
      localStorage.setItem(apiAddressKey, value)

      commit('basic', {
        key: 'apiAddress',
        value
      })

      if (state.isConnecting) {
        throw new Error('Already connecting')
      }

      commit('basic', {
        key: 'isConnecting',
        value: true
      })

      axios
        .get(`${value}/api/stats/summary`)
        .then((r) => {
          if (r.data) {
            commit('updateCurrentSummary', r.data)
            commit('basic', {
              key: 'isConnecting',
              value: false
            })
          }
        })
        .catch((error) => {
          alert(error.message)
          commit('basic', {
            key: 'isConnecting',
            value: false
          })
        })
    },

    fetch({ commit, state }, payload) {
      state.loadingClients = true
      axios
        .get(`data-sources/${payload}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            commit('basic', {
              key: payload,
              value: r.data.data
            })
          }
          state.loadingClients = false
        })
        .catch((error) => {
          state.loadingClients = false
          alert(error.message)
        })
    },

    getusers({ commit, state }, payload) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((r) => {
          // console.log(payload)
          if (r.data) {
            commit('basic', {
              key: payload,
              value: r.data
            })
          }
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  },
  modules: {}
})
