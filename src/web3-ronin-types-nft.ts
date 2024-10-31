import { Paging } from "./web3-ronin-types-global"

export interface search_nfts_by_metadata_Request {
  name: string
  traits: search_nfts_by_metadata_RequestTrait[]
  rangeTraits: search_nfts_by_metadata_RequestRangeTrait[]
}

export interface search_nfts_by_metadata_RequestTrait {
  trait: string
  values: string[]
}

export interface search_nfts_by_metadata_RequestRangeTrait {
  trait: string
  from: number
  to: number
}

export interface search_nfts_by_metadata_Response {
  result: search_nfts_by_metadata_Result
}

export interface search_nfts_by_metadata_Result {
  items: search_nfts_by_metadata_Item[]
  paging: Paging
}

export interface search_nfts_by_metadata_Item {
  tokenId: string
  contractAddress: string
  standard: string
  tokenUri: string
  metadata: search_nfts_by_metadata_Metadata
}

export interface search_nfts_by_metadata_Metadata {
  external_url: string
  genes: string
  id: number
  image: string
  name: string
  properties: search_nfts_by_metadata_Properties
}

export interface search_nfts_by_metadata_Properties {
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
