// Author: chuacw, Singapore, Singapore

import { BigNumber } from "ethers";

const RONIN_MAINNET_RPC = 'https://api-gateway.skymavis.com/rpc';
const RONIN_TESTNET_RPC = 'https://api-gateway.skymavis.com/rpc/testnet';
const RONIN_SKYNET_RPC = 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2';
const RONIN_MAINNET_WSS = 'wss://api-gateway.skymavis.com/rpc/socket';
const UINT256_MAX = BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const ADDR_AXIE_INFINITY_SHARD = "0x97a9107c1793bc407d6f527b77e7fff4d812bece";
const ADDR_RONIN_GATEWAY_PROXY_V3 = "0x0CF8fF40a508bdBc39fBe1Bb679dCBa64E65C7Df";

export {
  RONIN_SKYNET_RPC,
  ADDR_AXIE_INFINITY_SHARD,
  ADDR_RONIN_GATEWAY_PROXY_V3,
  RONIN_MAINNET_RPC,
  RONIN_TESTNET_RPC,
  RONIN_MAINNET_WSS,
  UINT256_MAX
}
