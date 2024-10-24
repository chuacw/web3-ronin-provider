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

  console.log('Check the owner of an NFT');
  console.log('Query 1');
  const contractAddress1 = '0x1f7c16fce4fc894143afb5545bf04f676bf7dcf3';
  const tokenId1 = 4836;
  await dump_NFT_owner(provider, contractAddress1, tokenId1);

  console.log();
  console.log();

  console.log('Query 2');
  const contractAddress2 = '0x814a9c959a3ef6ca44b5e2349e3bba9845393947';
  const tokenId2 = 2010068;
  await dump_NFT_owner(provider, contractAddress2, tokenId2);
}

main();

