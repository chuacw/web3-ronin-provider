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
  const MAX_LIMIT = 200;
  let count = 0;

  console.log('Get all transactions of a wallet address');
  const account = '0xc591125e9770d0fc908c2ff1939b1ca2e27b9022';
  let transactions_of_address_Response = await provider.get_transactions_of_address(
    account, 
  );

  do {
    for (const item of transactions_of_address_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (transactions_of_address_Response.result.paging.nextCursor) {
      transactions_of_address_Response = await provider.get_transactions_of_address(
        account,  
        MAX_LIMIT, transactions_of_address_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((transactions_of_address_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

main();

