/* eslint-disable camelcase */
export type SummaryType = {
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

export type QueryHistoryType = {
  history : [{
    timestamp: number
    total: number
    cached: number
    blocked: number
  }]
}
