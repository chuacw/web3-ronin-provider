export interface get_finalized_block_number_Response {
  result: get_finalized_block_number_Result
}

export interface get_finalized_block_number_Result {
  blockNumber: number
}

export type get_latest_block_number_Response = get_finalized_block_number_Response;

export interface get_transactions_by_block_number_Response {
  result: get_transactions_by_block_number_Result
}

export interface get_transactions_by_block_number_Result {
  items: get_transactions_by_block_number_Item[]
}

export interface get_transactions_by_block_number_Item {
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

export interface get_block_by_number_Response {
  result: get_block_by_number_Result
}

export interface get_block_by_number_Result {
  hash: string
  number: number
  parentHash: string
  transactions: string[]
  nonce: number
  mixHash: string
  logsBloom: string
  stateRoot: string
  transactionsRoot: string
  receiptsRoot: string
  coinbase: string
  difficulty: number
  totalDifficulty: number
  extraData: string
  size: number
  gasLimit: number
  gasUsed: number
  baseFeePerGas: string
  timestamp: number
}

export interface get_block_by_hash_timestamp_block_number_range_Response {
  result: get_block_by_hash_timestamp_block_number_range_Result
}

export interface get_block_by_hash_timestamp_block_number_range_Result {
  hash: string
  number: number
  parentHash: string
  transactions: string[]
  nonce: number
  mixHash: string
  logsBloom: string
  stateRoot: string
  transactionsRoot: string
  receiptsRoot: string
  coinbase: string
  difficulty: number
  totalDifficulty: number
  extraData: string
  size: number
  gasLimit: number
  gasUsed: number
  baseFeePerGas: string
  timestamp: number
}

/**
 * Parameters for searching
 *
 * @export
 * @typedef {OptionalParams}
 */
export type OptionalParams = { 
  /**
   * The searched block must match this hash
   */
  hash?: string,
  /**
   * The searched block must be within this timestamp
   */ 
  timestamp?: number
}