'use strict'

import { useApi } from '../api'
import AuthEndpoint from './endpoints/AuthEndpoint'
import EndpointLooper from './endpoints/EndpointLooper'
import { VersionEndpoint } from './endpoints/InfoEndpoints'
import { QueryHistoryEndpoint, SummaryEndpoint, ClientHistoryEndpoint } from './endpoints/MetricsEndpoints'
import { TopBlockedEndpoint, TopClientsEndpoint, TopDomainsEndpoint, UpstreamsEndpoint } from './endpoints/StatsEndpoints'

// import Looper from './Looper'

export default class Connector {
  private static instance: Connector | null

  // Get the current instance, or create it to bind with pinia
  static getInstance(): Connector {
    if (!Connector.instance) {
      Connector.instance = new Connector()
    }
    return Connector.instance
  }
  
  static async connect(host: string) {
    try {
      console.log(`${host}`);
      const response = await VersionEndpoint.get()
      Connector.getInstance().apiStore.version = response
      Connector.getInstance().startLoop()
    } catch (e) {
      if((e as Error).name === "AbortError") {
        throw new Error('Request timed out. Is the server reachable?')
      }
      console.log(e)
      throw new Error('Network error')
    }
  }

  

  // static async disconnect() {
  //   try {
  //     Connector.getInstance().stopLoop()
  //     Connector.getInstance().apiStore.$reset()
  //     Connector.instance = null
  //   } catch (e) {
  //     if (e instanceof Error) throw e
  //     else console.log(e)
  //   }
  // }

  static async disconnect() {
    try {
      // if (Connector.instance === null)
      //   throw new Error(
      //     'Connector must be initallized.'
      //   )

      Connector.getInstance().stopLoop()
      Connector.getInstance().apiStore.$reset()
    } catch (e) {
      if (e instanceof Error) throw e
      else console.log(e)
    }
  }

  // static startLoop() {
  //   Connector.endpoints.forEach((looper) => looper.startLoop())
  // }

  // static stopLoop() {
  //   Connector.endpoints.forEach((looper) => looper.stopLoop())
  // }

  // justConnected = true
  // isReconnecting = false

  // authStore = useAuth()

  // These can't be static because then useApi will be called
  // before Pinia is ready, so you have to wait until we can
  // create a new instance of the class as a singleton to
  // defer the call to Pinia.
  apiStore = useApi()

  private endpoints: Array<EndpointLooper> = [
    new EndpointLooper(SummaryEndpoint, this.apiStore.updateCurrentSummary, 60000),
    new EndpointLooper(QueryHistoryEndpoint, this.apiStore.updateQueryHistory, 600000),
    new EndpointLooper(ClientHistoryEndpoint, this.apiStore.updateClientHistory, 600000),
    new EndpointLooper(UpstreamsEndpoint, this.apiStore.updateUpstreams, 60000),
    new EndpointLooper(TopDomainsEndpoint, this.apiStore.updateTopDomains, 60000),
    new EndpointLooper(TopBlockedEndpoint, this.apiStore.updateTopBlocked, 60000),
    new EndpointLooper(TopClientsEndpoint, this.apiStore.updateTopClients, 60000),
  ]
  
  // private apiStore = useApi()

  // static initalize() {
  //   Connector.instance = new Connector()
  //   // Connector.apiStore = useApi()
  //   Connector.endpoints.push(new EndpointLooper(SummaryEndpoint, Connector.instance.apiStore.updateCurrentSummary, 10000))
  //   Connector.endpoints.push(new EndpointLooper(QueryHistoryEndpoint, Connector.instance.apiStore.updateQueryHistory, 10000))
  // }

  private constructor() {
    // I just have to exist
  }

  startLoop() {
    this.endpoints.forEach((looper) => looper.startLoop())
  }

  stopLoop() {
    this.endpoints.forEach((looper) => looper.stopLoop())
  }
}
