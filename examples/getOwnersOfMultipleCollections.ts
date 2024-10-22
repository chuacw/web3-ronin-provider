import 'dotenv/config';
import { SkynetWeb3Provider } from '../src/web3-RoninSkynetProvider';
import { Tokens } from '../src/web3-ronin-consts-tokens';
import * as fs from 'fs';

require('dotenv').config();

/**
 * Finds duplicate and unique elements and returns them
 *
 * @template T
 * @param {T[]} arr An array of T items
 * @returns {{duplicates: T[], unique: T[] }}
 */
function findDuplicates<T>(arr: T[]): { duplicates: T[], unique: T[] } {
  const seen = new Set<T>();
  const duplicates = new Set<T>();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  const result = {
    duplicates: Array.from(duplicates),
    unique: Array.from(seen)
  };
  return result;
}

async function main() {
  const connectionInfo = {
    url: 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2',
    headers: {
      "X-API-KEY": process.env.X_API_KEY || ""
    }
  };
  const provider = new SkynetWeb3Provider(connectionInfo);
  const contractAddresses = [
    Tokens.AXIE,
    Tokens.AXIE_ACCESSORY,
    Tokens.AXIE_LAND,
    Tokens.AXIE_LAND_ITEM,
    Tokens.FIGHT_LEAGUE_CHIPS,
    Tokens.KAIDROJOURNAL,
    Tokens.RAGNAROK_MONSTERS,
    Tokens.RUNIVERSE_ITEM,
    Tokens.WILDFORESTUNITS,
    Tokens.WILD_FOREST_SKINS,
    Tokens.WILD_FOREST_UNITS
  ];
  const contracts_details = await provider.multiple_contracts_details(contractAddresses);
  console.log(contracts_details);
  let holders: string[] = [];
  for (const item of contracts_details.result.items) {
    let done = false; let nextCursor: string | undefined; const limit = 200;
    let count = 0;
    do {
      const holder_list_response = await provider.collection_holder_list(item.address, limit, nextCursor);
      if (holder_list_response.result.paging) {
        nextCursor = holder_list_response.result.paging.nextCursor;
        count += holder_list_response.result.items.length;
        done = nextCursor === '' || count >= 2_000;
      }
      holder_list_response.result.items.map((value) => holders.push(value.address));
    }
    while (!done);
  }
  console.log(holders);
  const { duplicates: dups } = findDuplicates(holders); // These are owners holding multiple collections
  console.log(dups);
  const filePath = 'addresses.txt';
  fs.writeFileSync(filePath, dups.join('\n'), 'utf-8');
}

main();