import { REST_Paging } from "./web3-ronin-consts-rest-global"

export interface list_transactions_Response {
  result: list_transactions_Result
}

export interface list_transactions_Result {
  items: list_transactions_Result_Item[]
  paging: REST_Paging
}

export interface list_transactions_Result_Item {
  transactionHash: string
  transactionIndex: number
  blockHash: string
  blockNumber: number
  from: string
  to: string
  contractAddress: string
  status: number
  blockStatus: string
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
  chainId?: string
  maxFeePerGas?: string
  maxPriorityFeePerGas?: string
}

export interface get_transaction_by_hash_Response {
  result: get_transaction_by_hash_Result
}

export interface get_transaction_by_hash_Result {
  transactionHash: string
  transactionIndex: number
  blockHash: string
  blockNumber: number
  from: string
  to: string
  contractAddress: string
  status: number
  blockStatus: string
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
}

export interface get_multiple_transactions_by_hashes_Response {
  result: get_multiple_transactions_by_hashes_Result
}

export interface get_multiple_transactions_by_hashes_Result {
  items: get_multiple_transactions_by_hashes_Result_Item[]
}

export interface get_multiple_transactions_by_hashes_Result_Item {
  transactionHash: string
  transactionIndex: number
  blockHash: string
  blockNumber: number
  from: string
  to: string
  contractAddress: string
  status: number
  blockStatus: string
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
}

export interface get_daily_count_of_transactions_Result {
  [date: string]: number;
}

export interface get_daily_count_of_transactions_Response {
  result: get_daily_count_of_transactions_Result;
}
