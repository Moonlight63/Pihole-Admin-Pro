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

export type TopDomainsGet = {
  "top_domains": [{
    "domain": string
    "count": number
  }]
  "total_queries": number
}

export type TopBlockedGet = {
  "top_domains": [{
    "domain": string
    "count": number
  }]
  "blocked_queries": number
}

export type TopClientsGet = {
  "top_clients": [{
    "name": string,
    "ip": string,
    "count": number
  }]
  "total_queries": number
}



interface UpstreamTypes extends EndpointBaseTypes {
  GET_TYPE: UpstreamTypes
}

interface TopDomainTypes extends EndpointBaseTypes {
  GET_TYPE: TopDomainsGet
}

interface TopBlockedTypes extends EndpointBaseTypes {
  GET_TYPE: TopBlockedGet
}

interface TopClientsTypes extends EndpointBaseTypes {
  GET_TYPE: TopClientsGet
}

export const UpstreamsEndpoint = new Endpoint<UpstreamTypes>('/api/stats/upstreams', { authRequied: true })
export const TopDomainsEndpoint = new Endpoint<TopDomainTypes>('/api/stats/top_domains', { authRequied: true })
export const TopBlockedEndpoint = new Endpoint<TopBlockedTypes>('/api/stats/top_blocked', { authRequied: true })
export const TopClientsEndpoint = new Endpoint<TopClientsTypes>('/api/stats/top_clients', { authRequied: true })
