import { REST_Paging } from "./web3-ronin-consts-rest-global"

export interface get_summary_for_individual_NFT_Response {
  result: get_summary_for_individual_NFT_Result
}

export interface get_summary_for_individual_NFT_Result {
  contractAddress: string
  tokenId: string
  totalOwners: number
  quantity: number
}

export interface get_multiple_NFTs_Query {
  ids: get_multiple_NFTs_id[]
}

export interface get_multiple_NFTs_id {
  contractAddress: string
  tokenId: string
}

export interface get_multiple_NFTs_Response {
  result: get_multiple_NFTs_Result
}

export interface get_multiple_NFTs_Result {
  items: get_multiple_NFTs_Item[]
}

export interface get_multiple_NFTs_Item {
  tokenId: string
  contractAddress: string
  tokenName: string
  tokenSymbol: string
  tokenStandard: string
  tokenURI: string
  createdAtBlock: number
  createdAtBlockTime: string
  updatedAtBlock: number
  updatedAtBlockTime: string
  rawMetadata: get_multiple_NFTs_RawMetadata
}

export interface get_multiple_NFTs_RawMetadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: get_multiple_NFTs_Properties
}

export interface get_multiple_NFTs_Properties {
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

export interface search_for_NFTs_by_metadata_attributes_Query {
  contractAddress: string
  includes: string[]
  metadata: search_for_NFTs_by_metadata_attributes_Query_Metadata
  paging: search_for_NFTs_by_metadata_attributes_Query_Paging
}

export interface search_for_NFTs_by_metadata_attributes_Query_Metadata {
  attributes: search_for_NFTs_by_metadata_attributes_Query_Metadata_Attribute[]
}

export interface search_for_NFTs_by_metadata_attributes_Query_Metadata_Attribute {
  traitType: string
  value: string
}

export interface search_for_NFTs_by_metadata_attributes_Query_Paging {
  cursor: string
  limit: number
  offset: number
  pagingStyle: string
}

export interface search_for_NFTs_by_metadata_attributes_Response {
  result: search_for_NFTs_by_metadata_attributes_Result
}

export interface search_for_NFTs_by_metadata_attributes_Result {
  items: search_for_NFTs_by_metadata_attributes_Item[]
  paging: REST_Paging
}

export interface search_for_NFTs_by_metadata_attributes_Item {
  tokenId: string
  contractAddress: string
  tokenName: string
  tokenSymbol: string
  tokenStandard: string
  tokenURI: string
  createdAtBlock: number
  createdAtBlockTime: string
  updatedAtBlock: number
  updatedAtBlockTime: string
  rawMetadata: search_for_NFTs_by_metadata_attributes_RawMetadata
  ownerAddresses: string[]
}

export interface search_for_NFTs_by_metadata_attributes_RawMetadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: search_for_NFTs_by_metadata_attributes_Properties
}

export interface search_for_NFTs_by_metadata_attributes_Properties {
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

export type search_for_matched_NFTs_Query = search_for_matched_NFTs_Query1 | search_for_matched_NFTs_Query2;

export interface search_for_matched_NFTs_Query1 {
  contractAddresses: string[]
  includes: string[]
  paging: search_for_matched_NFTs_Query_Paging
  tokenIds: string[]
}

export interface search_for_matched_NFTs_Query2 {
  contractAddresses: string[]
  ownerAddress: string
  paging: search_for_matched_NFTs_Query_Paging
  tokenIds: string[]
}

export interface search_for_matched_NFTs_Query_Paging {
  cursor: string
  limit: number
  offset: number
  pagingStyle: string
}

export interface search_for_matched_NFTs_Response {
  result: search_for_matched_NFTs_Result
}

export interface search_for_matched_NFTs_Result {
  items: search_for_matched_NFTs_Result_Item[]
  paging: REST_Paging
}

export interface search_for_matched_NFTs_Result_Item {
  tokenId: string
  contractAddress: string
  tokenName: string
  tokenSymbol: string
  tokenStandard: string
  tokenURI: string
  createdAtBlock: number
  createdAtBlockTime: string
  updatedAtBlock: number
  updatedAtBlockTime: string
  rawMetadata: search_for_matched_NFTs_Result_Item_RawMetadata
}

export interface search_for_matched_NFTs_Result_Item_RawMetadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: search_for_matched_NFTs_Result_Item_RawMetadata_Properties
}

export interface search_for_matched_NFTs_Result_Item_RawMetadata_Properties {
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

export interface get_summary_for_multiple_NFTs_Query {
  ids: get_summary_for_multiple_NFTs_Query_Id[]
}

export type get_summary_for_multiple_NFTs_Query_Id = get_multiple_NFTs_id;

export interface get_summary_for_multiple_NFTs_Response {
  result: get_summary_for_multiple_NFTs_Result
}

export interface get_summary_for_multiple_NFTs_Result {
  items: get_summary_for_multiple_NFTs_Result_Item[]
}

export type get_summary_for_multiple_NFTs_Result_Item = get_summary_for_individual_NFT_Result;