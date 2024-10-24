// Author: chuacw, Singapore, Singapore

export interface get_internal_transaction_of_transaction_Response {
  result: get_internal_transaction_of_transaction_Result
}

export interface get_internal_transaction_of_transaction_Result {
  items: get_internal_transaction_of_transaction_Item[]
}

export interface get_internal_transaction_of_transaction_Item {
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

export interface get_detail_of_transaction_Response {
  result: get_detail_of_transaction_Result
}

export interface get_detail_of_transaction_Result {
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
}

export interface get_details_of_multiple_transactions_Response {
  result: get_details_of_multiple_transactions_Result
}

export interface get_details_of_multiple_transactions_Result {
  items: get_details_of_multiple_transactions_Item[]
}

export interface get_details_of_multiple_transactions_Item {
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
  chainId?: string
  maxFeePerGas?: string
  maxPriorityFeePerGas?: string
}
