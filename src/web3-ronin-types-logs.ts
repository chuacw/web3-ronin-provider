import { Paging } from "./web3-ronin-types-global"

export interface get_logs_by_contract_address_Response {
  result: get_logs_by_contract_address_Result
}

export interface get_logs_by_contract_address_Result {
  items: get_logs_by_contract_address_Item[]
  paging: Paging
}

export interface get_logs_by_contract_address_Item {
  address: string
  topics: string[]
  data: string
  blockNumber: number
  transactionHash: string
  transactionIndex: number
  blockHash: string
  logIndex: number
  removed: boolean
}

export interface get_logs_by_contract_address_and_log_topic_Response {
  result: get_logs_by_contract_address_and_log_topic_Result
}

export interface get_logs_by_contract_address_and_log_topic_Result {
  items: get_logs_by_contract_address_and_log_topic_Item[]
  paging: Paging
}

export interface get_logs_by_contract_address_and_log_topic_Item {
  address: string
  topics: string[]
  data: string
  blockNumber: number
  transactionHash: string
  transactionIndex: number
  blockHash: string
  logIndex: number
  removed: boolean
}