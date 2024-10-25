import { get_token_tranfers_of_address_Item } from "./web3-ronin-types-accounts";

export function hasTokenId(item: get_token_tranfers_of_address_Item): item is get_token_tranfers_of_address_Item & { tokenId: string } {
  return ('tokenId' in item);  
}

export interface errorObj {
  errorCode: number;
  message: string;
}

interface successObj {
  result: object;
}

function isDataError(obj: unknown): obj is errorObj {
  const result = (
    typeof obj === "object" &&
    obj !== null &&
    'errorCode' in obj &&
    typeof (obj as any).errorCode === 'number' &&
    'message' in obj &&
    typeof (obj as any).message === 'string'
  );
  return result;
}

export function isErrorResponse(obj: unknown): obj is errorObj {
  const result = (
    typeof obj === "object" &&
    obj !== null &&
    'response' in obj &&
    typeof obj.response === "object" &&
    obj.response !== null &&
    'data' in obj.response &&
    isDataError(obj.response.data)
  );
  return result;
}

export function isError(obj: unknown): obj is errorObj {
  const result = isDataError(obj);
  return result;
}

export function isOk(obj: object): obj is successObj {
  const result = 'result' in obj && typeof (obj as any).result === 'object' && (obj as any).result !== null
  return result;
}

export function makeInvalidAddress(address: string): string {
  const result = address.slice(0, address.length-1);
  return result;
}