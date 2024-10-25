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

  console.log('Get all logs of a contract');
  const account = '0xa8754b9fa15fc18bb59458815510e40a12cd2014';
  let get_logs_by_contract_address_Response = await provider.get_logs_by_contract_address(
    account
  );

  do {
    for (const item of get_logs_by_contract_address_Response.result.items) {
      console.log('-'.repeat(60));
      console.log(item);
      console.log('-'.repeat(60));
    }
    if (get_logs_by_contract_address_Response.result.paging.nextCursor) {
      get_logs_by_contract_address_Response = await provider.get_logs_by_contract_address(
        account, 
        MAX_LIMIT, get_logs_by_contract_address_Response.result.paging.nextCursor
      );
      count++;
    }
  } while ((get_logs_by_contract_address_Response.result.paging.nextCursor) && count < 2);

  console.log('Done!');
}

main();

