import { defineStore } from 'pinia'
import { useServer } from './server'
import { sha256 } from 'js-sha256'
import { EndpointError } from './api/endpoints/BaseEndpoint'
import AuthEndpoint from './api/endpoints/AuthEndpoint'
import { useSession } from './session'

export const useAuth = defineStore('auth', () => {

  const server = useServer()
  const session = useSession()
  const updating = ref(false)

  const login = async (password: string) => {
    if (!server.connected)
      return false

    try {
      updating.value = true
      const request = await AuthEndpoint.get()
      console.log("🚀 ~ file: auth.ts ~ line 53 ~ login ~ request", request)
      
      if (request.session.valid) {
        session.set(request.session)
        return true
      }
      const challenge = request.challenge
      const response = sha256(challenge + ":" + sha256(sha256(password)));
      const result = await AuthEndpoint.post({ response })
      console.log("🚀 ~ file: auth.ts ~ line 62 ~ login ~ result", result)
      session.set(result.session)
      updating.value = false
      return true
    } catch (error) {
      // TODO: Better error handling
      updating.value = false
      console.log("There was an error: ");
      console.log(error);
      return false
    }

  }

  const checkAuth = async () => {
    if (!server.connected)
      return false

    try {
      updating.value = true
      const request = await AuthEndpoint.get()
      session.set(request.session)
      updating.value = false
      if (session.valid) {
        console.log("Starting timer for auth check.")
        setTimeout(() => {
          console.log("Running checkAuth")
          checkAuth()
        }, 60000)
      }
      return request.session.valid
    } catch (error) {
      updating.value = false
      // TODO: Better error handling
      console.log("There was an error: ");
      console.log((error as EndpointError));
      return false
    }
    
  }

  return {
    login,
    checkAuth,
    session,
    updating
  }
  
})
