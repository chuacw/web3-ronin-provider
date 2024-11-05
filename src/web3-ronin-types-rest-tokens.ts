import { REST_Paging } from "./web3-ronin-consts-rest-global"

export interface get_token_by_address_Response {
  result: get_token_by_address_Result
}

export interface get_token_by_address_Result {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
  totalSupply: string
  totalOwners: number
  totalTransfers: number
  createdAtBlock: number
  updatedAt: number
}

export interface get_token_top_holders_Response {
  result: get_token_top_holders_Result
}

export interface get_token_top_holders_Result {
  items: get_token_top_holders_Result_Item[]
  paging: REST_Paging
}

export interface get_token_top_holders_Result_Item {
  ownerAddress: string
  balance: string
  percentage: number
  updatedAt: number
}
export interface get_overview_for_tokens_Response {
  result: get_overview_for_tokens_Result
}

export interface get_overview_for_tokens_Result {
  items: get_overview_for_tokens_Result_Item[]
}

export interface get_overview_for_tokens_Result_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
  totalSupply: string
  totalOwners: number
  totalTransfers: number
  createdAtBlock: number
  updatedAt: number
}

export enum TokenStandards {
  ERC20 = "ERC20",
  ERC721 = "ERC721",
  ERC1155 = "ERC1155"
}

export interface search_tokens_Query {
  paging: search_tokens_Query_Paging
  sort: search_tokens_Query_Sort[]
  tokenStandards?: TokenStandards[]
}

export interface search_tokens_Query_Paging {
  cursor: string
  limit: number
  offset: number
  pagingStyle: string
}

export enum search_tokens_Query_Sort_FieldName {
  createdAt = "createdAt", 
  totalTransfers = "totalTransfers", 
  totalHolders = "totalHolders"
}

export enum search_tokens_Query_Order {
  ASC = "asc",
  DESC = "desc"
}

export interface search_tokens_Query_Sort {
  fieldName: search_tokens_Query_Sort_FieldName
  order: search_tokens_Query_Order
}

export interface search_tokens_Response {
  result: search_tokens_Result
}

export interface search_tokens_Result {
  items: search_tokens_Result_Item[]
  paging: REST_Paging
}

export interface search_tokens_Result_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
  totalSupply: string
  totalOwners: number
  totalTransfers: number
  createdAtBlock: number
  updatedAt: number
}
