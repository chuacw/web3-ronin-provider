import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ConnectionInfo } from "./web3-ronin-types-global";
import { EEmptyHeaders, EEmptyUrl, ENoApiKey, ENoHeaders } from "./web3-ronin-types-errors";

// For HTTP2
import { createHTTP2Adapter } from 'axios-http2-adapter';
import http2 from 'http2-wrapper';

abstract class CustomSkynetProvider {
  protected readonly connection: ConnectionInfo;

  /**
   * Creates an instance of CustomSkynetProvider. Used by SkynetWeb3Provider and SkynetRESTProvider.
   *
   * @throws {@link EEmptyHeaders} when headers are present, but empty
   * @throws {@link EEmptyUrl} when URL is empty
   * @throws {@link ENoApiKey} when X-API-KEY is absent
   * @throws {@link ENoHeaders} when headers are absent
   *
   * @param {ConnectionInfo} connection The URL to use, headers, etc
   */
  constructor(connection: ConnectionInfo) {
    this.connection = connection;
    if (connection.url === "") {
      throw new EEmptyUrl();
    }
    if (!connection["headers"]) {
      throw new ENoHeaders();
    }
    if (Object.keys(connection.headers).length === 0) {
      throw new EEmptyHeaders();
    }
    if (connection.headers["X-API-KEY"] === undefined || connection.headers["X-API-KEY"] === "") {
      throw new ENoApiKey();
    };
    this.connection.headers!["Accept"]                      = 'application/json';
    this.connection.headers!["Content-Type"]                = 'application/json';
    const adapterConfig = {
      agent: new http2.Agent({  }),
    };
    axios.defaults.adapter = createHTTP2Adapter(adapterConfig);
  }

  protected isErrorResponse(e: unknown) {
    return false;
  }

  protected concatUrl(url: string, urlSuffix: string): string {
    let _url = url;
    if (!_url.endsWith('/')) {
      _url = _url + '/';
    }
    let _urlSuffix = urlSuffix;
    if (url.startsWith('/')) {
      _urlSuffix = _urlSuffix.slice(1);
    }
    const result = _url + _urlSuffix;
    return result;
  }

  /**
   * Updates the url to include limit and cursors, if they're provided.
   *
   * @param {string} url
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {string} Updated url if limit and cursors provided, otherwise, returns the parameter url.
   */
  protected update_url(url: string, limit?: number, cursor?: string): string {
    const urlParams = new URLSearchParams();
    if (limit) {
      urlParams.append('limit', limit.toString());
    }
    if (cursor) {
      urlParams.append('cursor', cursor);
    }
    const result = this.update_url_with_Params(url, urlParams);
    return result;
  }

  protected update_url_with_Params(url: string, params: string | URLSearchParams): string {
    let _params;
    if (typeof params !== 'string') {
      _params = params.toString();
    } else {
      _params = params;
    }
    const result = _params === '' ? url : url + '?' + _params;
    return result;
  }

  protected abstract getRonin(urlSuffix: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>>;
  
  /**
   * Places a call to the service, with optional limits and cursor
   *
   * @async
   * @param {string} url
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<any>}
   */
  protected async getRoninLimitCursor(url: string, limit?: number, cursor?: string): Promise<any> {
    const _url = this.update_url(url, limit, cursor);
    const response = await this.getRonin(_url);
    const result = response.data;
    return result;
  }

  protected async postRonin(urlSuffix: string, data: any): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.connection.url, urlSuffix);
    let _config = {
      headers: this.connection.headers
    }
    let result: AxiosResponse<any, any>;
    result = await axios.post(url, data, _config);
    // @ts-ignore
    return result;
  }

}

export {
  CustomSkynetProvider
}