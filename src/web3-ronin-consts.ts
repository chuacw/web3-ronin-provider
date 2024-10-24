import { BigNumber } from "ethers";

/**
 * URL to Ronin Mainnet
 */
const URL_RONIN_MAINNET_RPC: string = 'https://api-gateway.skymavis.com/rpc';
/**
 * URL to Ronin testnet
 */
const URL_RONIN_TESTNET_RPC: string = 'https://api-gateway.skymavis.com/rpc/testnet';
/**
 * URL to the Skynet service
 */
const URL_RONIN_SKYNET_RPC: string = 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2';
/**
 * URL to Ronin Mainnet WebSocket
 */
const URL_RONIN_MAINNET_WSS: string = 'wss://api-gateway.skymavis.com/rpc/socket';
const UINT256_MAX = BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const ADDR_AXIE_INFINITY_SHARD: string = "0x97a9107c1793bc407d6f527b77e7fff4d812bece";
const ADDR_RONIN_GATEWAY_PROXY_V3: string = "0x0CF8fF40a508bdBc39fBe1Bb679dCBa64E65C7Df";

/**
 * Error string for X-API-Key 
 *
 * @type {"X-API-KEY not provided!"}
 */
const ERROR_NO_API_KEY = "X-API-KEY not provided!";
/**
 * Error string for URL being empty
 *
 * @type {"URL is empty!"}
 */
const ERROR_EMPTY_URL = "URL is empty!";
/**
 * Error string for headers not being defined
 *
 * @type {"headers is not defined!"}
 */
const ERROR_NO_HEADERS = "headers is not defined!"
/**
 * Error string for empty headers
 *
 * @type {"headers is empty!"}
 */
const ERROR_EMPTY_HEADERS = "headers is empty!";

export {
  URL_RONIN_MAINNET_RPC,
  URL_RONIN_TESTNET_RPC,
  URL_RONIN_SKYNET_RPC,
  URL_RONIN_MAINNET_WSS,
  UINT256_MAX,
  ADDR_AXIE_INFINITY_SHARD,
  ADDR_RONIN_GATEWAY_PROXY_V3,

  ERROR_NO_API_KEY,
  ERROR_EMPTY_URL,
  ERROR_EMPTY_HEADERS,
  ERROR_NO_HEADERS
}
