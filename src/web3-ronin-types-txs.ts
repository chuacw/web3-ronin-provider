// Author: chuacw, Singapore, Singapore

export interface internal_txs_Response {
  result: internal_txs_Response_Result
}

export interface internal_txs_Response_Result {
  items: internal_txs_Response_Result_Item[]
}

export interface internal_txs_Response_Result_Item {
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

export interface internal_txs_detail_Response {
  result: internal_txs_detail_Result
}

export interface internal_txs_detail_Result {
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

export interface multiple_txs_details_Response {
  result: multiple_txs_details_Result
}

export interface multiple_txs_details_Result {
  items: multiple_txs_details_Item[]
}

export interface multiple_txs_details_Item {
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
