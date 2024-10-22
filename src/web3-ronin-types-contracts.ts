// Author: chuacw, Singapore, Singapore

export interface contract_detail_Response {
  result: contract_detail_Response_Result
}

export interface contract_detail_Response_Result {
  address: string
  name: string
  symbol: string
  standard: string
  creator: string
  createdAtBlock: number
  verifiedName: string
  verifiedSymbol: string
  verifiedStandard: string
}

export interface multiple_contracts_details_Response {
  result: multiple_contracts_details_Result
}

export interface multiple_contracts_details_Result {
  items: multiple_contracts_details_Item[]
}

export interface multiple_contracts_details_Item {
  address: string
  standard: string
  creator: string
  createdAtBlock: number
  verifiedName: string
  verifiedStandard: string
  name?: string
  symbol?: string
  verifiedSymbol?: string
}

