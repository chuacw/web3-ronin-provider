// Author: chuacw, Singapore, Singapore

import { internal_txs_detail_Response, internal_txs_Response, multiple_txs_details_Response } from "./web3-ronin-types-txs";
import axios, {
  AxiosResponse, AxiosRequestConfig,
  AxiosProxyConfig
} from 'axios';
import { contract_detail_Response, multiple_contracts_details_Response } from "./web3-ronin-types-contracts";
import {
  collection_detail_Response,
  collection_holder_list_Response,
  collection_token_transfers_Response,
  detail_of_nft_Response, details_of_multiple_collections_Response, details_of_multiple_nfts_Response, nfts_from_collection_Response,
  number_of_collection_holdings_by_address_Response,
  owners_of_nft_Response, refresh_nfts_of_collection_async_Response, refresh_nfts_of_collection_sync_Response, token_transfers_of_nft_Response
} from "./web3-ronin-types-collections";
import {
  balance_of_address_and_contract_Response,
  balances_of_address_by_multiple_contracts_Response,
  fungible_token_balance_Response, list_of_collections_having_NFTs_Response,
  nft_list_of_address_and_contract_Response,
  owned_nfts_of_Response, search_Response, SearchCriteria,
  token_tranfers_of_address_Response
} from "./web3-ronin-types-accounts";
import { block_by_hash_timestamp_block_number_range_Response, block_by_number_Response, finalized_block_number_Response, latest_block_number_Response, transactions_by_block_number_Response } from "./web3-ronin-types-blocks";

export type ConnectionInfo = {
  url: string,
  headers?: { [key: string]: string | number },
  proxy?: AxiosProxyConfig
}

/**
 * This class implements the 
 * [Skynet Web3 API](https://docs.skymavis.com/api/web3/skynet-web-3-api)
 */
class RoninSkynetWeb3Provider {

  readonly connection: ConnectionInfo;

  constructor(connection: ConnectionInfo) {
    this.connection = connection;
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
   * @param {?number} [limit]
   * @param {?string} [cursor]
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

  protected async getRonin(urlSuffix: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.connection.url, urlSuffix);
    let _config = {
      ...config,
      headers: this.connection.headers
    }
    _config.headers!["Access-Control-Allow-Origin"] = "*";
    const result = await axios.get(url, _config);
    return result;
  }

  protected async postRonin(urlSuffix: string, data: any): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.connection.url, urlSuffix);
    let _config = {
      headers: this.connection.headers
    }
    const response = await axios.post(url, data, _config);
    return response;
  }

  /**
   * Places a call to the service, with optional limits and cursor
   *
   * @param {string} url
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<any>}
   */
  protected async getRoninLimitCursor(url: string, limit?: number, cursor?: string): Promise<any> {
    const _url = this.update_url(url, limit, cursor);
    const response = await this.getRonin(_url);
    const result = response.data;
    return result;
  }

  // Accounts

  /**
   * Search for matched account activities
   *
   * @param account address of the account to query events for.
   * @param searchCriteria When activityTypes is not empty, fromBlock and toBlock needs to be specified.
   * @returns 
   */
  async search(account: string, searchCriteria: SearchCriteria): Promise<search_Response> {
    type _SearchCriteria = { activityTypes: string[], limit?: number, cursor?: string, fromBlock?: number, toBlock?: number };
    const url = `accounts/${account}/activities/search`;
    let _searchCriteria: _SearchCriteria = {
      activityTypes: []
    };
    if (searchCriteria.activityTypes) {
      _searchCriteria.activityTypes = searchCriteria.activityTypes; // .map(value => value);
    }
    if (searchCriteria.limit) {
      _searchCriteria.limit = searchCriteria.limit;
    }
    if (searchCriteria.cursor) {
      _searchCriteria.cursor = searchCriteria.cursor;
    }
    if (searchCriteria.fromBlock && searchCriteria.toBlock) {
      _searchCriteria.fromBlock = searchCriteria.fromBlock;
      _searchCriteria.toBlock = searchCriteria.toBlock;
    }
    const response = await this.postRonin(url, _searchCriteria);
    const result = response.data;
    return result as unknown as search_Response;
  }

  /**
   * Get owned NFTs of an address
   *
   * @param {string} address The address to retrieve owned NFTs for
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<owned_nfts_of_Response>}
   */
  async owned_nfts_of(address: string, limit?: number, cursor?: string): Promise<owned_nfts_of_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/nfts`, limit, cursor);
    return result as unknown as owned_nfts_of_Response;
  }

  /**
   * Get fungible token balances of an address, including the native token (RON)
   *
   * @param {string} address
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<fungible_token_balance_Response>}
   */
  async fungible_token_balance(address: string, limit?: number, cursor?: string): Promise<fungible_token_balance_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/fungible_tokens`, limit, cursor);
    return result as unknown as fungible_token_balance_Response;
  }

  /**
   * Get list of collections having NFTs belonging to an address
   *
   * @param {string} address
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<any>}
   */
  async list_of_collections_having_NFTs(address: string, limit?: number, cursor?: string): Promise<list_of_collections_having_NFTs_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/collections`, limit, cursor);
    return result as unknown as list_of_collections_having_NFTs_Response;
  }

  /**
   * Get NFT list of an address and contract
   *
   * @param {string} address
   * @param {string} contractAddress
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<nft_list_of_address_and_contract_Response>}
   */
  async nft_list_of_address_and_contract(address: string, contractAddress: string, limit?: number, cursor?: string): Promise<nft_list_of_address_and_contract_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/contracts/${contractAddress}/tokens`, limit, cursor);
    return result as unknown as nft_list_of_address_and_contract_Response;
  }

  /**
   * Get balance of an address and contract
   *
   * @param {string} account
   * @param {string} contractAddress
   * @returns {Promise<balance_of_address_and_contract_Response>}
   */
  async balance_of_address_and_contract(account: string, contractAddress: string): Promise<balance_of_address_and_contract_Response> {
    const url = `accounts/${account}/contracts/${contractAddress}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as balance_of_address_and_contract_Response;
  }

  /**
   * Get balances of an address by multiple contracts
   *
   * @param {string} account
   * @param {string[]} contractAddresses
   * @returns {Promise<balances_of_address_by_multiple_contracts_Response>}
   */
  async balances_of_address_by_multiple_contracts(account: string, contractAddresses: string[]): Promise<balances_of_address_by_multiple_contracts_Response> {
    const url = `accounts/${account}/contracts`;
    const response = await this.postRonin(url, { contractAddresses });
    const result = response.data;
    return result as unknown as balances_of_address_by_multiple_contracts_Response;
  }

  async token_tranfers_of_address(account: string, limit?: number, cursor?: string): Promise<token_tranfers_of_address_Response> {
    const url = `accounts/${account}/tokens/transfers`;
    const result = await this.getRoninLimitCursor(url, limit, cursor);
    return result as unknown as token_tranfers_of_address_Response;
  }

  // Blocks

  /**
   * Get finalized block number
   *
   * @returns {Promise<finalized_block_number_Response>}
   */
  async finalized_block_number(): Promise<finalized_block_number_Response> {
    const response = await this.getRonin('blocks/finalized/number');
    const result = response.data;
    return result as unknown as finalized_block_number_Response;
  }

  /**
   * Get latest block number
   *
   * @returns {Promise<latest_block_number_Response>}
   */
  async latest_block_number(): Promise<latest_block_number_Response> {
    const response = await this.getRonin('blocks/latest/number');
    const result = response.data;
    return result as unknown as latest_block_number_Response;
  }

  /**
   * Get transactions by block number
   *
   * @param {number} block_number
   * @returns {Promise<transactions_by_block_number_Response>}
   */
  async transactions_by_block_number(block_number: number): Promise<transactions_by_block_number_Response> {
    // blocks/39216311/txs
    const url = `blocks/${block_number}/txs`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as transactions_by_block_number_Response;
  }

  /**
   * Get block by number
   *
   * @param {number} block_number
   * @returns {Promise<block_by_number_Response>}
   */
  async block_by_number(block_number: number): Promise<block_by_number_Response> {
    const url = `blocks/${block_number}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as block_by_number_Response;
  }

  async block_by_hash_timestamp_block_number_range(
    fromBlock: number, toBlock: number, optionalParams?: { hash?: string, timestamp?: number }
  ): Promise<block_by_hash_timestamp_block_number_range_Response> {
    let urlParams = new URLSearchParams();
    if (optionalParams) {
      if (optionalParams.hash) {
        urlParams.append('hash', optionalParams.hash);
      }
      if (optionalParams.timestamp) {
        urlParams.append('timestamp', optionalParams.timestamp.toString());
      }
    }
    urlParams.append('fromBlock', fromBlock.toString());
    urlParams.append('toBlock', toBlock.toString());
    const url = this.update_url_with_Params('blocks', urlParams);
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as block_by_hash_timestamp_block_number_range_Response;
  }

  // Collections

  /**
   * Get owners of an NFT
   *
   * @param {string} contractAddress
   * @param {number} tokenId
   * @returns {Promise<owners_of_nft_Response>}
   */
  async owners_of_nft(contractAddress: string, tokenId: number): Promise<owners_of_nft_Response> {
    const response = await this.getRonin(`collections/${contractAddress}/tokens/${tokenId}/owners`);
    const result = response.data;
    return result as unknown as owners_of_nft_Response;
  }

  /**
   * Get token transfers of an NFT
   *
   * @param contractAddress The contract address of the NFT
   * @param tokenId The token ID of the NFT
   * @param limit The number of items to get
   * @param cursor The cursor value in token_transfers_of_nft_Response.result.paging.nextCursor
   * @returns {Promise<token_transfers_of_nft_Response>}
   */
  async token_transfers_of_nft(contractAddress: string, tokenId: number, limit?: number, cursor?: string): Promise<token_transfers_of_nft_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/tokens/${tokenId}/transfers`, limit, cursor);
    return result as unknown as token_transfers_of_nft_Response;
  }

  /**
   * Get detail of an NFT
   *
   * @param contract_addr Contract address of NFT
   * @param tokenId ID of NFT token
   * @returns {Promise<detail_of_nft_Response>}
   */
  async detail_of_nft(contract_addr: string, tokenId: number): Promise<detail_of_nft_Response> {
    const url = `collections/${contract_addr}/tokens/${tokenId}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as detail_of_nft_Response;
  }

  /**
   * Refresh NFTs of a collection in synchronous manner
   *
   * @param {string} contractAddress
   * @param {number} maxWait milliseconds, when maxWait exceeds server timeout, then server timeout will be used instead
   * @param {string[]} tokenIds
   * @returns {Promise<refresh_nfts_of_collection_sync_Response>}
   */
  async refresh_nfts_of_collection_sync(contractAddress: string, maxWait: number, tokenIds: string[]): Promise<refresh_nfts_of_collection_sync_Response> {
    const url = `collections/${contractAddress}/tokens/metadata/refresh_sync`
    const response = await this.postRonin(url, {
      maxWait,
      tokenIds
    });
    const result = response.data;
    return result as unknown as refresh_nfts_of_collection_sync_Response;
  }

  /**
   * Refresh NFTs of a collection in asynchronous manner
   *
   * @async
   * @param {string} contractAddress
   * @param {string[]} tokenIds
   * @returns {Promise<any>}
   */
  async refresh_nfts_of_collection_async(contractAddress: string, tokenIds: string[]): Promise<refresh_nfts_of_collection_async_Response> {
    const url = `collections/${contractAddress}/tokens/metadata/refresh_async`;
    const response = await this.postRonin(url, {
      tokenIds
    });
    const result = response.data;
    return result as unknown as refresh_nfts_of_collection_async_Response;
  }

  /**
   * Get details of multiple NFTs
   *
   * @param {string} contractAddress
   * @param {string[]} tokenIds
   * @returns {Promise<details_of_multiple_nfts_Response>}
   */
  async details_of_multiple_nfts(contractAddress: string, tokenIds: string[]): Promise<details_of_multiple_nfts_Response> {
    const url = `collections/${contractAddress}/tokens`;
    const response = await this.postRonin(url, {
      tokenIds
    });
    const result = response.data;
    return result as unknown as details_of_multiple_nfts_Response;
  }

  /**
   * Get NFTs from a collection 
   *
   * @param contractAddress 
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<nfts_from_collection_Response>}
   */
  async nfts_from_collection(contractAddress: string, limit?: number, cursor?: string): Promise<nfts_from_collection_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/tokens`, limit, cursor);
    return result as unknown as nfts_from_collection_Response;
  }

  /**
   * Get the number of collection holdings by address
   *
   * @param contractAddress
   * @param address
   * @param address
   * @param limit
   * @param cursor
   */
  async number_of_collection_holdings_by_address(contractAddress: string, address: string, limit?: number, cursor?: string): Promise<number_of_collection_holdings_by_address_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/owners/${address}`, limit, cursor);
    return result as unknown as number_of_collection_holdings_by_address_Response;
  }

  /**
   * Get collection holder list
   *
   * @param {string} contractAddress
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<collection_holder_list_Response>}
   */
  async collection_holder_list(contractAddress: string, limit?: number, cursor?: string): Promise<collection_holder_list_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/owners`, limit, cursor);
    return result as unknown as collection_holder_list_Response;
  }

  /**
   * Get collection token transfers
   *
   * @param {string} contractAddress
   * @param {?number} [limit]
   * @param {?string} [cursor]
   * @returns {Promise<collection_token_transfers_Response>}
   */
  async collection_token_transfers(contractAddress: string, limit?: number, cursor?: string): Promise<collection_token_transfers_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/transfers`, limit, cursor);
    return result as unknown as collection_token_transfers_Response;
  }

  /**
   * Get collection detail
   *
   * @param {string} contract_addr
   * @returns {Promise<collection_detail_Response>}
   */
  async collection_detail(contract_addr: string): Promise<collection_detail_Response> {
    const url = `collections/${contract_addr}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as collection_detail_Response;
  }

  /**
   * Get details of multiple collections
   *
   * @param {string[]} contractAddresses
   * @returns {Promise<details_of_multiple_collections_Response>}
   */
  async details_of_multiple_collections(contractAddresses: string[]): Promise<details_of_multiple_collections_Response> {
    const url = `collections`;
    const response = await this.postRonin(url, {
      contractAddresses
    });
    const result = response.data;
    return result as unknown as details_of_multiple_collections_Response;
  }

  // Contracts

  /**
   * Get detail of a contract
   *
   * @param {string} contract_addr address of contract to get detail for
   * @returns {Promise<contract_detail_Response>}
   */
  async contract_detail(contract_addr: string): Promise<contract_detail_Response> {
    const response = await this.getRonin(`contracts/${contract_addr}`);
    const result = response.data;
    return result as unknown as contract_detail_Response;
  }

  /**
   * Get details of multiple contracts
   *
   * @param {string[]} contractAddresses An array of contract address to get details for
   * @returns {Promise<multiple_contracts_details_Response>}
   */
  async multiple_contracts_details(contractAddresses: string[]): Promise<multiple_contracts_details_Response> {
    const response = await this.postRonin(`contracts`, {
      contractAddresses
    });
    const result = response.data;
    return result as unknown as multiple_contracts_details_Response;
  }

  // Transactions

  /**
   * Get internal transaction of a transaction
   *
   * @param {string} txHash hash of the transaction to get
   * @returns {Promise<internal_txs_Response>}
   */
  async internal_txs(txHash: string): Promise<internal_txs_Response> {
    const response = await this.getRonin(`txs/${txHash}/internal_txs`);
    const result = response.data;
    return result as unknown as internal_txs_Response;
  }

  /**
   * Get internal transaction details of a transaction
   *
   * @async
   * @param {string} txHash hash of the transaction to get
   * @returns {Promise<internal_txs_detail_Response>}
   */
  async internal_txs_detail(txHash: string): Promise<internal_txs_detail_Response> {
    const response = await this.getRonin(`txs/${txHash}`);
    const result = response.data;
    return result as unknown as internal_txs_detail_Response;
  }

  /**
   * Get details of multiple transactions
   *
   * @async
   * @param {string[]} hashes hashes of transactions
   * @returns {Promise<multiple_txs_details_Response>}
   */
  async multiple_txs_details(hashes: string[]): Promise<multiple_txs_details_Response> {
    const response = await this.postRonin(`txs`, {
      hashes
    });
    const result = response.data;
    return result as unknown as multiple_txs_details_Response;
  }

}

export {
  RoninSkynetWeb3Provider,
  RoninSkynetWeb3Provider as SkynetProvider,
  RoninSkynetWeb3Provider as SkynetWeb3Provider
}