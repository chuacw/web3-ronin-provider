import { SkynetWeb3Provider } from "../src/web3-RoninSkynetProvider";
import { URL_RONIN_SKYNET_RPC } from "../src";

import 'dotenv/config';
require('dotenv').config({ path: '../.env' });

async function main() {
  const connectionInfo = {
    url: URL_RONIN_SKYNET_RPC,
    headers: {
      "X-API-KEY": process.env["X-API-KEY"] || ""
    }
  }
  const provider = new SkynetWeb3Provider(connectionInfo);

  console.log('Get all NFTs of an owner');
  const contractAddress = '0x0000b7c6ccc9dd223facd7f9f896fb1b6f130000';
  const MAX_LIMIT = 200;
  let count = 0;
  let ownerResponse = await provider.get_owned_nfts_of_address(contractAddress);
  do {
    for (const item of ownerResponse.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (ownerResponse.result.paging.nextCursor) {
      ownerResponse = await provider.get_owned_nfts_of_address(contractAddress, 
        MAX_LIMIT, ownerResponse.result.paging.nextCursor
      );
      count++;
    }
  } while ((ownerResponse.result.paging.nextCursor) && count < 2);
  console.log('Done!');
}

main();

