import { get_internal_transaction_details_of_transaction_Response, get_internal_transaction_of_transaction_Response, get_details_of_multiple_transactions_Response } from "./web3-ronin-types-txs";
import axios, {
  AxiosResponse, AxiosRequestConfig,
  AxiosProxyConfig,
  AxiosHeaders
} from 'axios';
import { get_detail_of_contract_Response, get_details_of_multiple_contracts_Response } from "./web3-ronin-types-contracts";
import {
  get_collection_detail_Response,
  get_collection_holder_list_Response,
  get_collection_token_transfers_Response,
  get_detail_of_nft_Response, get_details_of_multiple_collections_Response, get_details_of_multiple_nfts_Response, get_nfts_from_collection_Response,
  get_number_of_collection_holdings_by_address_Response,
  get_owners_of_nft_Response, refresh_nfts_of_collection_async_Response, refresh_nfts_of_collection_sync_Response, get_token_transfers_of_nft_Response
} from "./web3-ronin-types-collections";
import {
  get_balance_of_address_and_contract_Response,
  get_balances_of_address_by_multiple_contracts_Response,
  get_fungible_token_balance_Response, get_internal_txs_transfers_Response, get_list_of_collections_having_NFTs_Response,
  get_nft_list_of_address_and_contract_Response,
  get_owned_nfts_of_address_Response, search_Response, SearchCriteria,
  get_token_tranfers_of_address_Response,
  get_token_tranfers_of_address_with_contract_Response,
  get_transactions_of_address_Response,
  
} from "./web3-ronin-types-accounts";
import { get_block_by_hash_timestamp_block_number_range_Response, get_block_by_number_Response, get_finalized_block_number_Response, get_latest_block_number_Response, OptionalParams, get_transactions_by_block_number_Response } from "./web3-ronin-types-blocks";
import { URL_RONIN_SKYNET_RPC } from "./web3-ronin-consts";
import { EEmptyHeaders, EEmptyUrl, ENoApiKey, ENoHeaders } from "./web3-ronin-types-errors";


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

/**
 * This class implements the 
 * {@link https://docs.skymavis.com/api/web3/skynet-web-3-api Skynet Web3 API}.  
 * 
 * To create a RoninSkynetWeb3Provider quickly, call {@link createSkyNetProvider} with the API key.  
 * To customize headers, call the RoninSkynetWeb3Provider constructor with a tailored {@link ConnectionInfo} parameter.
 */
class RoninSkynetWeb3Provider {

  readonly #connection: ConnectionInfo;

  /**
   * Creates an instance of RoninSkynetWeb3Provider, see documentation in the docs directory. 
   *
   * @throws {@link EEmptyHeaders} when headers are present, but empty
   * @throws {@link EEmptyUrl} when URL is empty
   * @throws {@link ENoApiKey} when X-API-KEY is absent
   * @throws {@link ENoHeaders} when headers are absent
   *
   * @param {ConnectionInfo} connection The URL to use, headers, etc
   */
  constructor(connection: ConnectionInfo) {
    this.#connection = connection;
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
    this.#connection.headers!["Connection"] = "Keep-Alive";
    this.#connection.headers!["Keep-Alive"] = "timeout=5, max=1000";
    this.#connection.headers!["Access-Control-Allow-Origin"] = "*";
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

  protected async getRonin(urlSuffix: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.#connection.url, urlSuffix);
    let _config = {
      ...config,
      headers: this.#connection.headers
    };
    const result = await axios.get(url, _config);
    return result;
  }

  protected async postRonin(urlSuffix: string, data: any): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.#connection.url, urlSuffix);
    let _config = {
      headers: this.#connection.headers
    }
    const result = await axios.post(url, data, _config);
    return result;
  }

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

  // Accounts

  /**
   * Search for matched account activities
   *
   * @async
   * @param account address of the account to query events for.
   * @param searchCriteria When activityTypes is not empty, fromBlock and toBlock needs to be specified.
   * @returns {Promise<search_Response>}
   * @category Accounts
   */
  async search(account: string, searchCriteria?: SearchCriteria): Promise<search_Response> {
    type _SearchCriteria = { activityTypes: string[], limit?: number, cursor?: string, fromBlock?: number, toBlock?: number };
    const url = `accounts/${account}/activities/search`;
    let _searchCriteria: _SearchCriteria = {
      activityTypes: searchCriteria?.activityTypes || []
    };
    if (searchCriteria?.limit) {
      _searchCriteria.limit = searchCriteria.limit;
    }
    if (searchCriteria?.cursor) {
      _searchCriteria.cursor = searchCriteria.cursor;
    }
    if (searchCriteria?.fromBlock && searchCriteria.toBlock) {
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
   * This API allows you to retrieve a list of NFTs owned by a wallet address.
   *
   * @async
   * @param {string} address owner address - The address to retrieve owned NFTs for
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_owned_nfts_of_address_Response>}
   * @category Accounts
   */
  async get_owned_nfts_of_address(address: string, limit?: number, cursor?: string): Promise<get_owned_nfts_of_address_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/nfts`, limit, cursor);
    return result as unknown as get_owned_nfts_of_address_Response;
  }

  /**
   * Get fungible token balances of an address, including the native token (RON)
   *
   * @async
   * @param {string} address
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_fungible_token_balance_Response>}
   * @category Accounts
   */
  async get_fungible_token_balance(address: string, limit?: number, cursor?: string): Promise<get_fungible_token_balance_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/fungible_tokens`, limit, cursor);
    return result as unknown as get_fungible_token_balance_Response;
  }

  /**
   * Get list of collections having NFTs belonging to an address
   *
   * @async
   * @param {string} address
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_list_of_collections_having_NFTs_Response>}
   * @category Accounts
   */
  async get_list_of_collections_having_NFTs(address: string, limit?: number, cursor?: string): Promise<get_list_of_collections_having_NFTs_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/collections`, limit, cursor);
    return result as unknown as get_list_of_collections_having_NFTs_Response;
  }

  /**
   * Get NFT list of an address and contract
   *
   * @async
   * @param {string} address
   * @param {string} contractAddress
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_nft_list_of_address_and_contract_Response>}
   * @category Accounts
   */
  async get_nft_list_of_address_and_contract(address: string, contractAddress: string, limit?: number, cursor?: string): Promise<get_nft_list_of_address_and_contract_Response> {
    const result = await this.getRoninLimitCursor(`accounts/${address}/contracts/${contractAddress}/tokens`, limit, cursor);
    return result as unknown as get_nft_list_of_address_and_contract_Response;
  }

  /**
   * Get balance of an address and contract
   *
   * @async
   * @param {string} account
   * @param {string} contractAddress
   * @returns {Promise<get_balance_of_address_and_contract_Response>}
   * @category Accounts
   */
  async get_balance_of_address_and_contract(account: string, contractAddress: string): Promise<get_balance_of_address_and_contract_Response> {
    const url = `accounts/${account}/contracts/${contractAddress}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as get_balance_of_address_and_contract_Response;
  }

  /**
   * Get balances of an address by multiple contracts
   *
   * @async
   * @param {string} account
   * @param {string[]} contractAddresses
   * @returns {Promise<get_balances_of_address_by_multiple_contracts_Response>}
   * @category Accounts
   */
  async get_balances_of_address_by_multiple_contracts(account: string, contractAddresses: string[]): Promise<get_balances_of_address_by_multiple_contracts_Response> {
    const url = `accounts/${account}/contracts`;
    const response = await this.postRonin(url, { contractAddresses });
    const result = response.data;
    return result as unknown as get_balances_of_address_by_multiple_contracts_Response;
  }

  /**
   * Get token transfers of an address
   *
   * @async
   * @param {string} account
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_token_tranfers_of_address_Response>}
   * @category Accounts
   */
  async get_token_tranfers_of_address(account: string, limit?: number, cursor?: string): Promise<get_token_tranfers_of_address_Response> {
    const url = `accounts/${account}/tokens/transfers`;
    const result = await this.getRoninLimitCursor(url, limit, cursor);
    return result as unknown as get_token_tranfers_of_address_Response;
  }

  /**
   * Get token transfers of an address with a contract
   *
   * Get all token transfers of a wallet address and a contract
   *
   * This API offers a more targeted way to track token movements between a specific wallet and a particular smart contract. It is ideal for platforms, traders, and developers who need detailed insights into how tokens are being transferred between a wallet and a specific contract, such as in staking, liquidity pools, or token sale contracts. For NFT and token holders, it allows precise tracking of interactions with a contract, ensuring transparency and control over assets. DeFi projects and investors can use this API to analyze contract-specific transactions like token swaps, staking, or rewards distributed from the contract to the wallet. By narrowing the focus to a single wallet-contract relationship, this API simplifies auditing and enhances security checks, helping users spot patterns or irregularities in token flows. I t’s an essential tool for those who need contract-specific token transfer data without wading through the noise of all wallet transactions
   *
   * @async
   * @param {string} account wallet address
   * @param {string} contractAddress contract address
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_token_tranfers_of_address_with_contract_Response>}
   * @category Accounts
   */
  async get_token_tranfers_of_address_with_contract(account: string, contractAddress: string, limit?: number, cursor?: string): Promise<get_token_tranfers_of_address_with_contract_Response> {
    const url = `accounts/${account}/tokens/${contractAddress}/transfers`;
    const result = await this.getRoninLimitCursor(url, limit, cursor);
    return result as unknown as get_token_tranfers_of_address_with_contract_Response;
  }

  /**
   * Get transactions of an address
   *
   * Get all transactions of a wallet address
   *
   * This API provides comprehensive access to every blockchain transaction associated with a specific wallet address. Unlike token transfers, which are derived from event logs, this API returns raw blockchain transactions, including contract interactions, token approvals, and transfers. This is invaluable for developers, investors, and platforms needing a full overview of a wallet's blockchain activity. For DeFi users, it offers transparency into all on-chain actions, whether interacting with smart contracts or moving assets between wallets. NFT collectors and creators can use this API to track every significant transaction related to their assets, such as minting or contract deployments. By providing a complete history of blockchain transactions, this API is essential for auditing, monitoring, and managing wallets, helping users maintain full visibility into their on-chain behavior, including interactions that don't necessarily involve token transfers.
   *
   * A blockchain transaction relates to a wallet through the from, to, and contractAddress fields. The from field indicates the sender; if it matches the wallet address, it means the wallet initiated the transaction, such as sending tokens or RON. The to field represents the recipient; if this matches the wallet, it signifies that the wallet received assets. The contractAddress specifies any smart contract involved in the transaction. If this address matches a specific contract the wallet interacts with, it shows the relationship between the wallet and that contract.
   *
   * @async
   * @param {string} account
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_transactions_of_address_Response>}
   * @category Accounts
   */
  async get_transactions_of_address(account: string, limit?: number, cursor?: string): Promise<get_transactions_of_address_Response> {
  // accounts/0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3/txs
    const url = `accounts/${account}/txs`;
    const result = await this.getRoninLimitCursor(url, limit, cursor);
    return result as unknown as get_transactions_of_address_Response;
  }

  /**
   * Get internal tx transfers
   *
   * Get all RON transfers via internal transactions of a wallet address
   *
   * This API provides a focused view of internal transactions that may indicate potential money movement associated with a specific wallet. This API exclusively returns internal transactions where the Ethereum Virtual Machine (EVM) OpCode is "CALL" signaling that the transaction likely involves a call to another contract, which may result in a transfer of funds.
   *
   * The API filters results to include only those internal transactions where either the from or to field matches the provided wallet address. This allows users to efficiently monitor all relevant internal activity linked to their wallet, helping them track significant interactions, such as fund movements or contract engagements.
   *
   * By focusing on potential money movements, this API is invaluable for users looking to gain insights into their on-chain behavior and manage their assets effectively.
   *
   * @async
   * @param {string} account
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_internal_txs_transfers_Response>}
   * @category Accounts
   */
  async get_internal_txs_transfers(account: string, limit?: number, cursor?: string): Promise<get_internal_txs_transfers_Response> {
      const url = `accounts/${account}/internal_txs/transfers`;
      const result = await this.getRoninLimitCursor(url, limit, cursor);
      return result as unknown as get_internal_txs_transfers_Response;
  }

  // Blocks

  /**
   * Get finalized block number
   *
   * @async
   * @returns {Promise<get_finalized_block_number_Response>}
   * @category Blocks
   */
  async get_finalized_block_number(): Promise<get_finalized_block_number_Response> {
    const response = await this.getRonin('blocks/finalized/number');
    const result = response.data;
    return result as unknown as get_finalized_block_number_Response;
  }

  /**
   * Get latest block number
   *
   * @async
   * @returns {Promise<get_latest_block_number_Response>}
   * @category Blocks
   */
  async get_latest_block_number(): Promise<get_latest_block_number_Response> {
    const response = await this.getRonin('blocks/latest/number');
    const result = response.data;
    return result as unknown as get_latest_block_number_Response;
  }

  /**
   * Get transactions by block number
   *
   * @async
   * @param {number} block_number
   * @returns {Promise<get_transactions_by_block_number_Response>}
   * @category Blocks
   */
  async get_transactions_by_block_number(block_number: number): Promise<get_transactions_by_block_number_Response> {
    // blocks/39216311/txs
    const url = `blocks/${block_number}/txs`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as get_transactions_by_block_number_Response;
  }

  /**
   * Get block by number
   *
   * @async
   * @param {number} block_number
   * @returns {Promise<get_block_by_number_Response>}
   * @category Blocks
   */
  async get_block_by_number(block_number: number): Promise<get_block_by_number_Response> {
    const url = `blocks/${block_number}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as get_block_by_number_Response;
  }

  /**
   * Get block by hash, timestamp, block number range
   *
   * @async
   * @param {number} fromBlock
   * @param {number} toBlock
   * @param {?OptionalParams} [optionalParams] get the block where its life span covers the input timestamp and/or hash
   * @returns {Promise<get_block_by_hash_timestamp_block_number_range_Response>}
   * @category Blocks
   */
  async get_block_by_hash_timestamp_block_number_range(
    fromBlock: number, toBlock: number, optionalParams?: OptionalParams
  ): Promise<get_block_by_hash_timestamp_block_number_range_Response> {
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
    return result as unknown as get_block_by_hash_timestamp_block_number_range_Response;
  }

  // Collections

  /**
   * Get owners of an NFT
   *
   * The most efficient way to access NFT ownership data. Whether you're building a marketplace, verifying digital assets, or analyzing trends in the NFT space, our API provides a streamlined solution to gather ownership information faster and more reliably than traditional.

You can travel through the whole list of owners in case an NFT has more than one owner.
   *
   * @async
   * @param {string} contractAddress
   * @param {number} tokenId
   * @returns {Promise<get_owners_of_nft_Response>}
   * @category Collections
   */
  async get_owners_of_nft(contractAddress: string, tokenId: number): Promise<get_owners_of_nft_Response> {
    const response = await this.getRonin(`collections/${contractAddress}/tokens/${tokenId}/owners`);
    const result = response.data;
    return result as unknown as get_owners_of_nft_Response;
  }

  /**
   * Get token transfers of an NFT
   *
   * Get all token transfers of an NFT
   *
   * This API is a powerful tool to track the complete transfer history of any NFT. This API is invaluable for NFT creators, collectors, and marketplaces, providing detailed insights into every transaction an NFT has gone through. For collectors and investors, it enables easy tracking of an NFT’s provenance. NFT game studios and creators can also benefit from this API to monitor the distribution and movement of their assets across different users.
   *
   * @async
   * @param contractAddress collection address
   * @param tokenId NFT ID
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_token_transfers_of_nft_Response>}
   * @category Collections
   */
  async get_token_transfers_of_nft(contractAddress: string, tokenId: number, limit?: number, cursor?: string): Promise<get_token_transfers_of_nft_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/tokens/${tokenId}/transfers`, limit, cursor);
    return result as unknown as get_token_transfers_of_nft_Response;
  }

  /**
   * Get detail of an NFT
   *
   * This API allows you to retrieve details of one or more NFTs their identities
   *
   * @async
   * @param contractAddress collection address - Contract address of NFT
   * @param tokenId ID of NFT token
   * @returns {Promise<get_detail_of_nft_Response>}
   * @category Collections
   */
  async get_detail_of_nft(contractAddress: string, tokenId: number): Promise<get_detail_of_nft_Response> {
    const url = `collections/${contractAddress}/tokens/${tokenId}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as get_detail_of_nft_Response;
  }

  /**
   * Refresh NFTs of a collection in synchronous manner
   *
   * By using this API, users have to wait until the API complete the refreshing process, tokenIds list can be specified in the request body as well as the maxWait duration in milliseconds (the maximum amount of wait time this call can accept). Without its presence, the API treat it as server default timeout of 10 seconds.

In the response, there are two lists, successes and failures tokenIds, failure reasons can vary and not be exposed. If an NFT keeps failing for a long time, you'd better contact developer support.
   *
   * @async
   * @param {string} contractAddress
   * @param {string[]} tokenIds
   * @param {number} maxWait milliseconds, when maxWait exceeds server timeout, then server timeout will be used instead
   * @returns {Promise<refresh_nfts_of_collection_sync_Response>}
   * @category Collections
   */
  async refresh_nfts_of_collection_sync(contractAddress: string, tokenIds: string[], maxWait: number): Promise<refresh_nfts_of_collection_sync_Response> {
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
   * By using this API, users don't have to wait until the API complete the refreshing process. The API will return immediately after putting tokenIds to the background queue successfully, results of refreshing operation are not notified in any channel. You should call the {@link get_detail_of_nft | NFT details API} to verify refresh results.
   *
   * @async
   * @param {string} contractAddress
   * @param {string[]} tokenIds
   * @returns {Promise<refresh_nfts_of_collection_async_Response>}
   * @category Collections
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
   * @async
   * @param {string} contractAddress
   * @param {string[]} tokenIds
   * @returns {Promise<get_details_of_multiple_nfts_Response>}
   * @category Collections
   */
  async get_details_of_multiple_nfts(contractAddress: string, tokenIds: string[]): Promise<get_details_of_multiple_nfts_Response> {
    const url = `collections/${contractAddress}/tokens`;
    const response = await this.postRonin(url, {
      tokenIds
    });
    const result = response.data;
    return result as unknown as get_details_of_multiple_nfts_Response;
  }

  /**
   * Get NFTs from a collection
   *
   * 
    This API is a must-have for game studios looking to efficiently manage their on-chain assets. With one simple request, game developers can access all NFTs in as collection.
    Game studios often deal with large volumes of NFTs, from in-game items to collectibles. This API provides an easy way to retrieve and organize all assets in a collection, helping teams focus on game development, not blockchain complexity.
    Ensure your NFT-based assets are accurately tracked and managed on-chain, providing transparency and security for both the studio and its players.
    No need for deep blockchain knowledge—this API handles the heavy lifting.
   *
   * @async
   * @param contractAddress 
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_nfts_from_collection_Response>}
   * @category Collections
   */
  async get_nfts_from_collection(contractAddress: string, limit?: number, cursor?: string): Promise<get_nfts_from_collection_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/tokens`, limit, cursor);
    return result as unknown as get_nfts_from_collection_Response;
  }

  /**
   * Get the number of collection holdings by address
   *
   * @async
   * @param {string} contractAddress The address to get the number of collection holders for
   * @param {string} address The account address
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_number_of_collection_holdings_by_address_Response>}
   * @category Collections
   */
  async get_number_of_collection_holdings_by_address(contractAddress: string, address: string, limit?: number, cursor?: string): Promise<get_number_of_collection_holdings_by_address_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/owners/${address}`, limit, cursor);
    return result as unknown as get_number_of_collection_holdings_by_address_Response;
  }

  /**
   * Get collection holder list
   *
   * Get all owners of a collection
   *
   * This API allows you to retrieve a list of wallet addresses that own NFTs from a specific collection along with NFTs amounts they own.
   *
   * @async
   * @param {string} contractAddress The address to get collection holder list for
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_collection_holder_list_Response>}
   * @category Collections
   */
  async get_collection_holder_list(contractAddress: string, limit?: number, cursor?: string): Promise<get_collection_holder_list_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/owners`, limit, cursor);
    return result as unknown as get_collection_holder_list_Response;
  }

  /**
   * Get collection token transfers
   *
   * @async
   * @param {string} contractAddress The address to get token transfers for
   * @param {?number} [limit] how many items can be return in a single response, maximum 200
   * @param {?string} [cursor] the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results
   * @returns {Promise<get_collection_token_transfers_Response>}
   * @category Collections
   */
  async get_collection_token_transfers(contractAddress: string, limit?: number, cursor?: string): Promise<get_collection_token_transfers_Response> {
    const result = await this.getRoninLimitCursor(`collections/${contractAddress}/transfers`, limit, cursor);
    return result as unknown as get_collection_token_transfers_Response;
  }

  /**
   * Get collection detail
   *
   * @async
   * @param {string} contract_addr The address to get collection detail for
   * @returns {Promise<get_collection_detail_Response>}
   * @category Collections
   */
  async get_collection_detail(contract_addr: string): Promise<get_collection_detail_Response> {
    const url = `collections/${contract_addr}`;
    const response = await this.getRonin(url);
    const result = response.data;
    return result as unknown as get_collection_detail_Response;
  }

  /**
   * Get details of multiple collections
   *
   * @async
   * @param {string[]} contractAddresses An array of addresses
   * @returns {Promise<get_details_of_multiple_collections_Response>}
   * @category Collections
   */
  async get_details_of_multiple_collections(contractAddresses: string[]): Promise<get_details_of_multiple_collections_Response> {
    const url = `collections`;
    const response = await this.postRonin(url, {
      contractAddresses
    });
    const result = response.data;
    return result as unknown as get_details_of_multiple_collections_Response;
  }

  // Contracts

  /**
   * Get detail of a contract
   *
   * @async
   * @param {string} contract_addr address of contract to get detail for
   * @returns {Promise<get_detail_of_contract_Response>}
   * @category Contracts
   */
  async get_detail_of_contract(contract_addr: string): Promise<get_detail_of_contract_Response> {
    const response = await this.getRonin(`contracts/${contract_addr}`);
    const result = response.data;
    return result as unknown as get_detail_of_contract_Response;
  }

  /**
   * Get details of multiple contracts
   *
   * @async
   * @param {string[]} contractAddresses An array of contract address to get details for
   * @returns {Promise<get_details_of_multiple_contracts_Response>}
   * @category Contracts
   */
  async get_details_of_multiple_contracts(contractAddresses: string[]): Promise<get_details_of_multiple_contracts_Response> {
    const response = await this.postRonin(`contracts`, {
      contractAddresses
    });
    const result = response.data;
    return result as unknown as get_details_of_multiple_contracts_Response;
  }

  // Transactions

  /**
   * Get internal transaction of a transaction
   *
   * @async
   * @param {string} txHash hash of the transaction to get
   * @returns {Promise<get_internal_transaction_of_transaction_Response>}
   * @category Transactions
   */
  async get_internal_transaction_of_transaction(txHash: string): Promise<get_internal_transaction_of_transaction_Response> {
    const response = await this.getRonin(`txs/${txHash}/internal_txs`);
    const result = response.data;
    return result as unknown as get_internal_transaction_of_transaction_Response;
  }

  /**
   * Get internal transaction details of a transaction
   *
   * @async
   * @param {string} txHash hash of the transaction to get
   * @returns {Promise<get_internal_transaction_details_of_transaction_Response>}
   * @category Transactions
   */
  async get_internal_transaction_details_of_transaction(txHash: string): Promise<get_internal_transaction_details_of_transaction_Response> {
    const response = await this.getRonin(`txs/${txHash}`);
    const result = response.data;
    return result as unknown as get_internal_transaction_details_of_transaction_Response;
  }

  /**
   * Get details of multiple transactions
   *
   * @async
   * @param {string[]} hashes hashes of transactions
   * @returns {Promise<get_details_of_multiple_transactions_Response>}
   * @category Transactions
   */
  async get_details_of_multiple_transactions(hashes: string[]): Promise<get_details_of_multiple_transactions_Response> {
    const response = await this.postRonin(`txs`, {
      hashes
    });
    const result = response.data;
    return result as unknown as get_details_of_multiple_transactions_Response;
  }

}

/**
 * Shortcut to creating a RoninSkynetWeb3Provider given the API key
 *
 * @async
 * @param {string} X_API_KEY API key
 * @param {?string} [url] The URL to use for the provider. If not given, uses {@link URL_RONIN_SKYNET_RPC}
 * @returns {RoninSkynetWeb3Provider}
 */
function createSkyNetProvider(X_API_KEY: string, url?: string): RoninSkynetWeb3Provider {
  const connection = { url: url || URL_RONIN_SKYNET_RPC, headers: { "X-API-KEY": X_API_KEY } };
  const result = new RoninSkynetWeb3Provider(connection);
  return result;
}

export {
  ConnectionInfo,
  RoninSkynetWeb3Provider,
  RoninSkynetWeb3Provider as SkynetProvider,
  RoninSkynetWeb3Provider as SkynetWeb3Provider,
  createSkyNetProvider
}