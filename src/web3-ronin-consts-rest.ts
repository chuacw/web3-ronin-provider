const ERROR_INVALID_ADDR = "ContractAddress: address is invalid";
const ERROR_CANNOT_PARSE = "cannot parse request body to JSON: json: cannot unmarshal number into Go struct field NFTItemSearchRequest.contractAddresses of type string"
const ERROR_OWNER_OR_ADDR = "only 'includes owner' or ownerAddress is accepted";

export {
  ERROR_INVALID_ADDR,
  ERROR_CANNOT_PARSE,
  ERROR_OWNER_OR_ADDR
}