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

  console.log('Get all collections of an owner');
  const account = '0x0000b7c6ccc9dd223facd7f9f896fb1b6f130000';
  let list_of_collections_having_NFTs_Response = await provider.get_list_of_collections_having_NFTs(account);

  do {
    for (const item of list_of_collections_having_NFTs_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (list_of_collections_having_NFTs_Response.result.paging.nextCursor) {
      list_of_collections_having_NFTs_Response = await provider.get_list_of_collections_having_NFTs(account, 
        MAX_LIMIT, list_of_collections_having_NFTs_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((list_of_collections_having_NFTs_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

main();

