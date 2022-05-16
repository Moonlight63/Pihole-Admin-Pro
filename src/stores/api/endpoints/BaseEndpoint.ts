// Implementation based on Mande: https://github.com/posva/mande/
// Simplified for my use.

import { useServer } from "@/stores/server"
import { useSession } from "@/stores/session"

/**
 * Allowed options for a request. Extends native `RequestInit`.
 */
export interface EndpointOptions extends RequestInit {
  /**
  * Optional query object. Does not support arrays. Will get stringified
  */
  query?: any

  /**
  * Headers sent alongside the request
  */
  headers?: Record<string, string>
}

// export type ResponseAsTypes = 'json' | 'text' | 'response'

// export interface EndpointOptionsRaw<R extends ResponseAsTypes = ResponseAsTypes> extends Omit<EndpointOptions<R>, 'headers' | 'signal'> {
export interface EndpointOptionsRaw extends Omit<EndpointOptions, 'headers' | 'signal'> {
  /**
  * Headers sent alongside the request. Set any header to null to remove it.
  */
  headers?: Record<string, string | null>

  /**
    * AbortSignal can only be passed to requests, not to a mande instance
    * because it can only be used once.
    */
  signal?: never

  /**
   * Authentication requirements.
   */
  authRequied?: AuthTable | boolean
}

/**
* Extended Error with the raw `Response` object.
*/
export interface EndpointError<T = any> extends Error {
  body: T
  response: Response
}

function stringifyQuery(query: any): string {
  let searchParams = Object.keys(query)
    .map((k) => [k, query[k]].map(encodeURIComponent).join('='))
    .join('&')
  return searchParams ? '?' + searchParams : ''
}

let trailingSlashRE = /\/+$/
let leadingSlashRE = /^\/+/

function joinURL(base: string, url: string): string {
  return (
    base.replace(trailingSlashRE, '') + '/' + url.replace(leadingSlashRE, '')
  )
}

function removeNullishValues(
  headers: Exclude<EndpointOptionsRaw['headers'], undefined>
): Exclude<EndpointOptions['headers'], undefined> {
  return Object.keys(headers).reduce((newHeaders, headerName) => {
    if (headers[headerName] != null) {
      // @ts-ignore
      newHeaders[headerName] = headers[headerName]
    }
    return newHeaders
  }, {} as Exclude<EndpointOptions['headers'], undefined>)
}

type AuthTable = { get?: boolean, post?: boolean, put?: boolean, patch?: boolean, delete?: boolean }

export interface EndpointBaseTypes {
  GET_TYPE : Record<string | number | symbol, any>,
  GET_SUB_TYPE : Record<string | number | symbol, any>,
  
  POST_TYPE : Record<string | number | symbol, any>,
  POST_SUB_TYPE : Record<string | number | symbol, any>,
  POST_DATA_TYPE : Record<string | number | symbol, any>,
  POST_SUB_DATA_TYPE : Record<string | number | symbol, any>,
  
  PUT_TYPE : Record<string | number | symbol, any>,
  PUT_SUB_TYPE : Record<string | number | symbol, any>,
  PUT_DATA_TYPE : Record<string | number | symbol, any>,
  PUT_SUB_DATA_TYPE : Record<string | number | symbol, any>,
  
  PATCH_TYPE : Record<string | number | symbol, any>,
  PATCH_SUB_TYPE : Record<string | number | symbol, any>,
  PATCH_DATA_TYPE : Record<string | number | symbol, any>,
  PATCH_SUB_DATA_TYPE : Record<string | number | symbol, any>,
  
  DELETE_TYPE : void,
  DELETE_SUB_TYPE : void,
}

export class Endpoint<Types extends EndpointBaseTypes = EndpointBaseTypes> {

  baseUrl: string
  instanceOptions: Required<Pick<EndpointOptionsRaw, "headers">> & Pick<EndpointOptionsRaw, "query">;

  requireAuth: AuthTable

  /**
   * Global default options as {@link EndpointOptions} that are applied to **all** mande
   * instances. Always contain an initialized `headers` property with the default
   * headers:
   * - Accept: 'application/json'
   * - 'Content-Type': 'application/json'
   */
  static defaults: EndpointOptions & Pick<Required<EndpointOptions>, 'headers'> = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  constructor(baseUrl: string, options: EndpointOptionsRaw = {}) {
    // this.target = mande(baseURL, passedInstanceOptions, fetchPolyfill)
    this.baseUrl = baseUrl

    let tempAuth = { delete: false, get: false, patch: false, post: false, put: false }
    if (typeof options.authRequied === 'boolean') {
      tempAuth = {
        delete: options.authRequied,
        get: options.authRequied,
        patch: options.authRequied,
        post: options.authRequied,
        put: options.authRequied,
      }
    } else if (typeof options.authRequied === 'object') {
      tempAuth = {...tempAuth, ...options.authRequied}
    }
    this.requireAuth = tempAuth
    options.authRequied = undefined
    this.instanceOptions = {
      query: {},
      headers: {},
      ...options
    }
  }

  private async _fetch(
    method: string,
    urlOrData?: string | number | any,
    dataOrOptions?: EndpointOptions | any,
    localOptions: EndpointOptions = {}
  ) {
    
    const session = useSession()
    const server = useServer()

    // Hmmm.... Gonna have to do this check somewhere else...
    if (!server.connected && !server.isConnecting) {
      const err = new Error("Not connected to any PiHole API server.") as EndpointError;
      err.body = "Connection Error";
      throw err;
    }
    
    if ((this.requireAuth as {[key: string]: boolean})[method.toLowerCase()] && !session.valid) {
      const err = new Error("This endpoint requires valid authentication when using " + method + " method.") as EndpointError;
      err.name = "AuthError"
      err.body = "Authentication Error";
      throw err;
    }
    
    let url: string | number
    let data: any

    if (typeof urlOrData === 'object') {
      url = ''
      data = urlOrData
      localOptions = dataOrOptions || {}
    } else {
      url = urlOrData
      data = dataOrOptions
    }

    let mergedOptions: EndpointOptions = {
      ...Endpoint.defaults,
      ...this.instanceOptions,
      credentials: 'include',
      method,
      ...localOptions,
      // we need to ditch nullish headers
      headers: removeNullishValues({
        ...Endpoint.defaults.headers,
        ...this.instanceOptions.headers,
        ...localOptions.headers,
        sid: session.sid
      }),
    }

    let query = {
      ...Endpoint.defaults.query,
      ...this.instanceOptions.query,
      ...localOptions.query,
    }

    // let { responseAs } = mergedOptions as Required<EndpointOptions>

    url = joinURL(this.baseUrl, typeof url === 'number' ? '' + url : url || '')
    url = joinURL(server.apiAddress, url)

    // console.log(url);
    console.log("🚀 ~ file: BaseEndpoint.ts ~ line 213 ~ Endpoint<Types ~ url", url)
    

    // TODO: warn about multiple queries provided not supported
    // if (__DEV__ && query && urlInstance.search)

    url += stringifyQuery(query)

    if (data) mergedOptions.body = JSON.stringify(data)

    const controller = new AbortController()
    const signal = controller.signal

    const timeout = setTimeout(() => {
      controller.abort()
    }, 5000);

    const response = await fetch(url, { ...mergedOptions, signal });

    clearTimeout(timeout)

    console.log("🚀 ~ file: endpoint.ts ~ line 191 ~ Endpoint ~ response", response)
    // const [response_1, data_1] = await Promise.all([
    //   response,
    //   responseAs === 'response'
    //     ? response
    //     : response[responseAs]().catch(() => null),
    // ]);
    // if (response_1.status >= 200 && response_1.status < 300) {
    //   // data is a raw response when responseAs is response
    //   return responseAs !== 'response' && response_1.status == 204
    //     ? null
    //     : data_1;
    // }
    if (response.status >= 200 && response.status < 300 && response.ok) {
      // if(responseAs=="response")
      //   return response
      // if (response.status == 204)
      //   return null;
      return await response.json();
    }
    // let err = new Error(response_1.statusText) as EndpointError;
    // err.response = response_1;
    // err.body = data_1;
    // throw err;
    let err = new Error(response.statusText) as EndpointError;
    err.response = response;
    err.body = await response.json();
    throw err;
  }

  /**
   * Sends a GET request to the base or sub url.
   *
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.get()
   * console.log(res) // <-- [{ name: Alex, id: 0 }, { name: James, id: 1 }, { name: Tommy, id: 2 }]
   * ```
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.get('2')
   * // Sends to 'https://api.xyz/users/2'
   * console.log(res) // <-- { name: Tommy, id: 2 }
   * ```
   * 
   * @param url - relative url to send the request to
   * @param options - optional {@link EndpointOptions}
   * 
   * @returns JSON Object
   */
  get<T = undefined>(options?: EndpointOptions) : T extends undefined ? Promise<Types["GET_TYPE"]> : Promise<T>;
  get<T = undefined>(url: string | number, options?: EndpointOptions) : T extends undefined ? Promise<Types["GET_SUB_TYPE"]> : Promise<T>;
  //  get<T = undefined, U extends string | number | undefined = undefined>(url?: T extends undefined ? U : string | number, options?: EndpointOptions) : T extends undefined ? U extends undefined ? Promise<GET_TYPE> : Promise<GET_SUB_TYPE> : Promise<T>;
  
  get(url?: any, options?: EndpointOptions) : Promise<any> {
    return this._fetch('GET', url, null, options)
  }

  /**
   * Sends a POST request to the given url.
   *
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.post({ data: { name: Alex, id: 0 } })
   * console.log(res) // <-- [{ name: Alex, id: 0 }]
   * ```
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.post('2', { name: James })
   * // Posts to 'https://api.xyz/users/2'
   * console.log(res) // <-- [{ name: Alex, id: 0 }, { name: James, id: 2 }]
   * ```
   * @param url - relative url to send the request to
   * @param data - optional body of the request {@link Types["POST_DATA_TYPE"]}
   * @param options - optional {@link EndpointOptions}
   */
  post<T = undefined>(data: Types["POST_DATA_TYPE"], options?: EndpointOptions) : T extends undefined ? Promise<Types["POST_TYPE"]> : Promise<T>;
  post<T = undefined>(url: string | number, data: Types["POST_SUB_DATA_TYPE"], options?: EndpointOptions) : T extends undefined ? Promise<Types["POST_SUB_TYPE"]> : Promise<T>;
  post(url: any, data?: any, options?: any) : Promise<any> {
    return this._fetch('POST', url, data, options)
  }

  /**
   * Sends a PUT request to the given url.
   *
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.put({ data: { name: Alex, id: 0 } })
   * console.log(res) // <-- [{ name: Alex, id: 0 }]
   * ```
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.put('2', { name: James })
   * // Puts to 'https://api.xyz/users/2'
   * console.log(res) // <-- [{ name: Alex, id: 0 }, { name: James, id: 2 }]
   * ```
   * @param url - relative url to send the request to
   * @param data - optional body of the request
   * @param options - optional {@link EndpointOptions}
   */
  put<T = undefined>(data: Types["PUT_DATA_TYPE"], options?: EndpointOptions) : T extends undefined ? Promise<Types["PUT_TYPE"]> : Promise<T>;
  put<T = undefined>(url: string | number, data: Types["PUT_SUB_DATA_TYPE"], options?: EndpointOptions) : T extends undefined ? Promise<Types["PUT_SUB_TYPE"]> : Promise<T>;
  put(url: any, data?: any, options?: any) : Promise<any> {
    return this._fetch('PUT', url, data, options)
  }

  /**
   * Sends a PATCH request to the given url.
   *
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res1 = await users.get()
   * console.log(res1) // <-- [{ name: Alex, id: 0 }, { name: James, id: 1 }]
   * const res2 = await users.patch({ data: { name: Tommy, id: 0 } })
   * console.log(res2) // <-- [{ name: Tommy, id: 0 }, { name: James, id: 1 }]
   * ```
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res1 = await users.get('0')
   * console.log(res1) // <-- { name: Alex, id: 0 }
   * const res2 = await users.patch('0', { name: Tommy })
   * console.log(res2) // <-- { name: Tommy, id: 0 }
   * ```
   * @param url - relative url to send the request to
   * @param data - optional body of the request
   * @param options - optional {@link EndpointOptions}
   */
  patch<T = undefined>(data: Types["PATCH_DATA_TYPE"], options?: EndpointOptions) : T extends undefined ? Promise<Types["PATCH_TYPE"]> : Promise<T>;
  patch<T = undefined>(url: string | number, data: Types["PATCH_SUB_DATA_TYPE"], options?: EndpointOptions) : T extends undefined ? Promise<Types["PATCH_SUB_TYPE"]> : Promise<T>;
  patch(url: any, data?: any, options?: any) : Promise<any> {
    return this._fetch('PATCH', url, data, options)
  }

  /**
   * Sends a DELETE request to the given url.
   *
   * @example
   * ```js
   * const users = new Endpoint('https://api.xyz/users')
   * const res = await users.get()
   * console.log(res) // <-- [{ name: Alex, id: 0 }, { name: James, id: 1 }, { name: Tommy, id: 2 }]
   * users.delete('2') // <-- responds with status 204
   * const res2 = await users.get()
   * console.log(res2) // <-- [{ name: Alex, id: 0 }, { name: James, id: 1 }]
   * ```
   * @param url - relative url to send the request to
   * @param options - optional {@link EndpointOptions}
   */
  delete<T = undefined>(options?: EndpointOptions) : T extends undefined ? Promise<Types["DELETE_TYPE"]> : Promise<T>;
  delete<T = undefined>(url: string | number, options?: EndpointOptions) : T extends undefined ? Promise<Types["DELETE_SUB_TYPE"]> : Promise<T>;
  delete(url?: any, options?: EndpointOptions) : Promise<any> {
    return this._fetch('DELETE', url, null, options)
  }

}