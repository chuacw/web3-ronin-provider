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

  console.log('Get all owners of a collection');
  const contractAddress = '0xa038c593115f6fcd673f6833e15462b475994879';
  let collection_holder_list_Response = await provider.get_collection_holder_list(contractAddress);

  console.log(collection_holder_list_Response.result);
  do {
    for (const item of collection_holder_list_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (collection_holder_list_Response.result.paging.nextCursor) {
      collection_holder_list_Response = await provider.get_collection_holder_list(contractAddress, 
        MAX_LIMIT, collection_holder_list_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((collection_holder_list_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

main();

