import { SkynetWeb3Provider, URL_RONIN_SKYNET_RPC } from "../src";

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

  const metadata = {
    "name": "Axie",
    "traits": [
      {
        "trait": "eyes_id",
        "values": [
          "eyes-sleepless"
        ]
      }
    ],
    "rangeTraits": [
      {
        "trait": "breed_count",
        "from": 1,
        "to": 10000
      }
    ]
  };
  const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";
  console.log("With metadata: ", `${JSON.stringify(metadata)}`);
  const response = await provider.search_nfts_by_metadata(contractAddress, metadata);
  console.log(JSON.stringify(response.result.items));

  const emptyMetadata = { }
  console.log(`With empty metadata`);
  // @ts-ignore
  const response2 = await provider.search_nfts_by_metadata(contractAddress, emptyMetadata);
  console.log(JSON.stringify(response2.result.items));

}

main();