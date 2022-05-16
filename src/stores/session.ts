import { defineStore } from 'pinia'
import { useServer } from './server'
import { useCookies } from 'vue3-cookies'
// We can import a type without creating a cyclic dependancy
// even though AuthEndpoint also imports this file.
import { SessionType } from './api/endpoints/AuthEndpoint'
import { sidKey } from '@/config'

// Session data is stored seperately from auth to avoid a cyclic dependancy
export const useSession = defineStore('session', () => {

  const server = useServer()
  const cookies = useCookies().cookies

  const valid = ref<boolean>(false)
  const sid = ref<string | null>(null)
  const validity = ref<number>(-1)

  const set = (sess: SessionType) => {
    if(!server.connected)
      return false

    valid.value = sess.valid
    sid.value = sess.sid
    validity.value = sess.validity

    /// TODO: check if we are connected to same origin
    //  Cookie auth wont work on cross-origin requests
    //  no need to set unless on same origin
    //  (Actually it may not need to be manually set here at all
    //  because the browser will receive a Set-Cookie header)
    cookies.set('sid', sess.sid as string)
    // else store sid in local storage for page refreshes
    localStorage.setItem(sidKey, sess.sid as string)
  }

  return {
    set,
    valid,
    sid,
    validity
  }
  
})
