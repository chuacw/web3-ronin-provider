// Author: chuacw, Singapore, Singapore

import { Paging } from "./web3-ronin-types-global"

export interface owners_of_nft_Response {
  result: owners_of_nft_Result
}

export interface owners_of_nft_Result {
  items: owners_of_nft_Item[]
  paging: Paging
}

export interface owners_of_nft_Item {
  address: string
  balance: string
}

export interface token_transfers_of_nft_Response {
  result: token_transfers_of_nft_Result
}

export interface token_transfers_of_nft_Result {
  items: token_transfers_of_nft_Item[]
  paging: Paging
}

export interface token_transfers_of_nft_Item {
  address: string
  balance: string
}

export interface detail_of_nft_Response {
  result: detail_of_nft_Result
}

export interface detail_of_nft_Result {
  tokenId: string
  contractAddress: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: detail_of_nft_Metadata
}

export interface detail_of_nft_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: detail_of_nft_Properties
}

export interface detail_of_nft_Properties {
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

export interface nfts_from_collection_Response {
  result: nfts_from_collection_Result
}

export interface nfts_from_collection_Result {
  items: nfts_from_collection_Item[]
  paging: Paging
}

export interface nfts_from_collection_Item {
  tokenId: string
  contractAddress: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: nfts_from_collection_Metadata
}

export interface nfts_from_collection_Metadata {
  name: string
  external_url: string
  id: number
  image: string
  genes: string
  properties: nfts_from_collection_Properties
}

export interface nfts_from_collection_Properties {
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

export interface details_of_multiple_nfts_Response {
  result: details_of_multiple_nfts_Result
}

export interface details_of_multiple_nfts_Result {
  items: details_of_multiple_nfts_Item[]
}

export interface details_of_multiple_nfts_Item {
  tokenId: string
  contractAddress: string
  name: string
  symbol: string
  standard: string
  tokenUri: string
  metadata: details_of_multiple_nfts_Metadata
}

export interface details_of_multiple_nfts_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: details_of_multiple_nfts_Properties
}

export interface details_of_multiple_nfts_Properties {
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

export interface collection_holder_list_Response {
  result: collection_holder_list_Result
}

export interface collection_holder_list_Result {
  items: collection_holder_list_Item[]
  paging: Paging
}

export interface collection_holder_list_Item {
  address: string
  balance: string
  tokenCount: number
}

export interface collection_token_transfers_Response {
  result: collection_token_transfers_Result
}

export interface collection_token_transfers_Result {
  items: collection_token_transfers_Item[]
  paging: Paging
}

export interface collection_token_transfers_Item {
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

export interface collection_detail_Response {
  result: collection_detail_Result
}

export interface collection_detail_Result {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  totalSupply: string
  totalOwners: number
  totalTransfers: number
}

export interface details_of_multiple_collections_Response {
  result: details_of_multiple_collections_Result
}

export interface details_of_multiple_collections_Result {
  items: details_of_multiple_collections_Item[]
}

export interface details_of_multiple_collections_Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  totalSupply: string
  totalOwners: number
  totalTransfers: number
}

export interface number_of_collection_holdings_by_address_Response {
  result: number_of_collection_holdings_by_address_Result
  paging?: Paging
}

export interface number_of_collection_holdings_by_address_Result {
  address: string
  balance: string
  tokenCount: number
}
