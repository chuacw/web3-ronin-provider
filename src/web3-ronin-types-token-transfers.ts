import { Paging } from "./web3-ronin-types-global"

export interface get_token_transfers_by_block_range_OptionalParams {
  
  order?: "asc" | "desc";
  limit?: number, 
  cursor?: string
}

export interface get_token_transfers_by_block_range_Response {
  result: get_token_transfers_by_block_range_Result
}

export interface get_token_transfers_by_block_range_Result {
  items: get_token_transfers_by_block_range_Item[]
  paging: Paging
}

export interface get_token_transfers_by_block_range_Item {
  blockNumber: number
  logIndex: number
  tokenId?: string
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

