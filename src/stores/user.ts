import { defineStore } from 'pinia'

export const useUsers = defineStore('user', {
  state: () => {
    return {
      /* User */
      userName: null,
      userEmail: null,
      userAvatar: null
    }
  },
  getters: {},
  actions: {
    /* User */
    user(payload: { name?: null; email?: null; avatar?: null }) {
      if (payload.name) {
        this.$state.userName = payload.name
      }
      if (payload.email) {
        this.$state.userEmail = payload.email
      }
      if (payload.avatar) {
        this.$state.userAvatar = payload.avatar
      }
    }
  }
})
