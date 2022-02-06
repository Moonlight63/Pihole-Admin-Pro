import { defineStore } from 'pinia'
import { apiAddressKey } from '@/config.js'
import Connector from './api/Connector'

export const useServer = defineStore('server', {
  state: () => {
    return {
      /* API Address */
      apiAddress: 'http://localhost:8080/',

      isConnecting: false,
      isDisconnecting: false,
      connected: false
    }
  },
  getters: {},
  actions: {
    async connect(hostname = location.host) {
      // TODO: Check for invalid hostname
      // TODO: Check for already is connected
      if (this.$state.isConnecting) {
        throw new Error('Already connecting')
      }

      this.$state.isConnecting = true
      try {
        let url = new URL(hostname)
        if (!(url.protocol === 'http:' || url.protocol === 'https:')) {
          url = new URL(`${location.protocol}//${hostname}`)
        }
        const parsedUrl = url.protocol + '//' + url.host

        await Connector.connect(parsedUrl + '/api/')

        // TODO: Log Successfully Connected Event (and show toast)

        // Save successful hostname to state and storage
        this.$state.apiAddress = parsedUrl
        localStorage.setItem(apiAddressKey, parsedUrl)

        // TODO: load relevant UI settings from server (there aren't any right now)
      } catch (e) {
        // TODO: Log error and emit event to toast
        console.log(e)
      }
      this.$state.isConnecting = false
      this.$state.connected = true
    },

    async disconnect() {
      // TODO: Check if already Disconnected
      if (this.$state.isDisconnecting) {
        throw new Error('Already disconnecting')
      }

      this.$state.isDisconnecting = true
      try {
        await Connector.disconnect()
        // TODO: Log disconnect event
        // Disconnecting must always work - even if it does not always happen cleanly
      } catch (e) {
        // TODO: More logging
      }
      this.$state.isDisconnecting = false
      this.$state.connected = false
    }
  }
})
