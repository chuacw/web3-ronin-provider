// Author: chuacw, Singapore, Singapore

export interface get_detail_of_contract_Response {
  result: get_detail_of_contract_Result
}

export interface get_detail_of_contract_Result {
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

export interface get_details_of_multiple_contracts_Response {
  result: get_details_of_multiple_contracts_Result
}

export interface get_details_of_multiple_contracts_Result {
  items: get_details_of_multiple_contracts_Item[]
}

export interface get_details_of_multiple_contracts_Item {
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

