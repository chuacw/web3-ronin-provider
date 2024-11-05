
export interface search_token_balances_Query extends get_summary_of_token_balances_Query {
  contractAddresses: string[]
  paging: search_token_balances_Paging
  tokenIds: string[]
}

export interface search_token_balances_Paging {
  cursor: string
  limit: number
  offset: number
  pagingStyle: string
}

export interface search_token_balances_Response {
  result: search_token_balances_Result
}

export interface search_token_balances_Result {
  items: search_token_balances_Result_Item[]
}

export interface search_token_balances_Result_Item {
  ownerAddress: string
  tokenName: string
  tokenSymbol: string
  tokenStandard: string
  decimals: number
  balance: string
}

export interface get_summary_of_token_balances_Query {
  includes: string[]
  ownerAddress: string
  tokenStandards: string[]
}

export interface get_summary_of_token_balances_Response {
  result: get_summary_of_token_balances_Result
}

export interface get_summary_of_token_balances_Result {
  items: get_summary_of_token_balances_Result_Item[]
}

export interface get_summary_of_token_balances_Result_Item {
  ownerAddress: string
  contractAddress?: string
  tokenName: string
  tokenSymbol: string
  tokenStandard: string
  decimals: number
  balance: string
}
