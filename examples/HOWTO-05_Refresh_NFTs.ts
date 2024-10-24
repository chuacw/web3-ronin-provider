import { SkynetWeb3Provider } from "../src/web3-RoninSkynetProvider";
import { URL_RONIN_SKYNET_RPC } from "../src";

import 'dotenv/config';
require('dotenv').config();

async function main() {
  const connectionInfo = {
    url: URL_RONIN_SKYNET_RPC,
    headers: {
      "X-API-KEY": process.env["X-API-KEY"] || ""
    }
  }
  const provider = new SkynetWeb3Provider(connectionInfo);

  console.log('Get NFT detail');
  const contractAddress = '0x32950db2a7164ae833121501c797d79e7b79d74c';
  const tokenIds = ["2010025", "2010026"];
  const timeOutMs = 10000;
  let refresh_nfts_Response = await provider.refresh_nfts_of_collection_sync(contractAddress, tokenIds, timeOutMs);
  console.log(refresh_nfts_Response.result);
  console.log('Done!');
}

main();

