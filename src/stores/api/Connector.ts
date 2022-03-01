'use strict'

import axios, { AxiosInstance } from 'axios'
import { useApi } from '../api'

export default class Connector {
  private static instance: Connector | null

  static async connect(host: string) {
    if (Connector.instance)
      throw new Error(
        'Connector already exists! Please disconnect first to create a new connection.'
      )
    let response
    try {
      response = await axios.get(`${host}ftl/client`)
    } catch (e) {
      console.log(e)
      throw new Error('Network error')
    }

    Connector.instance = new Connector(host)
    Connector.instance.getBasicData()
    Connector.instance.updateLoop()
    return new Connector(host)
  }

  static getInstance(): Connector {
    if (!Connector.instance) {
      throw new Error(
        'No connection established! Please connect to a server first.'
      )
    }
    return Connector.instance
  }

  static async disconnect() {
    try {
      Connector.getInstance().stopLoop()
      Connector.instance = null
    } catch (e) {
      if (e instanceof Error) throw e
      else console.log(e)
    }
  }

  axios: AxiosInstance
  justConnected = true
  isReconnecting = false
  sessionTimeout: number | null = null

  updateLoopTimer: number | null = null
  updateLoopCounter = 1

  apiStore = useApi()

  private constructor(host: string) {
    this.axios = axios.create({
      baseURL: host
    })
    // this.getBasicData()
  }

  startLoop() {
    this.scheduleUpdate()
  }

  stopLoop() {
    if (this.updateLoopTimer) {
      clearTimeout(this.updateLoopTimer)
      this.updateLoopTimer = null
    }
  }

  scheduleUpdate() {
    if (this.justConnected || this.updateLoopTimer) {
      // Perform status update
      this.updateLoopTimer = setTimeout(async () => {
        try {
          this.updateLoop()
          console.log('LOOP FINISHED')
        } catch (e) {
          // TODO: Check for disconnection error, set updateLoopTimer to null, and try reconnect
          console.log(e)

          this.stopLoop()
        }
      }, 1000)
    }
  }

  private async updateLoop() {
    console.log('UPDATE LOOP')
    console.log(
      '🚀 ~ file: Connector.ts ~ line 95 ~ Connector ~ updateLoop ~ this.updateLoopTimer',
      this.updateLoopTimer
    )
    console.log(
      '🚀 ~ file: Connector.ts ~ line 95 ~ Connector ~ updateLoop ~ this.justConnected',
      this.justConnected
    )

    await this.axios
      .get('stats/summary')
      .then((r) => {
        if (r.data) {
          this.apiStore.updateCurrentSummary(r.data)
        }
      })
      .catch((error) => {
        throw error
        // alert(error.message)
      })

    await this.axios
      .get('history')
      .then((r) => {
        if (r.data) {
          this.apiStore.updateQueryHistory(r.data)
        }
      })
      .catch((error) => {
        throw error
        // alert(error.message)
      })

    this.updateLoopCounter++
    this.scheduleUpdate()
    this.justConnected = false
    return true
  }

  async getBasicData() {
    this.axios
      .get('version')
      .then((r) => {
        if (r.data) {
          this.apiStore.version = r.data
        }
      })
      .catch((error) => {
        throw error
        // alert(error.message)
      })
  }
}
