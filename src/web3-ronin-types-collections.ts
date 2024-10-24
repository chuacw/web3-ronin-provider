// Author: chuacw, Singapore, Singapore

import { Paging } from "./web3-ronin-types-global"

export interface get_owners_of_nft_Response {
  result: get_owners_of_nft_Result
}

export interface get_owners_of_nft_Result {
  items: get_owners_of_nft_Item[]
  paging: Paging
}

export interface get_owners_of_nft_Item {
  address: string
  balance: string
}

export interface get_token_transfers_of_nft_Response {
  result: get_token_transfers_of_nft_Result
}

export interface get_token_transfers_of_nft_Result {
  items: get_token_transfers_of_nft_Item[]
  paging: Paging
}

export interface get_token_transfers_of_nft_Item {
  address: string
  balance: string
}

export interface get_detail_of_nft_Response {
  result: get_detail_of_nft_Result
}

export interface get_detail_of_nft_Result {
  tokenId: string
  contractAddress: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: get_detail_of_nft_Metadata
}

export interface get_detail_of_nft_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: get_detail_of_nft_Properties
}

export interface get_detail_of_nft_Properties {
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

export interface get_nfts_from_collection_Response {
  result: get_nfts_from_collection_Result
}

export interface get_nfts_from_collection_Result {
  items: get_nfts_from_collection_Item[]
  paging: Paging
}

export interface get_nfts_from_collection_Item {
  tokenId: string
  contractAddress: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: get_nfts_from_collection_Metadata
}

export interface get_nfts_from_collection_Metadata {
  name: string
  external_url: string
  id: number
  image: string
  genes: string
  properties: get_nfts_from_collection_Properties
}

export interface get_nfts_from_collection_Properties {
  axie_id: number
  class: string
  bodyshape: string
  title: string
  primary_color: string
  num_mystic: number
  num_japan: number
  num_xmas: number
  num_summer: number
  num_shiny: number
  pureness: number
  purity: number
  eyes_id: string
  mouth_id: string
  ears_id: string
  horn_id: string
  back_id: string
  tail_id: string
  birthdate: number
  stage: number
  sire_id: number
  matron_id: number
  breed_count: number
}

export interface refresh_nfts_of_collection_sync_Response {
  result: refresh_nfts_of_collection_sync_Result
}

export interface refresh_nfts_of_collection_sync_Result {
  successes: string[]
  failures: string[]
}

export interface refresh_nfts_of_collection_async_Response {
  result: string
}

export interface get_details_of_multiple_nfts_Response {
  result: get_details_of_multiple_nfts_Result
}

export interface get_details_of_multiple_nfts_Result {
  items: get_details_of_multiple_nfts_Item[]
}

export interface get_details_of_multiple_nfts_Item {
  tokenId: string
  contractAddress: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: get_details_of_multiple_nfts_Metadata
}

export interface get_details_of_multiple_nfts_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: get_details_of_multiple_nfts_Properties
}

export interface get_details_of_multiple_nfts_Properties {
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

export interface get_collection_holder_list_Response {
  result: get_collection_holder_list_Result
}

export interface get_collection_holder_list_Result {
  items: get_collection_holder_list_Item[]
  paging: Paging
}

export interface get_collection_holder_list_Item {
  address: string
  balance: string
  tokenCount: number
}

export interface get_collection_token_transfers_Response {
  result: get_collection_token_transfers_Result
}

export interface get_collection_token_transfers_Result {
  items: get_collection_token_transfers_Item[]
  paging: Paging
}

export interface get_collection_token_transfers_Item {
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

export interface get_collection_detail_Response {
  result: get_collection_detail_Result
}

export interface get_collection_detail_Result {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  totalSupply: string
  totalOwners: number
  totalTransfers: number
}

export interface get_details_of_multiple_collections_Response {
  result: get_details_of_multiple_collections_Result
}

export interface get_details_of_multiple_collections_Result {
  items: get_details_of_multiple_collections_Item[]
}

export interface get_details_of_multiple_collections_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  totalSupply: string
  totalOwners: number
  totalTransfers: number
}

export interface get_number_of_collection_holdings_by_address_Response {
  result: get_number_of_collection_holdings_by_address_Result
  paging?: Paging
}

export interface get_number_of_collection_holdings_by_address_Result {
  address: string
  balance: string
  tokenCount: number
}
