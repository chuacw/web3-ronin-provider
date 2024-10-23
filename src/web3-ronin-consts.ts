// Author: chuacw, Singapore, Singapore

import { BigNumber } from "ethers";

const URL_RONIN_MAINNET_RPC = 'https://api-gateway.skymavis.com/rpc';
const URL_RONIN_TESTNET_RPC = 'https://api-gateway.skymavis.com/rpc/testnet';
const URL_RONIN_SKYNET_RPC = 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2';
const URL_RONIN_MAINNET_WSS = 'wss://api-gateway.skymavis.com/rpc/socket';
const UINT256_MAX = BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const ADDR_AXIE_INFINITY_SHARD = "0x97a9107c1793bc407d6f527b77e7fff4d812bece";
const ADDR_RONIN_GATEWAY_PROXY_V3 = "0x0CF8fF40a508bdBc39fBe1Bb679dCBa64E65C7Df";

const ERROR_NO_API_KEY = "X-API-KEY not provided!";
const ERROR_EMPTY_URL = "URL is empty!";
const ERROR_NO_HEADERS = "headers is not defined!"
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
