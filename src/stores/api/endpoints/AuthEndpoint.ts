import { Endpoint, EndpointBaseTypes } from "./BaseEndpoint";

export type SessionType = {
  valid: boolean
  sid: string | null
  validity: number
}

export type AuthResponseType = {
  challenge: string,
  session: SessionType
}

interface Types extends EndpointBaseTypes {
  GET_TYPE: AuthResponseType,
  POST_TYPE: AuthResponseType,
  POST_DATA_TYPE: { response: string }
}

const AuthEndpoint = new Endpoint<Types>('/api/auth', { 
  authRequied: { 
    get: false, 
    post: false 
  }
})

export default AuthEndpoint