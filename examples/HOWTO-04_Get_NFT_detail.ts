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

  console.log('Get NFT detail');
  const contractAddress = '0x32950db2a7164ae833121501c797d79e7b79d74c';
  const tokenId = 10037309;
  let detailResponse = await provider.get_detail_of_nft(contractAddress, tokenId);
  console.log(detailResponse.result);
  console.log('Done!');
}

main();

