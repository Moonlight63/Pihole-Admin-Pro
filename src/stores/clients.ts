import { defineStore } from 'pinia'
import axios from 'axios'

type HistoryType = {
  amount: number
  date: string
  business: string
  name: string
  type: string
  account: string
}

type ClientType = {
  name: string
  login: string
  created: string
  progress: number
  id: number | string
}

export const useClients = defineStore('clients', {
  state: () => {
    return {
      /* Sample data (commonly used) */
      clients: [] as ClientType[],
      loadingClients: false,
      history: [] as HistoryType[],
      myusers: []
    }
  },
  getters: {},
  actions: {
    fetchClients() {
      this.$state.loadingClients = true
      // We put this on a different line so that rollup can replace the string at build
      const basepath = '__ROUTER_BASE_PATH__'
      axios
        .get(basepath + 'data-sources/clients.json')
        .then((r) => {
          if (r.data && r.data.data) {
            this.$state.clients = r.data.data
          }
          this.$state.loadingClients = false
        })
        .catch((error) => {
          this.$state.loadingClients = false
          alert(error.message)
        })
    },

    fetchHistory() {
      // We put this on a different line so that rollup can replace the string at build
      const basepath = '__ROUTER_BASE_PATH__'
      axios
        .get(basepath + 'data-sources/history.json')
        .then((r) => {
          if (r.data && r.data.data) {
            this.$state.history = r.data.data
          }
        })
        .catch((error) => {
          alert(error.message)
        })
    },

    getusers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((r) => {
          if (r.data) {
            this.$state.myusers = r.data
          }
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
})
