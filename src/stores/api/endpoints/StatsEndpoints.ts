import { EndpointBaseTypes, Endpoint } from "./BaseEndpoint"

export type UpstreamsGet = {
  upstreams: [
    {
      name: string,
      ip: string,
      port: number,
      count: number,
      responsetime: number,
      uncertainty: number
    }
  ],
  forwarded_queries: number,
  total_queries: number
}

interface UpstreamTypes extends EndpointBaseTypes {
  GET_TYPE: UpstreamTypes
}

export const UpstreamsEndpoint = new Endpoint<UpstreamTypes>('/api/stats/upstreams', { authRequied: true })