// Author: chuacw, Singapore, Singapore

import { Paging } from "./web3-ronin-types-global";


export enum activityTypes {
  ContractInteraction = "ContractInteraction",
  RONTransfer = "RONTransfer",
  ScatterDisperse = "ScatterDisperse",
  Transfer = "Transfer",
  KatanaSwap = "KatanaSwap",
  Stake = "Stake",
  Mint = "Mint",
  Approve = "Approve",
  ContractCreation = "ContractCreation",
  ClaimRewards = "ClaimRewards",
  KatanaAddLiquidity = "KatanaAddLiquidity",
  Unstake = "Unstake",
  Restake = "Restake",
  Withdraw = "Withdraw",
  KatanaRemoveLiquidity = "KatanaRemoveLiquidity",
  Burn = "Burn",
  Deposit = "Deposit",
  StakeRewards = "StakeRewards"
}

export type SearchCriteria = {
  /**
   * The activities to be searched for, must match the types listed here
   */
  activityTypes: activityTypes[], 
  /**
   * The number of items to search for
   */
  limit?: number, 
  /**
   * The page to search from
   */
  cursor?: string, 
  /**
   * The block to start the search from
   */
  fromBlock?: number, 
  /**
   * The block to end the search at
   */
  toBlock?: number
};

export interface search_Response {
  result: search_Result
}

export interface search_Result {
  items: search_Item[]
  paging: Paging
}

export interface search_Item {
  address: string
  blockNumber: number
  txIndex: number
  txHash: string
  activity: string
  details: search_Details
  blockTime: number
}

export interface search_Details {
  contract?: search_Contract
  approvals?: search_Approval[]
  receives?: search_Recefe[]
  sends?: search_Send[]
  orders?: search_Order[]
}

export interface search_Contract {
  address: string
}

export interface search_Approval {
  owner: string
  spender: string
  amount?: string
  token: search_Approval_Token
  isAll?: boolean
}

export interface search_Approval_Token {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
}

export interface search_Recefe {
  from: string
  to: string
  amount: string
  token: search_Recefe_Token
  tokenId?: string
}

export interface search_Recefe_Token {
  contractAddress?: string
  name: string
  symbol: string
  standard?: string
  decimals: number
}

export interface search_Send {
  from: string
  to: string
  amount: string
  tokenId?: string
  token: search_Send_Token
}

export interface search_Send_Token {
  contractAddress?: string
  name: string
  symbol: string
  standard?: string
  decimals: number
}

export interface search_Order {
  maker: string
  taker: string
  price: string
  paymentToken: search_Order_PaymentToken
  assets: search_Order_Asset[]
}

export interface search_Order_PaymentToken {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
}

export interface search_Order_Asset {
  tokenStandard: string
  address: Address
  tokenId: string
  amount: string
}

export interface Address {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
}

export interface get_owned_nfts_of_address_Response {
  result: get_owned_nfts_of_address_Result
}

export interface get_owned_nfts_of_address_Result {
  items: get_owned_nfts_of_address_Item[]
  paging: Paging
}

export interface get_owned_nfts_of_address_Item {
  contractAddress: string
  tokenId: string
  balance: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: get_owned_nfts_of_address_Metadata
}

export interface get_owned_nfts_of_address_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: get_owned_nfts_of_address_Properties
}

export interface get_owned_nfts_of_address_Properties {
  axie_id: number
  back_id: string
  birthdate: number
  bodyshape: string
  breed_count: number
  class: string
  ears_id: string
  eyes_id: string
  horn_id: string
  matron_id: number
  mouth_id: string
  num_japan: number
  num_mystic: number
  num_shiny: number
  num_summer: number
  num_xmas: number
  primary_color: string
  pureness: number
  purity: number
  sire_id: number
  stage: number
  tail_id: string
  title: string
}

export interface get_fungible_token_balance_Response {
  result: get_fungible_token_balance_Result
}

export interface get_fungible_token_balance_Result {
  items: get_fungible_token_balance_Item[]
  paging: Paging
}

export interface get_fungible_token_balance_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  decimals: number
}

export interface get_list_of_collections_having_NFTs_Response {
  result: get_list_of_collections_having_NFTs_Result
}

export interface get_list_of_collections_having_NFTs_Result {
  items: get_list_of_collections_having_NFTs_Item[]
  paging: Paging
}

export interface get_list_of_collections_having_NFTs_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  tokenCount: number
}

export interface get_nft_list_of_address_and_contract_Response {
  result: get_nft_list_of_address_and_contract_Result
}

export interface get_nft_list_of_address_and_contract_Result {
  items: get_nft_list_of_address_and_contract_Item[]
  paging: Paging
}

export interface get_nft_list_of_address_and_contract_Item {
  contractAddress: string
  tokenId: string
  balance: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: get_nft_list_of_address_and_contract_Metadata
}

export interface get_nft_list_of_address_and_contract_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: get_nft_list_of_address_and_contract_Properties
}

export interface get_nft_list_of_address_and_contract_Properties {
  axie_id: number
  back_id: string
  birthdate: number
  bodyshape: string
  breed_count: number
  class: string
  ears_id: string
  eyes_id: string
  horn_id: string
  matron_id: number
  mouth_id: string
  num_japan: number
  num_mystic: number
  num_shiny: number
  num_summer: number
  num_xmas: number
  primary_color: string
  pureness: number
  purity: number
  sire_id: number
  stage: number
  tail_id: string
  title: string
}

export interface get_balance_of_address_and_contract_Response {
  result: get_balance_of_address_and_contract_Result
}

export interface get_balance_of_address_and_contract_Result {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  tokenCount: number
}

export interface get_balances_of_address_by_multiple_contracts_Response {
  result: get_balances_of_address_by_multiple_contracts_Result
}

export interface get_balances_of_address_by_multiple_contracts_Result {
  items: get_balances_of_address_by_multiple_contracts_Item[]
}

export interface get_balances_of_address_by_multiple_contracts_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  tokenCount: number
}

export interface get_token_tranfers_of_address_Response {
  result: get_token_tranfers_of_address_Result
}

export interface get_token_tranfers_of_address_Result {
  items: get_token_tranfers_of_address_Item[]
  paging: Paging
}

export interface get_token_tranfers_of_address_Item {
  blockNumber: number
  logIndex: number
  contractAddress: string
  tokenStandard: string
  decimals: number
  from: string
  to: string
  value: string
  blockHash: string
  transactionHash: string
  blockTime: number
  tokenId?: string
}

export interface get_token_tranfers_of_address_with_contract_Response {
  result: get_token_tranfers_of_address_with_contract_Result
}

export interface get_token_tranfers_of_address_with_contract_Result {
  items: get_token_tranfers_of_address_with_contract_Item[]
  paging: Paging
}

export interface get_token_tranfers_of_address_with_contract_Item {
  blockNumber: number
  logIndex: number
  tokenId: string
  contractAddress: string
  tokenStandard: string
  decimals: number
  from: string
  to: string
  value: string
  blockHash: string
  transactionHash: string
  blockTime: number
}

export interface get_transactions_of_address_Response {
  result: get_transactions_of_address_Result
}

export interface get_transactions_of_address_Result {
  items: get_transactions_of_address_Item[]
  paging: Paging
}

export interface get_transactions_of_address_Item {
  transactionHash: string
  transactionIndex: number
  blockHash: string
  blockNumber: number
  from: string
  to: string
  contractAddress: string
  status: number
  gas: number
  gasPrice: string
  effectiveGasPrice: string
  gasUsed: number
  cumulativeGasUsed: number
  logsBloom: string
  input: string
  nonce: number
  value: string
  type: number
  v: string
  r: string
  s: string
  blockTime: number
  chainId: string
  maxFeePerGas: string
  maxPriorityFeePerGas: string
}

export interface get_internal_txs_transfers_Response {
  result: get_internal_txs_transfers_Result
}

export interface get_internal_txs_transfers_Result {
  items: get_internal_txs_transfers_Item[]
  paging: Paging
}

export interface get_internal_txs_transfers_Item {
  transactionHash: string
  order: number
  opcode: string
  type: string
  value: string
  input: string
  from: string
  to: string
  success: boolean
  error: string
  blockNumber: number
  blockHash: string
  blockTime: number
}