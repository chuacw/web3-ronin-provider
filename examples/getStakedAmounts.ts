import { BigNumber } from "@ethersproject/bignumber";
import { activityTypes } from "../src/web3-ronin-types-accounts";
import { SkynetWeb3Provider } from "../src/web3-RoninSkynetProvider";
import { fromBlockchainTimestamp } from "delphirtl/DateUtils"
import 'dotenv/config';
import { URL_RONIN_SKYNET_RPC } from "../src";
require('dotenv').config();

async function main() {
  const connectionInfo = {
    url: URL_RONIN_SKYNET_RPC,
    headers: {
      "X-API-KEY": process.env.X_API_KEY || ""
    }
  }
  const provider = new SkynetWeb3Provider(connectionInfo);
  const account_addr = '0xf22a97a220392b1311f5ecde3175ec07fa21154b';
  const searchCriteria = {activityTypes: [activityTypes.Stake],  
    fromBlock: 38763329,
    toBlock: 39065409,
  };
  const search_result = await provider.search(account_addr, searchCriteria);
  let bnStakedAmount: BigNumber = BigNumber.from(0);
  let firstStakedFound = false;
  for(const item of search_result.result.items) {
    if (item.details.sends) {
      for (const send of item.details.sends) {
        if (!firstStakedFound) {
          firstStakedFound = true;
          const firstStakeDate = fromBlockchainTimestamp(item.blockTime);
          console.log("First staked on: ", firstStakeDate.toISOString());
        }
        const amount = BigNumber.from(send.amount);
        bnStakedAmount = bnStakedAmount.add(amount);
      }
    }
  }
  let stakedAmount = bnStakedAmount;
  console.log("stakedAmount: ", stakedAmount.toString());
}

main();