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

export type SearchCriteria = {activityTypes: activityTypes[], limit?: number, cursor?: string, fromBlock?: number, toBlock?: number };

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

export interface owned_nfts_of_Response {
  result: owned_nfts_of_Result
}

export interface owned_nfts_of_Result {
  items: owned_nfts_of_Item[]
  paging: Paging
}

export interface owned_nfts_of_Item {
  contractAddress: string
  tokenId: string
  balance: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: owned_nfts_of_Metadata
}

export interface owned_nfts_of_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: owned_nfts_of_Properties
}

export interface owned_nfts_of_Properties {
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

export interface fungible_token_balance_Response {
  result: fungible_token_balance_Result
}

export interface fungible_token_balance_Result {
  items: fungible_token_balance_Item[]
  paging: Paging
}

export interface fungible_token_balance_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  decimals: number
}

export interface list_of_collections_having_NFTs_Response {
  result: list_of_collections_having_NFTs_Result
}

export interface list_of_collections_having_NFTs_Result {
  items: list_of_collections_having_NFTs_Item[]
  paging: Paging
}

export interface list_of_collections_having_NFTs_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  tokenCount: number
}

export interface nft_list_of_address_and_contract_Response {
  result: nft_list_of_address_and_contract_Result
}

export interface nft_list_of_address_and_contract_Result {
  items: nft_list_of_address_and_contract_Item[]
  paging: Paging
}

export interface nft_list_of_address_and_contract_Item {
  contractAddress: string
  tokenId: string
  balance: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: nft_list_of_address_and_contract_Metadata
}

export interface nft_list_of_address_and_contract_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: nft_list_of_address_and_contract_Properties
}

export interface nft_list_of_address_and_contract_Properties {
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

export interface balance_of_address_and_contract_Response {
  result: balance_of_address_and_contract_Result
}

export interface balance_of_address_and_contract_Result {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  tokenCount: number
}

export interface balances_of_address_by_multiple_contracts_Response {
  result: balances_of_address_by_multiple_contracts_Result
}

export interface balances_of_address_by_multiple_contracts_Result {
  items: balances_of_address_by_multiple_contracts_Item[]
}

export interface balances_of_address_by_multiple_contracts_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  balance: string
  tokenCount: number
}

export interface token_tranfers_of_address_Response {
  result: token_tranfers_of_address_Result
}

export interface token_tranfers_of_address_Result {
  items: token_tranfers_of_address_Item[]
  paging: Paging
}

export interface token_tranfers_of_address_Item {
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

