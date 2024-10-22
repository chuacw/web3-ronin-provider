import { token_tranfers_of_address_Item } from "./web3-ronin-types-accounts";

export function hasTokenId(item: token_tranfers_of_address_Item): item is token_tranfers_of_address_Item & { tokenId: string } {
  return ('tokenId' in item);  
}