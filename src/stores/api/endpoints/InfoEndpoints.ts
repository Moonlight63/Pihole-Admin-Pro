import { Endpoint, EndpointBaseTypes } from "./BaseEndpoint"

export type VersionGet = {
  web: {
    branch: string
    tag: string
  }
  core: {
    branch: string
    tag: string
  }
  ftl: {
    branch: string
    tag: string
    date: string
  }
}

export type SysinfoGet = {
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

interface VersionTypes extends EndpointBaseTypes {
  GET_TYPE: VersionGet
}

interface SysTypes extends EndpointBaseTypes {
  GET_TYPE: SysinfoGet
}

export const VersionEndpoint = new Endpoint<VersionTypes>('/api/version')
export const SysinfoEndpoint = new Endpoint<SysTypes>('/api/sysinfo')