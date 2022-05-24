import { defineStore } from 'pinia'
import { QueryHistoryGet, SummaryGet, ClientHistoryGet } from './api/endpoints/MetricsEndpoints'
import { VersionGet } from './api/endpoints/InfoEndpoints'
import { TopBlockedGet, TopClientsGet, TopDomainsGet, UpstreamsGet } from './api/endpoints/StatsEndpoints'

export const useApi = defineStore('api', () => {
    let currentSummary = ref({} as SummaryGet)
    let version = ref({} as VersionGet)
    let queryHistory = ref({} as QueryHistoryGet)
    let clientHistory = ref({} as ClientHistoryGet)
    let upstreams = ref({} as UpstreamsGet)
    let topDomains = ref({} as TopDomainsGet)
    let topBlocked = ref({} as TopBlockedGet)
    let topClients = ref({} as TopClientsGet)

    const updateCurrentSummary = (payload: SummaryGet) => {
      currentSummary.value = payload
    }
    const updateQueryHistory = (payload: QueryHistoryGet) => {
      queryHistory.value = payload
    }
    const updateClientHistory = (payload: ClientHistoryGet) => {
      clientHistory.value = payload
    }
    const updateUpstreams = (payload: UpstreamsGet) => {
      upstreams.value = payload
    }
    const updateTopDomains = (payload: TopDomainsGet) => {
      topDomains.value = payload
    }
    const updateTopBlocked = (payload: TopBlockedGet) => {
      topBlocked.value = payload
    }
    const updateTopClients = (payload: TopClientsGet) => {
      topClients.value = payload
    }

    return {
      currentSummary,
      version,
      queryHistory,
      clientHistory,
      upstreams,
      topDomains,
      topBlocked,
      topClients,

      updateCurrentSummary,
      updateQueryHistory,
      updateClientHistory,
      updateUpstreams,
      updateTopDomains,
      updateTopBlocked,
      updateTopClients,
    }
})
