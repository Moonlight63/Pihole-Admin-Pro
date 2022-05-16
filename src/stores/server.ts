import { defineStore } from 'pinia'
import { apiAddressKey } from '@/config.js'
import Connector from './api/Connector'

// export const useServer = defineStore('server', {
//   state: () => {
//     return {
//       /* API Address */
//       apiAddress: 'http://localhost:8080/',

//       isConnecting: false,
//       isDisconnecting: false,
//       connected: false
//     }
//   },
//   getters: {},
//   actions: {
//     async connect(hostname = location.host) {
//       // TODO: Check for invalid hostname
//       // TODO: Check for already is connected
//       if (this.$state.isConnecting) {
//         throw new Error('Already connecting')
//       }

//       this.$state.isConnecting = true
//       try {
//         let url = new URL(hostname)
//         if (!(url.protocol === 'http:' || url.protocol === 'https:')) {
//           url = new URL(`${location.protocol}//${hostname}`)
//         }
//         const parsedUrl = `${url.protocol}//${url.host}`

//         await Connector.connect(`${parsedUrl}/api/`)

//         // TODO: Log Successfully Connected Event (and show toast)

//         // Save successful hostname to state and storage
//         this.$state.apiAddress = parsedUrl
//         localStorage.setItem(apiAddressKey, parsedUrl)

//         // TODO: load relevant UI settings from server (there aren't any right now)
//       } catch (e) {
//         // TODO: Log error and emit event to toast
//         console.log('Do we end up here at all?');
//         console.log(this);
//         console.log(this.$state);
        
//         console.log(e)
//         this.$state.isConnecting = false
//         return
//       }
//       this.$state.isConnecting = false
//       this.$state.connected = true
//     },

//     async disconnect() {
//       // TODO: Check if already Disconnected
//       if (this.$state.isDisconnecting) {
//         throw new Error('Already disconnecting')
//       }

//       this.$state.isDisconnecting = true
//       try {
//         await Connector.disconnect()
//         // TODO: Log disconnect event
//         // Disconnecting must always work - even if it does not always happen cleanly
//       } catch (e) {
//         // TODO: More logging
//       }
//       this.$state.isDisconnecting = false
//       this.$state.connected = false
//     }
//   }
// })


export const useServer = defineStore('server', () => {

  /* API Address */
  const apiAddress = ref('http://localhost:8080/')

  const isConnecting = ref(false)
  const isDisconnecting = ref(false)
  const connected = ref(false)

  const connect = async (hostname = location.host) => {
    // TODO: Check for invalid hostname
    // TODO: Check for already is connected
    if (isConnecting.value) {
      throw new Error('Already connecting')
    }

    isConnecting.value = true
    
    let url = new URL(hostname)
    if (!(url.protocol === 'http:' || url.protocol === 'https:')) {
      url = new URL(`${location.protocol}//${hostname}`)
    }
    const parsedUrl = `${url.protocol}//${url.host}`
    apiAddress.value = parsedUrl

    try {

      await Connector.connect(`${parsedUrl}/api/`)

      // TODO: Log Successfully Connected Event (and show toast)

      // Save successful hostname to storage
      localStorage.setItem(apiAddressKey, parsedUrl)

      // TODO: load relevant UI settings from server (there aren't any right now)
    } catch (e) {
      // TODO: Log error and emit event to toast
      console.log(e)
      isConnecting.value = false
      return
    }
    isConnecting.value = false
    connected.value = true
  }

  const disconnect = async () => {
    // TODO: Check if already Disconnected
    if (isDisconnecting.value) {
      throw new Error('Already disconnecting')
    }

    isDisconnecting.value = true
    try {
      await Connector.disconnect()
      // TODO: Log disconnect event
      // Disconnecting must always work - even if it does not always happen cleanly
    } catch (e) {
      // TODO: More logging
    }
    isDisconnecting.value = false
    connected.value = false
  }

  return {
    apiAddress,
    isConnecting,
    isDisconnecting,
    connected,

    connect,
    disconnect,
  }
  
})
