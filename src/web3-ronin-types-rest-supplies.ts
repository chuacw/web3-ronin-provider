export interface get_circulating_token_supply_Response {
  result: get_circulating_token_supply_Result
}

export interface get_circulating_token_supply_Result {
  value: string
}

export enum query_token_supply_Query {
  totalSupply = "totalSupply",
  circulatingSupply = "circulatingSupply"
}

export interface get_total_token_supply_Response {
  result: get_total_token_supply_Result
}

export interface get_total_token_supply_Result {
  value: string
}

export interface get_circulating_RON_supply_Response {
  result: get_circulating_RON_supply_Result
}

export interface get_circulating_RON_supply_Result {
  items: get_circulating_RON_supply_Result_Item[]
}

export interface get_circulating_RON_supply_Result_Item {
  date: string
  value: string
}

export type query_RON_supply_Query = query_token_supply_Query;

export interface get_total_RON_supply_Response {
  result: get_total_RON_supply_Result
}

export interface get_total_RON_supply_Result {
  items: get_total_RON_supply_Result_Item[]
}

export type get_total_RON_supply_Result_Item = get_circulating_RON_supply_Result_Item