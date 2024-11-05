import { REST_Paging } from "./web3-ronin-consts-rest-global"

export interface list_token_transfers_by_timestamp_Response {
  result: list_token_transfers_by_timestamp_Result
}

export interface list_token_transfers_by_timestamp_Result {
  items: list_token_transfers_by_timestamp_Result_Item[]
  paging: REST_Paging
}

export interface list_token_transfers_by_timestamp_Result_Item {
  blockNumber: number
  logIndex: number
  tokenId?: string
  contractAddress: string
  tokenStandard: string
  tokenName: string
  tokenSymbol: string
  decimals: number
  from: string
  to: string
  value: string
  blockHash: string
  transactionHash: string
  blockTime: number
}

export interface list_token_transfers_by_transaction_hash_Response {
  result: list_token_transfers_by_transaction_hash_Result
}

export interface list_token_transfers_by_transaction_hash_Result {
  items: list_token_transfers_by_transaction_hash_Result_Item[]
}

export interface list_token_transfers_by_transaction_hash_Result_Item {
  blockNumber: number
  logIndex: number
  contractAddress: string
  tokenStandard: string
  tokenName: string
  tokenSymbol: string
  decimals: number
  from: string
  to: string
  value: string
  blockHash: string
  transactionHash: string
  blockTime: number
}
