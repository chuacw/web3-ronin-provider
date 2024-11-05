// Author: chuacw, Singapore, Singapore

import { AxiosProxyConfig } from "axios"


/**
 * Indicates the value to use to get the next page
 *
 */
export interface Paging {
  nextCursor?: string
}

/**
 * Provides the URL, headers, and other information to set up a connection to the backend.
 * @typedef ConnectionInfo
 * @type {object}
 * @property {string} url - URL to the service.
 * @property {object} [headers] - X-API-KEY amongst others.
 * @property {AxiosProxyConfig} [proxy] - Proxy
 */
type ConnectionInfo = {
  /**
   * The URL for the connection
   *
   * @type {string}
   */
  url: string,
  /**
   * Optional headers as key-value pairs.
   *
   * @type {?({ [key: string]: string | number })}
   */
  headers?: { [key: string]: string | number },
  /**
   * Optional proxy configuration
   */
  proxy?: AxiosProxyConfig
}

export {
  ConnectionInfo
}