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

  console.log('Get all token transfers of an NFT');
  const contractAddress = '0x029bb759353f6547fbe387e97869057849ab4d23';
  const tokenId = 102076;
  let token_transfers_of_nft_Response = await provider.token_transfers_of_nft(
    contractAddress, tokenId
  );

  do {
    for (const item of token_transfers_of_nft_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (token_transfers_of_nft_Response.result.paging.nextCursor) {
      token_transfers_of_nft_Response = await provider.token_transfers_of_nft(
        contractAddress, tokenId, 
        MAX_LIMIT, token_transfers_of_nft_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((token_transfers_of_nft_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

main();

