import { Endpoint, EndpointBaseTypes } from "./BaseEndpoint"

/* eslint-disable camelcase */
export type SummaryGet = {
  queries: {
    total: number
    blocked: number
    percent_blocked: number
    unique_domains: number
    forwarded: number
    cached: number
    types: {
      A: number
      AAAA: number
      ANY: number
      SRV: number
      SOA: number
      PTR: number
      TXT: number
      NAPTR: number
      MX: number
      DS: number
      RRSIG: number
      DNSKEY: number
      NS: number
      SVCB: number
      HTTPS: number
      OTHER: number
    }
    replies: {
      NODATA: number
      NXDOMAIN: number
      CNAME: number
      IP: number
      text: number
    }
  }
  system: {
    uptime: number
    memory: {
      ram: {
        total: number
        free: number
        used: number
        available: number
      }
      swap: {
        total: number
        used: number
        free: number
      }
    }
    procs: number
    cpu: {
      nprocs: number
      load: {
        raw: [number]
        percent: [number]
      }
    }
    sensors: [
      {
        name: string
        path: string
        value: number
      }
    ]
    dns: {
      blocking: boolean
    }
  }
  ftl: {
    database: {
      gravity: number
      groups: number
      lists: number
      clients: number
      domains: {
        allowed: number
        denied: number
      }
    }
    privacy_level: number
    clients: {
      total: number
      active: number
    }
  }
}

export type QueryHistoryGet = {
  history : [{
    timestamp: number
    total: number
    cached: number
    blocked: number
  }]
}

export type ClientHistoryGet = {
  history : [{
    timestamp: number
    data: [number]
  }]
  clients : [{
    name: string
    ip: string
  }]
} 

interface SummaryTypes extends EndpointBaseTypes {
  GET_TYPE: SummaryGet
}

interface HistoryTypes extends EndpointBaseTypes {
  GET_TYPE: QueryHistoryGet
}

interface ClientHistoryTypes extends EndpointBaseTypes {
  GET_TYPE: ClientHistoryGet
}

export const SummaryEndpoint = new Endpoint<SummaryTypes>('/api/stats/summary')
export const QueryHistoryEndpoint = new Endpoint<HistoryTypes>('/api/history')
export const ClientHistoryEndpoint = new Endpoint<ClientHistoryTypes>('/api/history/clients', { authRequied: true })