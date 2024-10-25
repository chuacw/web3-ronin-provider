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

  console.log('Get all token transfers of a wallet address');
  const contractAddress = '0xc591125e9770d0fc908c2ff1939b1ca2e27b9022';
  let token_tranfers_of_address_Response = await provider.get_token_tranfers_of_address(contractAddress);

  do {
    for (const item of token_tranfers_of_address_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (token_tranfers_of_address_Response.result.paging.nextCursor) {
      token_tranfers_of_address_Response = await provider.get_token_tranfers_of_address(contractAddress, 
        MAX_LIMIT, token_tranfers_of_address_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((token_tranfers_of_address_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

if (!process.env["DEBUG"]) {
  main();
}

export {
  main as HOWTO_09_Get_all_token_transfers_of_a_wallet_address
}
