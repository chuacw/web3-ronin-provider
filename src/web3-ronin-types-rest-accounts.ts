import { REST_Paging } from "./web3-ronin-consts-rest-global"
import { Paging } from "./web3-ronin-types-global"

export interface get_Account_Activities_Request_Body {
  activityTypes?: string[]
  block: get_Account_Activities_Request_Body_Block
  paging: get_Account_Activities_Request_Body_Paging1 | get_Account_Activities_Request_Body_Paging2
}

export interface get_Account_Activities_Request_Body_Block {
  blockHash?: string
  blockRange?: number[]
}

export interface get_Account_Activities_Request_Body_Paging1 {
  offset: number
  pagingStyle: 'cursor' | 'offset'
}

export interface get_Account_Activities_Request_Body_Paging2 {
  cursor: string
  limit: number
}

export interface get_Account_Activities_Response {
  result: get_Account_Activities_Result
}

export interface get_Account_Activities_Result {
  items: get_Account_Activities_Item[]
  paging: Paging
}

export interface get_Account_Activities_Item {
  address: string
  blockNumber: number
  txIndex: number
  txHash: string
  activity: string
  details: get_Account_Activities_Details
  blockTime: string
}

export interface get_Account_Activities_Details {
  contract: Contract
  sends: Send[]
  receives: Recefe[]
}

export interface Contract {
  address: string
}

export interface Send {
  from: string
  to: string
  amount: string
  token: Token
}

export interface Token {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
}

export interface Recefe {
  from: string
  to: string
  amount: string
  token: Token2
}

export interface Token2 {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
}

export interface get_account_info_by_address_Response {
  result: get_account_info_by_address_Result
}

export interface get_account_info_by_address_Result {
  address: string
  balance: string
  ronNetWorth: number
  erc20NetWorth: number
}

export interface search_wealthiest_accounts_Response {
  result: search_wealthiest_accounts_Result
}

export interface search_wealthiest_accounts_Result {
  items: search_wealthiest_accounts_Item[]
  paging: search_wealthiest_accounts_Paging
}

export interface search_wealthiest_accounts_Item {
  address: string
  balance: string
  netWorth: string
  totalNFTs: number
  transactionCount: number
  isContract: boolean
}

export interface search_wealthiest_accounts_Paging {
  total: number
}

export interface get_blocks_Param {
  /**
   * The block hash to searh for
   */
  block_hash?: string
  /**
   * The block number to searh for
   */
  block_number?: number
  limit?: number
  offset?: number
}

export interface get_blocks_Response {
  result: get_blocks_Result | get_blocks_Item
}

export interface get_blocks_Result {
  items: get_blocks_Item[]
  paging: REST_Paging
}

export interface get_blocks_Item {
  hash: string
  number: number
  parentHash: string
  transactions: string[]
  nonce: number
  mixHash: string
  logsBloom: string
  stateRoot: string
  transactionsRoot: string
  receiptsRoot: string
  coinbase: string
  difficulty: number
  totalDifficulty: number
  extraData: string
  size: number
  gasLimit: number
  gasUsed: number
  timestamp: number
}

export interface get_the_finalized_block_number_Response {
  result: get_the_finalized_block_number_Result
}

export type get_the_latest_block_number_Response = get_the_finalized_block_number_Response;

export interface get_the_finalized_block_number_Result {
  blockNumber: number
}

export interface get_contract_by_address_Response {
  result: get_contract_by_address_Result
}

export interface get_contract_by_address_Result {
  address: string
  name: string
  symbol: string
  standard: string
  verifiedName: string
  verifiedSymbol: string
  verifiedStandard: string
  creator: string
  createdAtTx: string
  createdAtBlock: number
  createdAtBlockHash: string
  createdAtBlockTime: number
}
