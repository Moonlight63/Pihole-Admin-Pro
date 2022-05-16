import { defineStore } from 'pinia'
import { useServer } from './server'
import { sha256 } from 'js-sha256'
import { EndpointError } from './api/endpoints/BaseEndpoint'
import AuthEndpoint from './api/endpoints/AuthEndpoint'
import { useSession } from './session'

export const useAuth = defineStore('auth', () => {

  const server = useServer()
  const session = useSession()

  const login = async (password: string) => {
    if (!server.connected)
      return false

    try {
      // const request = await axios.get(`${server.apiAddress}/api/auth`)
      // console.log("🚀 ~ file: auth.ts ~ line 24 ~ login ~ request", request)
      // if (request.data.session.valid) {
      //   session.value = request.data.session
      //   return true
      // }

      // const challenge = request.data.challenge
      // console.log("🚀 ~ file: auth.ts ~ line 23 ~ login ~ challenge", challenge)

      // const response = sha256(challenge + ":" + sha256(sha256(password)));
      // console.log("🚀 ~ file: auth.ts ~ line 26 ~ login ~ password", password)
      // console.log("🚀 ~ file: auth.ts ~ line 26 ~ login ~ sha256(sha256(password))", sha256(sha256(password)))
      // console.log("🚀 ~ file: auth.ts ~ line 26 ~ login ~ response", response)

      // const result = await axios.post(`${server.apiAddress}/api/auth`, { response })
      // console.log("🚀 ~ file: auth.ts ~ line 26 ~ login ~ result", result)

      // session.value = result.data.session

      // cookies.set('sid', session.value.sid as string)
      // console.log("🚀 ~ file: auth.ts ~ line 46 ~ login ~ cookies", cookies.get('sid'))

      // console.log(document.cookie);
      

      // return true

      // const endpoints = {
      //   auth: new Endpoint<GetAuthType, never, GetAuthType>('/api/auth')
      // }

      // const test = new AuthEndpointTest()

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
      return true
    } catch (error) {
      // TODO: Better error handling
      console.log("There was an error: ");
      console.log(error);
      return false
    }

  }

  const checkAuth = async () => {
    if (!server.connected)
      return false

    try {
      const request = await AuthEndpoint.get()
      session.set(request.session)
      return request.session.valid
    } catch (error) {
      // TODO: Better error handling
      console.log("There was an error: ");
      console.log((error as EndpointError));
      return false
    }
    
  }

  return {
    login,
    checkAuth,
    session
  }
  
})
