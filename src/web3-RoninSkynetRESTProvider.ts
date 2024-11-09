import axios, {
  AxiosResponse, AxiosRequestConfig,
} from 'axios';
import { CustomSkynetProvider } from './web3-roninCustomSkynetProvider';
import { URL_RONIN_SKYNET_REST } from './web3-ronin-consts';
import { isErrorResponse, isRESTError } from './web3-ronin-utils';
import { EErrorCodeMessage } from './web3-ronin-types-errors';
import {
  get_Account_Activities_Request_Body,
  get_Account_Activities_Response,
  get_account_info_by_address_Response,
  get_blocks_Param,
  get_blocks_Response,
  get_contract_by_address_Response,
  get_the_finalized_block_number_Response,
  get_the_latest_block_number_Response,
  search_wealthiest_accounts_Response
} from './web3-ronin-types-rest-accounts';
import {
  get_multiple_NFTs_Query,
  get_multiple_NFTs_Response,
  get_summary_for_individual_NFT_Response,
  get_summary_for_multiple_NFTs_Query,
  get_summary_for_multiple_NFTs_Response,
  search_for_matched_NFTs_Query,
  search_for_matched_NFTs_Response,
  search_for_NFTs_by_metadata_attributes_Query,
  search_for_NFTs_by_metadata_attributes_Response
} from './web3-ronin-types-rest-nfts';
import {
  get_circulating_RON_supply_Response,
  get_circulating_token_supply_Response,
  get_total_RON_supply_Response,
  get_total_token_supply_Response, query_RON_supply_Query, query_token_supply_Query
} from './web3-ronin-types-rest-supplies';
import {
  get_overview_for_tokens_Response,
  get_token_by_address_Response,
  get_token_top_holders_Response,
  search_tokens_Query,
  search_tokens_Response
} from './web3-ronin-types-rest-tokens';
import {
  get_summary_of_token_balances_Query,
  get_summary_of_token_balances_Response,
  search_token_balances_Query,
  search_token_balances_Response
} from './web3-ronin-types-rest-token-balances';
import { 
  list_token_transfers_by_timestamp_Response, 
  list_token_transfers_by_transaction_hash_Response 
} from './web3-ronin-types-rest-token-transfers';
import { 
  get_daily_count_of_transactions_Response,
  get_multiple_transactions_by_hashes_Response,
  get_transaction_by_hash_Response,
  list_transactions_Response 
} from './web3-ronin-types-rest-transactions';

/**
 * This class implements the 
 * {@link https://docs.skymavis.com/api/ronin-rest/skynet-rest-api Skynet REST API}.  
 * 
 * To create a SkynetRESTProvider quickly, call {@link createSkynetRESTProvider} with the API key.  
 * To customize headers, call the SkynetRESTProvider constructor with a tailored {@link ConnectionInfo} parameter.
 */
class SkynetRESTProvider extends CustomSkynetProvider {

  protected update_url(url: string, limit?: number, offset?: string | number): string {
    const urlParams = new URLSearchParams();
    if (limit) {
      urlParams.append('limit', limit.toString());
    }
    if (offset) {
      urlParams.append('offset', offset.toString());
    }
    const result = this.update_url_with_Params(url, urlParams);
    return result;
  }

  /**
   * Sends HTTP GET message to the service provider
   *
   * @protected
   * @async
   * @param {string} urlSuffix
   * @param {?AxiosRequestConfig} [config]
   * @returns {Promise<AxiosResponse<any, any>>}
   * @throws {@link EErrorCodeMessage}
   */
  protected async getRonin(urlSuffix: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.connection.url, urlSuffix);
    let _config = {
      ...config,
      headers: this.connection.headers
    };
    let result: AxiosResponse<any, any>;
    try {
      result = await axios.get(url, _config);
    } catch (e) {
      if (isErrorResponse(e)) {
        const errorCode = e.response.data.errorCode;
        const message = e.response.data.message;
        throw new EErrorCodeMessage(errorCode, message);
      }
      throw e;
    }
    // @ts-ignore
    return result;
  }

  /**
   * Sends HTTP POST message to the service provider
   *
   * @protected
   * @async
   * @param {string} urlSuffix
   * @param {*} data
   * @returns {Promise<AxiosResponse<any, any>>}
   * @throws {@link EErrorCodeMessage}
   */
  protected async postRonin(urlSuffix: string, data: any): Promise<AxiosResponse<any, any>> {
    const url = this.concatUrl(this.connection.url, urlSuffix);
    let _config = {
      headers: this.connection.headers
    }
    let result: AxiosResponse<any, any>;
    try {
      result = await axios.post(url, data, _config);
    } catch (e) {
      if (isRESTError(e)) {
        const errorCode = e.response.status;
        const message = e.response.statusText;
        throw new EErrorCodeMessage(errorCode, message);
      } else if (isErrorResponse(e)) {
        const errorCode = e.response.data.errorCode;
        const message = e.response.data.message;
        throw new EErrorCodeMessage(errorCode, message);
      }
      throw e;
    }
    // @ts-ignore
    return result;
  }

  /**
   * Get account activities on Ronin chain
   *
   * Get an account's activities on the Ronin chain (Transfers, Approvals, Mint, Burn, Marketplace, Deposit, Staking, Add/Remove Liquidity).
   *
   * @async
   * @param {string} account_addr
   * @param {get_Account_Activities_Request_Body} body
   * @returns {Promise<get_Account_Activities_Response>}
   * @category Accounts
   */
  async get_Account_Activities(account_addr: string, body: get_Account_Activities_Request_Body): Promise<get_Account_Activities_Response> {
    const urlSuffix = `accounts/${account_addr}/activities`;
    const response = await this.postRonin(urlSuffix, body);
    const result = response.data;
    return result as unknown as get_Account_Activities_Response;
  }

  /**
   * Get account info by address
   *
   * Get an account's information by its address.
   *
   * @async
   * @param {string} account_addr
   * @returns {Promise<get_account_info_by_address_Response>}
   * @category Accounts
   */
  async get_account_info_by_address(account_addr: string): Promise<get_account_info_by_address_Response> {
    const urlSuffix = `accounts/${account_addr}`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_account_info_by_address_Response;
  }

  /**
   * Search wealthiest accounts
   *
   * Get the wealthiest accounts.
   *
   * @async
   * @param {?number} [limit]
   * @param {?string} [offset]
   * @returns {Promise<search_wealthiest_accounts_Response>}
   * @category Accounts
   */
  async search_wealthiest_accounts(limit?: number, offset?: string): Promise<search_wealthiest_accounts_Response> {
    const urlSuffix = "accounts/wealthiest";
    const result = await this.getRoninLimitCursor(urlSuffix, limit, offset);
    return result as unknown as search_wealthiest_accounts_Response;
  }

  /**
   * Get blocks
   *
   * If block_hash is present, always search by block_hash first. The block_number value must be positive. 
   * If there is no block_hash or block_number present, the API searches for all blocks. 
   * The limit and offset parameters are used to paginate results.
   *
   * @async
   * @param {?get_blocks_Param} [params] optional query parameters
   * @returns {Promise<get_blocks_Response>}
   * @category Blocks
   */
  async get_blocks(params?: get_blocks_Param): Promise<get_blocks_Response> {
    const searchParams = new URLSearchParams();
    if (params) {
      if (params.block_hash) {
        searchParams.append("block_hash", params.block_hash);
      }
      if (params.block_number) {
        searchParams.append("block_number", params.block_number.toString());
      }
    }
    const urlSuffix = this.update_url_with_Params("blocks", searchParams);
    const result = await this.getRoninLimitCursor(urlSuffix, params?.limit, params?.offset?.toString());
    return result as unknown as get_blocks_Response;
  }

  /**
   * Get the finalized block number
   *
   * Returns the most recent block that has been confirmed as final and that cannot be reverted, even by a reorg.
   *
   * @async
   * @returns {Promise<get_the_finalized_block_number_Response>}
   * @category Block
   */
  async get_the_finalized_block_number(): Promise<get_the_finalized_block_number_Response> {
    const urlSuffix = "blocks/finalized";
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_the_finalized_block_number_Response;
  }

  /**
   * Get the latest block number
   *
   * Returns the most recent block that has been added to the chain, but that can still be reverted by a reorg.
   *
   * @async
   * @returns {Promise<get_the_finalized_block_number_Response>}
   * @category Block
   */
  async get_the_latest_block_number(): Promise<get_the_latest_block_number_Response> {
    const urlSuffix = "blocks/latest";
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_the_latest_block_number_Response;
  }

  /**
   * Get contract by address
   *
   * Get a contract by its address.
   *
   * @async
   * @param {string} contractAddr
   * @returns {Promise<get_contract_by_address_Response>}
   * @category Contracts
   */
  async get_contract_by_address(contractAddr: string): Promise<get_contract_by_address_Response> {
    const urlSuffix = `contracts/${contractAddr}`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_contract_by_address_Response;
  }

  /**
   * Get summary for individual NFT
   *
   * Get summarized information for an individual NFT.
   *
   * @async
   * @param {string} contractAddr
   * @param {number} tokenId
   * @returns {Promise<get_summary_for_individual_NFT_Response>}
   * @category NFTs
   */
  async get_summary_for_individual_NFT(contractAddr: string, tokenId: number): Promise<get_summary_for_individual_NFT_Response> {
    const urlSuffix = `nfts/${contractAddr}/${tokenId}/summary`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_summary_for_individual_NFT_Response;
  }

  /**
   * Get multiple NFTs
   *
   * Get multiple NFTs that matched the specified IDs.
   *
   * @async
   * @param {get_multiple_NFTs_Query} query
   * @returns {Promise<get_multiple_NFTs_Response>}
   * @category NFTs
   */
  async get_multiple_NFTs(query: get_multiple_NFTs_Query): Promise<get_multiple_NFTs_Response> {
    const urlSuffix = "nfts/ids";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as get_multiple_NFTs_Response;
  }

  /**
   * DSearch for NFTs by metadata attributes
   *
   * Search for NFTs that match the specified metadata attributes.
   *
   * @async
   * @param {search_for_NFTs_by_metadata_attributes_Query} query
   * @returns {Promise<search_for_NFTs_by_metadata_attributes_Response>}
   * @category NFTs
   */
  async search_for_NFTs_by_metadata_attributes(query: search_for_NFTs_by_metadata_attributes_Query): Promise<search_for_NFTs_by_metadata_attributes_Response> {
    const urlSuffix = "nfts/metadata/search";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as search_for_NFTs_by_metadata_attributes_Response;
  }

  /**
   * Search for matched NFTs
   *
   * Search for NFTs that matched the specified search parameters.
   *
   * @async
   * @param {search_for_matched_NFTs_Query} query
   * @returns {Promise<search_for_matched_NFTs_Response>}
   * @category NFTs
   */
  async search_for_matched_NFTs(query: search_for_matched_NFTs_Query): Promise<search_for_matched_NFTs_Response> {
    const urlSuffix = "nfts/search";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as search_for_matched_NFTs_Response;
  }

  /**
   * Get summary for multiple NFTs
   *
   * Get summarized information for multiple NFTs.
   *
   * @async
   * @param {get_summary_for_multiple_NFTs_Query} query
   * @returns {Promise<get_summary_for_multiple_NFTs_Response>}
   * @category NFTs
   */
  async get_summary_for_multiple_NFTs(query: get_summary_for_multiple_NFTs_Query): Promise<get_summary_for_multiple_NFTs_Response> {
    const urlSuffix = "nfts/summaries/ids";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as get_summary_for_multiple_NFTs_Response;
  }

  /**
   * Get circulating token supply
   *
   * Get the circulating supply for a token.
   *
   * @async
   * @param {string} symbol
   * @returns {Promise<get_circulating_token_supply_Response>}
   * @category Supplies
   */
  async get_circulating_token_supply(symbol: string): Promise<get_circulating_token_supply_Response> {
    const urlSuffix = `supplies/${symbol}/circulating`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_circulating_token_supply_Response;
  }

  /**
   * Query token supply
   *
   * Get the total supply or circulating supply for the specified token.
   *
   * @async
   * @param {string} symbol
   * @param {query_token_supply_Query} supply_type
   * @returns {unknown}
   * @category Supplies
   */
  async query_token_supply(symbol: string, supply_type: query_token_supply_Query) {
    const urlParams = new URLSearchParams();
    urlParams.append("q", supply_type);
    const urlSuffix = `supplies/${symbol}/query?` + urlParams.toString();
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_circulating_token_supply_Response;
  }

  /**
   * Get total token supply
   *
   * Get the total supply for the specified token.
   *
   * @async
   * @param {string} symbol
   * @returns {Promise<get_total_token_supply_Response>}
   * @category Supplies
   */
  async get_total_token_supply(symbol: string): Promise<get_total_token_supply_Response> {
    const urlSuffix = `supplies/${symbol}/total`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_total_token_supply_Response;
  }

  /**
   * Get circulating RON supply
   *
   * Get ronin circulating supply for RON. When getting by date range, both param from and to must be present, from and to must follow date format YYYY-MM-DD, for example '2023-10-29'. Max difference allowed between from and to 100 days.
   *
   * @async
   * @param {?string} [from] YYYY-MM-DD
   * @param {?string} [to] YYYY-MM-DD
   * @returns {Promise<get_circulating_RON_supply_Response>}
   * @category Supplies
   */
  async get_circulating_RON_supply(from?: string, to?: string): Promise<get_circulating_RON_supply_Response> {
    let urlSuffix = "supplies/circulating";
    if ((from) && (to)) {
      const searchParam = new URLSearchParams();
      searchParam.append('from', from);
      searchParam.append('to', to);
      urlSuffix = this.update_url_with_Params(urlSuffix, searchParam);
    }
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_circulating_RON_supply_Response;
  }

  /**
   * Query RON supply
   *
   * Get the total supply or circulating supply for RON.
   *
   * @async
   * @param {query_RON_supply_Query} supply_type
   * @returns {Promise<number>}
   * @category Supplies
   */
  async query_RON_supply(supply_type: query_RON_supply_Query): Promise<number> {
    const urlParams = new URLSearchParams();
    urlParams.append("q", supply_type);
    const _urlSuffix = "supplies/query";
    const urlSuffix = this.update_url_with_Params(_urlSuffix, urlParams);
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as number;
  }

  /**
   * Get total RON supply
   *
   * Get the total supply for RON.
   *
   * @async
   * @returns {Promise<get_total_RON_supply_Response>}
   * @category Supplies
   */
  async get_total_RON_supply(): Promise<get_total_RON_supply_Response> {
    const urlSuffix = "supplies/total";
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_total_RON_supply_Response;
  }

  /**
   * Get token by address
   *
   * Get a token by its address.
   *
   * @async
   * @param {string} contractAddr
   * @returns {Promise<get_token_by_address_Response>}
   * @category Tokens
   */
  async get_token_by_address(contractAddr: string): Promise<get_token_by_address_Response> {
    const urlSuffix = `tokens/${contractAddr}`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_token_by_address_Response;
  }

  /**
   * Get token's top holders
   *
   * Get the top holders of the specified token.
   * 
   * @async
   * @param {string} contractAddr
   * @returns {Promise<get_token_top_holders_Response>}
   * @category Tokens
   */
  async get_token_top_holders(contractAddr: string): Promise<get_token_top_holders_Response> {
    const urlSuffix = `tokens/${contractAddr}/top_holders`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_token_top_holders_Response;
  }

  /**
   * Get overview for tokens
   *
   * Get an overview for tokens that matched the specified contract addresses.
   *
   * @async
   * @param {string} contractAddresses
   * @returns {Promise<get_overview_for_tokens_Response>}
   * @category Tokens
   */
  async get_overview_for_tokens(contractAddresses: string[]): Promise<get_overview_for_tokens_Response> {
    const urlSuffix = "tokens/ids";
    const response = await this.postRonin(urlSuffix, { contractAddresses });
    const result = response.data;
    return result as unknown as get_overview_for_tokens_Response;
  }

  /**
   * Search tokens
   *
   * Search tokens.
   *
   * @async
   * @param {search_tokens_Query} query
   * @returns {Promise<search_tokens_Query_Response>}
   * @category Tokens
   */
  async search_tokens(query: search_tokens_Query): Promise<search_tokens_Response> {
    const urlSuffix = "tokens/search";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as search_tokens_Response;
  }


  /**
   * Search token balances
   *
   * Search token balances. 
   *
   * @async
   * @param {search_token_balances_Query} query
   * @returns {Promise<search_token_balances_Response>}
   * @category Token balances
   */
  async search_token_balances(query: search_token_balances_Query): Promise<search_token_balances_Response> {
    const urlSuffix = "tokens/balances/search";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as search_token_balances_Response;
  }

  /**
   * Get summary of token balances
   *
   * Get the summary of token balances for the specified owner address.
   *
   * @async
   * @param {get_summary_of_token_balances_Query} query
   * @returns {Promise<get_summary_of_token_balances_Response>}
   * @category Token balances
   */
  async get_summary_of_token_balances(query: get_summary_of_token_balances_Query): Promise<get_summary_of_token_balances_Response> {
    const urlSuffix = "tokens/balances/summary";
    const response = await this.postRonin(urlSuffix, query);
    const result = response.data;
    return result as unknown as get_summary_of_token_balances_Response;
  }

  /**
   * List token transfers by timestamp
   *
   * List token transfers ordered by timestamp.
   *
   * @async
   * @param {?number} [limit]
   * @param {?number} [offset]
   * @returns {Promise<list_token_transfers_by_timestamp_Response>}
   * @category Token transfers
   */
  async list_token_transfers_by_timestamp(limit?: number, offset?: number): Promise<list_token_transfers_by_timestamp_Response> {
    const urlSuffix = this.update_url("tokens/transfers", limit, offset);
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as list_token_transfers_by_timestamp_Response;
  }

  // Requires Skynet Tx Query permission
  async search_token_transfers() {
    // const urlSuffix = "";
    // const response = await this.postRonin(urlSuffix, query);
    // const result = response.data;
    // return result as unknown as get_summary_of_token_balances_Response;
  }

  /**
   * List token transfers by transaction hash
   *
   * List token transfers ordered by transaction hash.
   *
   * @async
   * @param {string[]} transaction_hashes
   * @returns {Promise<list_token_transfers_by_transaction_hash_Response>}
   * @category Token transfers
   */
  async list_token_transfers_by_transaction_hash(transaction_hashes: string[]): Promise<list_token_transfers_by_transaction_hash_Response> {
    const urlSuffix = "tokens/transfers/txs";
    const response = await this.postRonin(urlSuffix, { transaction_hashes });
    const result = response.data;
    return result as unknown as list_token_transfers_by_transaction_hash_Response;
  }

  /**
   * List transactions
   *
   * List transactions.
   *
   * @async
   * @param {?number} [limit]
   * @param {?number} [offset]
   * @returns {Promise<list_transactions_Response>}
   * @category Transactions
   */
  async list_transactions(limit?: number, offset?: number): Promise<list_transactions_Response> {
    const urlSuffix = this.update_url("txs", limit, offset);
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as list_transactions_Response;
  }

  /**
   * Get transaction by hash
   *
   * Returns the details of an individual transaction by its hash.
   *
   * @async
   * @param {string} hash
   * @returns {Promise<get_transaction_by_hash_Response>}
   * @category Transactions
   */
  async get_transaction_by_hash(hash: string): Promise<get_transaction_by_hash_Response> {
    const urlSuffix = `txs/${hash}`;
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_transaction_by_hash_Response;
  }

  /**
   * Get multiple transactions by hashes
   *
   * Returns the details of multiple transactions by their hashes.
   *
   * @async
   * @param {string[]} hashes
   * @returns {Promise<get_multiple_transactions_by_hashes_Response>}
   * @category Transactions
   */
  async get_multiple_transactions_by_hashes(hashes: string[]): Promise<get_multiple_transactions_by_hashes_Response> {
    const urlSuffix = "txs/hashes";
    const response = await this.postRonin(urlSuffix, { hashes });
    const result = response.data;
    return result as unknown as get_multiple_transactions_by_hashes_Response;
  }

  // requires Skynet Tx Query service
  // async search_transactiots

  /**
   * Get daily count of transactions
   *
   * Get the daily count of transactions.
   *
   * @async
   * @returns {Promise<get_daily_count_of_transactions_Response>}
   * @category Transactions
   */
  async get_daily_count_of_transactions(): Promise<get_daily_count_of_transactions_Response> {
    const urlSuffix = "txs/stats/daily_counts";
    const response = await this.getRonin(urlSuffix);
    const result = response.data;
    return result as unknown as get_daily_count_of_transactions_Response;
  }

}

/**
 * createsSkynetRESTProvider creates a {@link SkynetRESTProvider} given the X_API_KEY
 *
 * @param {string} X_API_KEY The API key
 * @param {?string} [url] The url, if not given, defaults to {@link URL_RONIN_SKYNET_REST}
 * @returns {SkynetRESTProvider}
 */
function createSkynetRESTProvider(X_API_KEY: string, url?: string): SkynetRESTProvider {
  const connection = { url: url || URL_RONIN_SKYNET_REST, headers: { "X-API-KEY": X_API_KEY } };
  const result = new SkynetRESTProvider(connection);
  return result;
}

export {
  SkynetRESTProvider,
  createSkynetRESTProvider
}