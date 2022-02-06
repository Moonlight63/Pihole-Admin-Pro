import { defineStore } from 'pinia'
import { VersionType } from './api/FtlTypes'
import { SummaryType } from './api/StatusTypes'

export const useApi = defineStore('api', {
  state: () => {
    return {
      currentSummary: {} as SummaryType,
      version: {} as VersionType
    }
  },
  getters: {},
  actions: {
    updateCurrentSummary(payload: SummaryType) {
      this.$state.currentSummary = payload
    }
  }
})
