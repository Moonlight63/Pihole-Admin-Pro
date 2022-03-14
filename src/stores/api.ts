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
      if (this.$state)
        this.$state.currentSummary = payload
    },
    updateQueryHistory(payload: QueryHistoryType) {
      this.$state.queryHistory = payload
    },
    reset() {
      this.$reset
    }
  }
})

// export const useApi = defineStore('api', () => {
//     let currentSummary = ref({} as SummaryType)
//     let version = ref({} as VersionType)
//     let queryHistory = ref({} as QueryHistoryType)
    
//     const updateCurrentSummary = (payload: SummaryType) => {
//       currentSummary.value = payload
//     }
//     const updateQueryHistory = (payload: QueryHistoryType) => {
//       queryHistory.value = payload
//     }

//     return {
//       currentSummary,
//       version,
//       queryHistory,

//       updateCurrentSummary,
//       updateQueryHistory
//     }
// })
