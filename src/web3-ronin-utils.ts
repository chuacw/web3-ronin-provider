import { get_token_tranfers_of_address_Item } from "./web3-ronin-types-accounts";
import { hasFieldOfType, isArbitraryObject } from "delphirtl/sysutils";

export function hasTokenId(item: get_token_tranfers_of_address_Item): item is get_token_tranfers_of_address_Item & { tokenId: string } {
  return ('tokenId' in item);  
}

export interface errorResponse {
  response: {
    data: errorObj
  }
}
export interface errorObj {
  errorCode: number;
  message: string;
}

export interface successObj {
  result: object;
}

/**
 * Checks if an object contains the fields: errorCode: number, and message: string
 *
 * @export
 * @param {unknown} obj
 * @returns {obj is errorObj}
 */
export function isErrorObj(obj: unknown): obj is errorObj {
  const result = (
    hasFieldOfType<number>(obj, 'errorCode', 'number') &&
    hasFieldOfType<string>(obj, 'message', 'string')
  );
  return result;
}

/**
 * Checks if a given objet is an object, and if it is also an error response object.
 *
 * @export
 * @param {unknown} obj
 * @returns {obj is errorResponse}
 */
export function isErrorResponse(obj: unknown): obj is errorResponse {
  const result = (
    isArbitraryObject(obj) &&
    'response' in obj &&
    isArbitraryObject(obj.response) &&
    'data' in obj.response &&
    isErrorObj(obj.response.data)
  );
  return result;
}

/**
 * Checks if an object is a success object
 * @param obj 
 * @returns 
 */
export function isOk(obj: object): obj is successObj {
  const result = 'result' in obj && // typeof (obj as any).result === 'object' && (obj as any).result !== null
    isArbitraryObject(obj.result);
  return result;
}

/**
 * Makes an address invalid by removing the last character, and returning the resultant string
 * @param address 
 * @returns 
 */
export function makeInvalidAddress(address: string): string {
  const result = address.slice(0, address.length-1);
  return result;
}