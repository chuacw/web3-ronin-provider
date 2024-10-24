import { SkynetWeb3Provider } from "../src/web3-RoninSkynetProvider";
import { URL_RONIN_SKYNET_RPC } from "../src";

import 'dotenv/config';
require('dotenv').config();

async function dump_NFT_owner(provider: SkynetWeb3Provider, contractAddress: string, tokenId: number) {
  let ownerResponse = await provider.owners_of_nft(contractAddress, tokenId);
  do {
    for (const item of ownerResponse.result.items) {
      console.log('-'.repeat(60));
      console.log(`Item addr: ${item.address}`);
      console.log(`balance: ${item.balance}`);
      console.log('-'.repeat(60));
    }
    if (ownerResponse.result.paging.nextCursor) {
      ownerResponse = await provider.owners_of_nft(contractAddress, tokenId);
    }
  } while (ownerResponse.result.paging.nextCursor);
}

async function main() {
  const connectionInfo = {
    url: URL_RONIN_SKYNET_RPC,
    headers: {
      "X-API-KEY": process.env["X-API-KEY"] || ""
    }
  }
  const provider = new SkynetWeb3Provider(connectionInfo);

  console.log('Get all NFTs of a collection');
  const contractAddress = '0x32950db2a7164ae833121501c797d79e7b79d74c';
  const MAX_LIMIT = 200;
  let count = 0;
  let ownerResponse = await provider.nfts_from_collection(contractAddress);
  do {
    for (const item of ownerResponse.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (ownerResponse.result.paging.nextCursor) {
      ownerResponse = await provider.nfts_from_collection(contractAddress, 
        MAX_LIMIT, ownerResponse.result.paging.nextCursor
      );
      count++;
    }
  } while ((ownerResponse.result.paging.nextCursor) && count < 2);
  console.log('Done!');
}

main();

