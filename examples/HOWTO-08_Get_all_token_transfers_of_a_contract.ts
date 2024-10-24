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
  const MAX_LIMIT = 200;
  let count = 0;

  console.log('Get all token transfers of a contract');
  const contractAddress = '0x32950db2a7164ae833121501c797d79e7b79d74c';
  let collection_token_transfers_Response = await provider.collection_token_transfers(contractAddress);

  do {
    for (const item of collection_token_transfers_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (collection_token_transfers_Response.result.paging.nextCursor) {
      collection_token_transfers_Response = await provider.collection_token_transfers(contractAddress, 
        MAX_LIMIT, collection_token_transfers_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((collection_token_transfers_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

main();

