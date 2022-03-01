import { defineStore } from 'pinia'
import { VersionType } from './api/FtlTypes'
import { QueryHistoryType, SummaryType } from './api/MetricsTypes'

export const useApi = defineStore('api', {
  state: () => {
    return {
      currentSummary: {} as SummaryType,
      version: {} as VersionType,
      queryHistory: {} as QueryHistoryType
    }
  },
  getters: {},
  actions: {
    updateCurrentSummary(payload: SummaryType) {
      this.$state.currentSummary = payload
    },
    updateQueryHistory(payload: QueryHistoryType) {
      this.$state.queryHistory = payload
    }
  }
})
