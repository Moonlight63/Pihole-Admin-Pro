'use strict'

import { useSession } from "@/stores/session"
import { Endpoint } from "./BaseEndpoint"

export default class EndpointLooper {

  endpoint: Endpoint
  callback: Function
  interval: number

  justConnected = true
  isReconnecting = false
  shouldRun = false
  mustWait = false
  // sessionTimeout: number | null = null

  updateLoopTimer: number | null = null
  updateLoopCounter = 1

  constructor(endpoint: Endpoint, callback: Function, interval: number) {
    this.endpoint = endpoint
    this.callback = callback
    this.interval = interval

    if (endpoint.requireAuth.get) {
      const session = useSession()
      if (!session.valid) {
        this.mustWait = true
      }

      session.$subscribe(() => {
        console.log(this.endpoint.baseUrl);
        this.mustWait = !session.valid
        if (this.shouldRun && !this.mustWait) {
          this.startLoop()
        } else {
          // We dont want to change our shouldRun flag
          this.forceStop()
        }
      })
    }

    // this.updateLoop()
  }

  startLoop() {
    this.shouldRun = true
    if (this.mustWait)
      return
    this.justConnected = true
    this.updateLoop()
  }

  stopLoop() {
    this.shouldRun = false
    this.forceStop()
  }

  private forceStop() {
    if (this.updateLoopTimer) {
      clearTimeout(this.updateLoopTimer)
      this.updateLoopTimer = null
    }
  }

  scheduleUpdate() {
    if (this.justConnected || this.updateLoopTimer) {
      this.updateLoopTimer = setTimeout(async () => {
        try {
          this.updateLoop()
        } catch (error) {
          // TODO: Check for disconnection error, set
          // updateLoopTimer to null, and try reconnect
          this.stopLoop()
          throw error
        }
      }, this.interval)
    }
  }

  private async updateLoop() {
    try {
      const res = await this.endpoint.get()
      if (res) {
        this.callback(res)
      }
    } catch (error) {
      // alert(error.message)
      if (error instanceof Error && error.name === "AuthError") {
        // Subscribe to auth action and wait?
      }
      throw error
    }

    this.updateLoopCounter++
    this.scheduleUpdate()
    this.justConnected = false
  }

}
