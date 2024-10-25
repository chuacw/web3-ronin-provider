// Author: chuacw, Singapore, Singapore

// import { haveNoDuplicates } from 'delphirtl/ArrayUtils';
// import { SkynetWeb3Provider, SkynetWeb3ProviderV2 } from '../src/web3-RoninSkyNetProvider';

// import 'dotenv/config';
// import { activityTypes } from '../src/web3-ronin-types-accounts';
// import { block_by_hash_timestamp_block_number_range_result1, block_by_hash_timestamp_block_number_range_result2, block_by_hash_timestamp_block_number_range_result3, block_by_hash_timestamp_block_number_range_result4, block_by_hash_timestamp_block_number_range_result5 } from './expected_results/block_by_hash_timestamp_block_number_range';
// import { EEmptyHeaders, EEmptyUrl, ENoApiKey, ENoHeaders, ERROR_NO_API_KEY, Tokens, URL_RONIN_MAINNET_RPC, URL_RONIN_SKYNET_RPC } from "../src";
// require('dotenv').config();

// const TIMEOUT = 100000000;

// describe('SkynetWeb3Provider', () => {

//   class testSkynetWeb3Provider extends SkynetWeb3Provider {
//     public update_url_with_Params(url: string, params: string | URLSearchParams): string {
//       return super.update_url_with_Params(url, params);
//     }

//     public update_url(url: string, limit?: number, cursor?: string): string {
//       return super.update_url(url, limit, cursor);
//     }
//   }

//   let provider: testSkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = { url: URL_RONIN_SKYNET_RPC, headers: { "X-API-KEY": process.env["X-API-KEY"] || "" } };
//     provider = new testSkynetWeb3Provider(connectionInfo);
//   });

//   test('creating SkynetWeb3Provider with empty URL', () => {
//     const connectionInfo = {
//       url: "",
//     };
//     expect(() => { const provider = new SkynetWeb3Provider(connectionInfo); }).toThrow(new EEmptyUrl());
//   });

//   test('creating SkynetWeb3Provider without headers', () => {
//     const connectionInfo = {
//       url: URL_RONIN_MAINNET_RPC,
//     };
//     expect(() => { const provider = new SkynetWeb3Provider(connectionInfo); }).toThrow(new ENoHeaders());
//   });

//   test('creating SkynetWeb3Provider with empty headers', () => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//       }
//     }
//     expect(() => { const provider = new SkynetWeb3Provider(connectionInfo); }).toThrow(new EEmptyHeaders());
//   });

//   test('creating SkynetWeb3Provider with empty API key', () => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": ""
//       }
//     }
//     expect(() => { const provider = new SkynetWeb3Provider(connectionInfo); }).toThrow(new ENoApiKey());
//   });

//   test('search with no params', () => {
//     const url = provider.update_url_with_Params('yyy', '');
//     expect(url).toBe('yyy');
//   }, TIMEOUT);

//   test('search with 1 param', () => {
//     const urlParams = new URLSearchParams(); urlParams.append('limit', '1');
//     const url = provider.update_url_with_Params('lll', urlParams);
//     expect(url).toBe('lll?limit=1')
//   }, TIMEOUT);

//   test('search with string param', () => {
//     const urlParams = new URLSearchParams(); urlParams.append('limit', '2');
//     const url = provider.update_url_with_Params('lll', urlParams.toString());
//     expect(url).toBe('lll?limit=2')
//   }, TIMEOUT);

//   test('search with 2 params', () => {
//     const urlParams = new URLSearchParams(); urlParams.append('limit', '3'); urlParams.append('cursor', 'mycursor');
//     const url = provider.update_url_with_Params('zzz', urlParams);
//     expect(url).toBe('zzz?limit=3&cursor=mycursor');
//   }, TIMEOUT);

//   test('update_url with no params', () => {
//     const url = provider.update_url('/a');
//     expect(url).toBe('/a');
//   }, TIMEOUT)

//   test('update_url with limit', () => {
//     const url = provider.update_url('/a', 1);
//     expect(url).toBe('/a?limit=1');
//   }, TIMEOUT)

//   test('update_url with limit and cursor', () => {
//     const url = provider.update_url('/a', 1, 'nocursor');
//     expect(url).toBe('/a?limit=1&cursor=nocursor');
//   }, TIMEOUT)

// });

// describe('Accounts', () => {

//   let provider: SkynetWeb3ProviderV2;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3ProviderV2(connectionInfo);
//   });

//   test('search', async () => {
//     const contract_addr: string = '0xf22a97a220392b1311f5ecde3175ec07fa21154b';
//     const result1 = await provider.search(contract_addr);
//     expect(result1.items.length).toBe(20);
//   }, TIMEOUT);

//   test('search Approve', async () => {
//     const contract_addr = '0x9317ff979e76b72afc04faa13565643a3ebefc50';
//     const searchCriteria = {
//       activityTypes: [activityTypes.Approve], limit: 10,
//       fromBlock: 39072391,
//       toBlock: 39172391,
//     };
//     const result1 = await provider.search(contract_addr, searchCriteria);
//     expect(result1.result.items.length).toBeLessThanOrEqual(searchCriteria.limit);
//     expect(result1.result.items.length).toBeGreaterThan(0);
//     expect(result1.result.items[0].activity).toBe(activityTypes.Approve);
//   }, TIMEOUT);

//   test('search Stake', async () => {
//     const account_addr = '0xf22a97a220392b1311f5ecde3175ec07fa21154b';
//     const searchCriteria = {
//       activityTypes: [activityTypes.Stake],
//       fromBlock: 38763329,
//       toBlock: 39065409,
//     };
//     const result1 = await provider.search(account_addr, searchCriteria);
//     expect(result1.result.items.length).toBeLessThanOrEqual(20);
//     expect(result1.result.items.length).toBeGreaterThan(0);
//     expect(result1.result.items[0].activity).toBe(activityTypes.Stake);
//   }, TIMEOUT);

//   test('owned_nfts_of', async () => {
//     const address = '0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3';
//     const result = await provider.get_owned_nfts_of_address(address);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0);
//   });

//   test('fungible_token_balance', async () => {
//     const address = '0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3';
//     const result = await provider.get_fungible_token_balance(address);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0);
//   });

//   test('list_of_collections_having_NFTs', async () => {
//     const address = '0xf6fd5fca4bd769ba495b29b98dba5f2ecf4ceed3';
//     const result = await provider.get_list_of_collections_having_NFTs(address);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0);
//   });

//   test('nft_list_of_address_and_contract', async () => {
//     const account = '0x0addff455fca85f4cf54869fa224c804950cc06a';
//     const contractAddr = Tokens.AXIE;
//     const result = await provider.get_nft_list_of_address_and_contract(account, contractAddr);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0)
//   });

//   test('balance_of_address_and_contract', async () => {
//     const account = '0x0addff455fca85f4cf54869fa224c804950cc06a';
//     const contractAddr = Tokens.AXIE;
//     const result = await provider.get_balance_of_address_and_contract(account, contractAddr);
//     expect(result.result.tokenCount).toBeGreaterThanOrEqual(0);
//   });

//   test('balances_of_address_by_multiple_contracts', async () => {
//     const account = '0x0addff455fca85f4cf54869fa224c804950cc06a';
//     const contractAddresses = [
//       "0x32950db2a7164ae833121501c797d79e7b79d74c",
//       "0xa038c593115f6fcd673f6833e15462b475994879",
//       "0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa",
//       "0xd78efaec85c1a4f42e6edb7209067702a2be8c90",
//       "0x883649b1d9e8b6d69ac9c36ca58531419d7dda8f"
//     ];
//     const result = await provider.get_balances_of_address_by_multiple_contracts(account, contractAddresses);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0);
//   });

//   test('token_tranfers_of_address', async () => {
//     const account = '0x0addff455fca85f4cf54869fa224c804950cc06a';
//     const result = await provider.get_token_tranfers_of_address(account);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0);
//   });

// });

// describe('Blocks', () => {

//   let provider: SkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3Provider(connectionInfo);
//   });

//   test('finalized_block_number', async () => {
//     const result = await provider.get_finalized_block_number();
//     expect(result.result.blockNumber).toBeGreaterThan(0);
//   });

//   test('latest_block_number', async () => {
//     const result = await provider.get_latest_block_number();
//     expect(result.result.blockNumber).toBeGreaterThan(0);
//   });

//   test('transactions_by_block_number', async () => {
//     const block_number = 37493455;
//     const result = await provider.get_transactions_by_block_number(block_number);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(0);
//     expect(result.result.items[0].blockNumber).toBe(block_number);
//   });

//   test('block_by_number', async () => {
//     const block_number = 37493455;
//     const result = await provider.get_block_by_number(block_number);
//     expect(result.result.number).toBe(block_number);
//   });

//   test('block_by_hash_timestamp_block_number_range - no optional params', async () => {
//     const hash = '0xf241192450b62481427398b0e3942f09abc1b69926de44b1cc4533516e61996c';
//     const timestamp = 1729489100;
//     const fromBlock = 39216300; const toBlock = 39216311;
//     const result = await provider.get_block_by_hash_timestamp_block_number_range(fromBlock, toBlock);
//     const jsonResult = JSON.stringify(result);
//     const expectedJsonResult = JSON.stringify(block_by_hash_timestamp_block_number_range_result1);
//     expect(jsonResult).toBe(expectedJsonResult);
//   }, TIMEOUT);

//   test('block_by_hash_timestamp_block_number_range - empty params', async () => {
//     const hash = '0xf241192450b62481427398b0e3942f09abc1b69926de44b1cc4533516e61996c';
//     const timestamp = 1729489100;
//     const fromBlock = 39216300; const toBlock = 39216311;
//     const result = await provider.get_block_by_hash_timestamp_block_number_range(fromBlock, toBlock, {});
//     const jsonResult = JSON.stringify(result);
//     const expectedJsonResult = JSON.stringify(block_by_hash_timestamp_block_number_range_result2);
//     expect(jsonResult).toBe(expectedJsonResult);
//   }, TIMEOUT);

//   test('block_by_hash_timestamp_block_number_range - params hash', async () => {
//     const hash = '0xf241192450b62481427398b0e3942f09abc1b69926de44b1cc4533516e61996c';
//     const timestamp = 1729489100;
//     const fromBlock = 39216300; const toBlock = 39216311;
//     const result = await provider.get_block_by_hash_timestamp_block_number_range(fromBlock, toBlock, { hash });
//     const jsonResult = JSON.stringify(result);
//     const expectedJsonResult = JSON.stringify(block_by_hash_timestamp_block_number_range_result3);
//     expect(jsonResult).toBe(expectedJsonResult);
//   }, TIMEOUT);

//   test('block_by_hash_timestamp_block_number_range - params timestamp', async () => {
//     const hash = '0xf241192450b62481427398b0e3942f09abc1b69926de44b1cc4533516e61996c';
//     const timestamp = 1729489100;
//     const fromBlock = 39216300; const toBlock = 39216311;
//     const result = await provider.get_block_by_hash_timestamp_block_number_range(fromBlock, toBlock, { timestamp });
//     const jsonResult = JSON.stringify(result);
//     const expectedJsonResult = JSON.stringify(block_by_hash_timestamp_block_number_range_result4);
//     expect(jsonResult).toBe(expectedJsonResult);
//   }, TIMEOUT);

//   test('block_by_hash_timestamp_block_number_range - params timestamp and hash', async () => {
//     const hash = '0xf241192450b62481427398b0e3942f09abc1b69926de44b1cc4533516e61996c';
//     const timestamp = 1729489100;
//     const fromBlock = 39216300; const toBlock = 39216311;
//     const result = await provider.get_block_by_hash_timestamp_block_number_range(fromBlock, toBlock, { timestamp, hash });
//     const jsonResult = JSON.stringify(result);
//     const expectedJsonResult = JSON.stringify(block_by_hash_timestamp_block_number_range_result5);
//     expect(jsonResult).toBe(expectedJsonResult);
//   }, TIMEOUT);

// });

// describe('Collections', () => {

//   let provider: SkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3Provider(connectionInfo);
//   });

//   test('owners_of_nft', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_owners_of_nft(contract_addr, 3067049);
//     const expected = '{"result":{"items":[{"address":"0xf22a97a220392b1311f5ecde3175ec07fa21154b","balance":"1"}],"paging":{}}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('token_transfers_of_nft', async () => {
//     const contract_addr = '0x12b707c3d2786570cfdc3a998a085b62acdba4b3';
//     const result1 = await provider.get_token_transfers_of_nft(contract_addr, 1099511627776);
//     expect(result1.result.items.length).toBeGreaterThanOrEqual(20);
//   }, TIMEOUT);

//   test('token_transfers_of_nft limit=2', async () => {
//     const contract_addr = '0x12b707c3d2786570cfdc3a998a085b62acdba4b3';
//     const result1 = await provider.get_token_transfers_of_nft(contract_addr, 1099511627776, 2);
//     expect(result1.result.items.length).toBe(2);
//   }, TIMEOUT);

//   test('token_transfers_of_nft limit=2, nextCursor=...', async () => {
//     const contract_addr = '0x12b707c3d2786570cfdc3a998a085b62acdba4b3';
//     const result2 = await provider.get_token_transfers_of_nft(contract_addr, 1099511627776, 2, 'MzkxNjA1MTg6NTg6MTA5OTUxMTYyNzc3Ng==');
//     const expected2 = '{"result":{"items":[{"blockNumber":39160470,"logIndex":19,"tokenId":"1099511627776","contractAddress":"0x12b707c3d2786570cfdc3a998a085b62acdba4b3","tokenStandard":"ERC1155","decimals":0,"from":"0x4fd2883af650625ae7901861a4896720cdfcdea8","to":"0x0000000000000000000000000000000000000000","value":"200","blockHash":"0xb7f6128d3733706c3ecf0000ff98f5dc90278aeebe38ed966e03a19e825cc6f1","transactionHash":"0xe11f03f07fe9219bce709f345c198d38b3301b8a5dfc49d8b8fda052ed93659f","blockTime":1729321541},{"blockNumber":39160454,"logIndex":29,"tokenId":"1099511627776","contractAddress":"0x12b707c3d2786570cfdc3a998a085b62acdba4b3","tokenStandard":"ERC1155","decimals":0,"from":"0x84f5ba48c6dec26b2f08ca0742832a79dc72fc6c","to":"0x7ed8fe84a2149a7d8253ee2bd321ef3a1be52ce5","value":"1","blockHash":"0x0b39d2e7ba46a26ddd41b93085ebe8ded5a6dddb5308a1be07cd7f24d55e601d","transactionHash":"0xdbdf712f8b0f15b95abfba052fa147fdc211ace1280a4cbaa06ec19150fda1ee","blockTime":1729321493}],"paging":{"nextCursor":"MzkxNjA0NTQ6Mjk6MTA5OTUxMTYyNzc3Ng=="}}}';
//     const jsonResult2 = JSON.stringify(result2);
//     expect(jsonResult2).toBe(expected2);
//   }, TIMEOUT);

//   test('detail_of_nft', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_detail_of_nft(contract_addr, 3067049);
//     const expected = '{"result":{"tokenId":"3067049","contractAddress":"0x32950db2a7164ae833121501c797d79e7b79d74c","name":"Axie","symbol":"AXIE","standard":"ERC721","tokenUri":"https://metadata.axieinfinity.com/axie/3067049","metadata":{"external_url":"https://app.axieinfinity.com/marketplace/axies/3067049","genes":"0x20000000000001000081a030830c0000000100102880840200010010208084080001000c188104080001001008814406000100101880c40c0001001008808206","id":3067049,"image":"https://axiecdn.axieinfinity.com/axies/3067049/axie/axie-full-transparent.png","name":"Axie #3067049","properties":{"axie_id":3067049,"back_id":"back-goldfish","birthdate":1627655196,"bodyshape":"fuzzy","breed_count":3,"class":"aquatic","ears_id":"ears-rosa","eyes_id":"eyes-telescope","horn_id":"horn-babylonia","matron_id":2759571,"mouth_id":"mouth-risky-fish","num_japan":0,"num_mystic":0,"num_shiny":0,"num_summer":0,"num_xmas":0,"primary_color":"aquatic-02","pureness":5,"purity":86,"sire_id":2759555,"stage":4,"tail_id":"tail-koi","title":""}}}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('refresh_nfts_of_collection_sync', async () => {
//     const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";
//     const tokenIds = ["12082245", "12082246", "12082247"];
//     const result = await provider.refresh_nfts_of_collection_sync(contractAddress, tokenIds, 0);
//     expect(result.result.failures.length + result.result.successes.length).toBe(tokenIds.length);
//   }, TIMEOUT);

//   test('refresh_nfts_of_collection_async', async () => {
//     const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";
//     const tokenIds = ["12082247"];
//     const result = await provider.refresh_nfts_of_collection_async(contractAddress, tokenIds);
//     expect(result.result).toBe('ok');
//   }, TIMEOUT);

//   test('details_of_multiple_nfts', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const tokenIds = ['9602855', '4697398']
//     const result = await provider.get_details_of_multiple_nfts(contract_addr, tokenIds);
//     const expected = '{"result":{"items":[{"tokenId":"4697398","contractAddress":"0x32950db2a7164ae833121501c797d79e7b79d74c","name":"Axie","symbol":"AXIE","standard":"ERC721","tokenUri":"https://metadata.axieinfinity.com/axie/4697398","metadata":{"external_url":"https://app.axieinfinity.com/marketplace/axies/4697398","genes":"0x200000000000010002412000c3080000000100042841040400010008208102080001000c30010306000100103001820c00010010182045060001001028814506","id":4697398,"image":"https://axiecdn.axieinfinity.com/axies/4697398/axie/axie-full-transparent.png","name":"Axie #4697398","properties":{"axie_id":4697398,"back_id":"back-goldfish","birthdate":1629488054,"bodyshape":"normal","breed_count":1,"class":"aquatic","ears_id":"ears-lotus","eyes_id":"eyes-kotaro","horn_id":"horn-shoal-star","matron_id":4286819,"mouth_id":"mouth-hungry-bird","num_japan":0,"num_mystic":0,"num_shiny":0,"num_summer":0,"num_xmas":0,"primary_color":"aquatic-03","pureness":3,"purity":45,"sire_id":4286864,"stage":4,"tail_id":"tail-navaga","title":""}}},{"tokenId":"9602855","contractAddress":"0x32950db2a7164ae833121501c797d79e7b79d74c","name":"Axie","symbol":"AXIE","standard":"ERC721","tokenUri":"https://metadata.axieinfinity.com/axie/9602855","metadata":{"external_url":"https://app.axieinfinity.com/marketplace/axies/9602855","genes":"0x180000000000010001018040c20c000000010004206084040001000c086041080001000c28618306000100043021010c0001000c30a145080001000c30604302","id":9602855,"image":"https://axiecdn.axieinfinity.com/axies/9602855/axie/axie-full-transparent.png","name":"Axie #9602855","properties":{"axie_id":9602855,"back_id":"back-pumpkin","birthdate":1637764766,"bodyshape":"normal","breed_count":2,"class":"plant","ears_id":"ears-hollow","eyes_id":"eyes-nerdy","horn_id":"horn-leaf-bug","matron_id":9324478,"mouth_id":"mouth-serious","num_japan":0,"num_mystic":0,"num_shiny":0,"num_summer":0,"num_xmas":0,"primary_color":"plant-03","pureness":4,"purity":65,"sire_id":9280981,"stage":4,"tail_id":"tail-hot-butt","title":""}}}]}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('nfts_from_collection', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_nfts_from_collection(contract_addr);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(20);
//   }, TIMEOUT);

//   test('number_of_collection_holdings_by_address', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const address = '0x98cc924636d1151f9cf8d1745c8d09d02170aeef';
//     const result2 = await provider.get_number_of_collection_holdings_by_address(contract_addr, address);
//     expect(result2.result.address).toBe(address);
//     // expect(result2.result.items.length).toBeGreaterThanOrEqual(20);
//     // const nfts = result2.result.items;
//     // const nft = nfts.find((value, index, items) => value.tokenId === '359432279731791712112509556179031889493973264');
//     // expect(nft).toBeTruthy();
//   }, TIMEOUT);

//   test('collection_holder_list', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_collection_holder_list(contract_addr);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(20);
//   }, TIMEOUT);

//   test('collection_holder_list limit=3', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result1 = await provider.get_collection_holder_list(contract_addr, 3);
//     expect(result1.result.items.length).toBe(3);
//   }, TIMEOUT);

//   test('collection_holder_list limit=4 paging=...', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result1 = await provider.get_collection_holder_list(contract_addr, 3);
//     const result2 = await provider.get_collection_holder_list(contract_addr, 4, result1.result.paging.nextCursor);
//     expect(result2.result.items.length).toBe(4);
//     const dupResult = haveNoDuplicates(result2.result.items, result1.result.items, 'address');
//     expect(dupResult).toBe(true);
//   }, TIMEOUT);

//   test('collection_token_transfers', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_collection_token_transfers(contract_addr);
//     expect(result.result.items.length).toBeGreaterThanOrEqual(20);
//   }, TIMEOUT);

//   test('collection_detail', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_collection_detail(contract_addr);
//     expect(result.result.contractAddress).toBe(contract_addr);
//   }, TIMEOUT);

//   test('details_of_multiple_collections', async () => {
//     const contractAddresses = [
//       "0x2a6120978d3f868299aa020303b93b9a90f257cf",
//       "0x578b65568b7a6a081a477748590774a64d8a4923"
//     ]
//     const result = await provider.get_details_of_multiple_collections(contractAddresses);
//     expect(result.result.items.length).toBe(contractAddresses.length);
//   }, TIMEOUT);


// });

// describe('Contracts', () => {

//   let provider: SkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3Provider(connectionInfo);
//   });

//   test('contract_detail', async () => {
//     const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
//     const result = await provider.get_detail_of_contract(contract_addr);
//     const expected = '{"result":{"address":"0x32950db2a7164ae833121501c797d79e7b79d74c","name":"Axie","symbol":"AXIE","standard":"ERC721","creator":"0xf20fe980677d703a0a1fe5f38cc9ab0f1452ca11","createdAtBlock":2678592,"verifiedName":"Axie Proxy","verifiedSymbol":"AXIE","verifiedStandard":"ERC721"}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('multiple_contracts_details', async () => {
//     const contract_addrs = ['0x32950db2a7164ae833121501c797d79e7b79d74c', '0x05b0bb3c1c320b280501b86706c3551995bc8571'];
//     const result = await provider.get_details_of_multiple_contracts(contract_addrs);
//     const expected = '{"result":{"items":[{"address":"0x05b0bb3c1c320b280501b86706c3551995bc8571","standard":"UNKNOWN","creator":"0xf20fe980677d703a0a1fe5f38cc9ab0f1452ca11","createdAtBlock":7132505,"verifiedName":"AXS Staking Pool","verifiedStandard":"UNKNOWN"},{"address":"0x32950db2a7164ae833121501c797d79e7b79d74c","name":"Axie","symbol":"AXIE","standard":"ERC721","creator":"0xf20fe980677d703a0a1fe5f38cc9ab0f1452ca11","createdAtBlock":2678592,"verifiedName":"Axie Proxy","verifiedSymbol":"AXIE","verifiedStandard":"ERC721"}]}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

// });

// describe('Logs', () => {
//   let provider: SkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3Provider(connectionInfo);
//   });

//   test('Get logs by contract address', async () => {
    
//   });

//   test('Get logs by contract address and log topic', async () => {

//   });

// });

// describe('Txs', () => {
//   let provider: SkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3Provider(connectionInfo);
//   });

//   test('internal_txs', async () => {
//     let txHash = '0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba';
//     const result = await provider.get_internal_transaction_of_transaction(txHash);
//     const expected = '{"result":{"items":[{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":90,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x3d8527ba","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":309,"opcode":"CALL","type":"call","value":"0x0","input":"0x8fb2e2c200000000000000000000000005b0bb3c1c320b280501b86706c3551995bc8571","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":391,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x8fb2e2c200000000000000000000000005b0bb3c1c320b280501b86706c3551995bc8571","from":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","to":"0xe1147ff24e404ba38202ea4aee04191ef0890db2","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":733,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x61ee98dc","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":1846,"opcode":"CALL","type":"call","value":"0x0","input":"0x80cde84d000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":1936,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x80cde84d000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b","from":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","to":"0xe1147ff24e404ba38202ea4aee04191ef0890db2","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":2757,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x74363daa000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":3399,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x74363daa000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":4253,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x69940d79","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":4648,"opcode":"CALL","type":"call","value":"0x0","input":"0xa9059cbb000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b0000000000000000000000000000000000000000000000002accc8926127d8e4","from":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","to":"0x97a9107c1793bc407d6f527b77e7fff4d812bece","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":5512,"opcode":"CALL","type":"call","value":"0x0","input":"0x23b872dd000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b00000000000000000000000005b0bb3c1c320b280501b86706c3551995bc85710000000000000000000000000000000000000000000000002accc8926127d8e4","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0x97a9107c1793bc407d6f527b77e7fff4d812bece","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":6175,"opcode":"CALL","type":"call","value":"0x0","input":"0x73939bb5000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b0000000000000000000000000000000000000000000000b511830293c06f0025","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":6265,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x73939bb5000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b0000000000000000000000000000000000000000000000b511830293c06f0025","from":"0x8bd81a19420bad681b7bfc20e703ebd8e253782d","to":"0xe1147ff24e404ba38202ea4aee04191ef0890db2","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108},{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","order":7024,"opcode":"DELEGATECALL","type":"call","value":"0x0","input":"0x74363daa000000000000000000000000f22a97a220392b1311f5ecde3175ec07fa21154b","from":"0x05b0bb3c1c320b280501b86706c3551995bc8571","to":"0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7","success":true,"error":"","blockNumber":39128332,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockTime":1729225108}]}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('internal_txs_detail', async () => {
//     let txHash = '0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba';
//     const result = await provider.get_detail_of_transaction(txHash);
//     const expected = '{"result":{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","transactionIndex":15,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockNumber":39128332,"from":"0xf22a97a220392b1311f5ecde3175ec07fa21154b","to":"0x05b0bb3c1c320b280501b86706c3551995bc8571","contractAddress":"","status":1,"gas":331018,"gasPrice":"0x4a817c800","effectiveGasPrice":"0x4a817c800","gasUsed":164810,"cumulativeGasUsed":1561246,"logsBloom":"0x00000000080000000000000000410000000000001000000000000000000000002000840000000000002000000000000000004000000000000000000000080004100040000000000000020008010000000000000000000000000400000000000080000000000000000000000008000000000000000000000080000010100000000100000000000000000000000000000000000000102000000000000000000000008000000080000000000000000000000000000000000000000000004200000000000802000000000000000080000000000000000000000010000000000000000000000000002000000020020000000000000000000000000000000400000020","input":"0x3d8527ba","nonce":35,"value":"0x0","type":0,"v":"0xfeb","r":"0x9a133b81eeea377259a7b783595010d31204318c2515fff1fb8d5d1852c5c147","s":"0x69836d6d40b8a9545899e310785f7036f6f6c051421d6c2865212307cdcecd2f","blockTime":1729225108}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('multiple_txs_details', async () => {
//     let txHashes = [
//       "0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba",
//       "0x313153ee84e7b6019800fe73aa414fe9b7c5be676d1ae398d82a17b254460bd8"
//     ];
//     const result = await provider.get_details_of_multiple_transactions(txHashes);
//     const expected = '{"result":{"items":[{"transactionHash":"0xfbe5f6a0e8c57027cc97bb011120fcc12ea00b6bc6a45a7748c27d7f7e7756ba","transactionIndex":15,"blockHash":"0xf3e5613691e8feb9def25d680b1ec29d44191622c245f4b42db19911eff50fac","blockNumber":39128332,"from":"0xf22a97a220392b1311f5ecde3175ec07fa21154b","to":"0x05b0bb3c1c320b280501b86706c3551995bc8571","contractAddress":"","status":1,"gas":331018,"gasPrice":"0x4a817c800","effectiveGasPrice":"0x4a817c800","gasUsed":164810,"cumulativeGasUsed":1561246,"logsBloom":"0x00000000080000000000000000410000000000001000000000000000000000002000840000000000002000000000000000004000000000000000000000080004100040000000000000020008010000000000000000000000000400000000000080000000000000000000000008000000000000000000000080000010100000000100000000000000000000000000000000000000102000000000000000000000008000000080000000000000000000000000000000000000000000004200000000000802000000000000000080000000000000000000000010000000000000000000000000002000000020020000000000000000000000000000000400000020","input":"0x3d8527ba","nonce":35,"value":"0x0","type":0,"v":"0xfeb","r":"0x9a133b81eeea377259a7b783595010d31204318c2515fff1fb8d5d1852c5c147","s":"0x69836d6d40b8a9545899e310785f7036f6f6c051421d6c2865212307cdcecd2f","blockTime":1729225108},{"transactionHash":"0x313153ee84e7b6019800fe73aa414fe9b7c5be676d1ae398d82a17b254460bd8","transactionIndex":7,"blockHash":"0x5513bd09c3e1498b6a43d3a9b293647149fa511d0a2f05f56a67a59c58cfa7f6","blockNumber":39128285,"from":"0xf22a97a220392b1311f5ecde3175ec07fa21154b","to":"0x05b0bb3c1c320b280501b86706c3551995bc8571","contractAddress":"","status":0,"gas":165509,"gasPrice":"0x4a817c800","effectiveGasPrice":"0x4a817c800","gasUsed":163236,"cumulativeGasUsed":559010,"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","input":"0x3d8527ba","nonce":34,"value":"0x0","type":2,"v":"0x0","r":"0x5006af48e2c5c73a36708fca892e86967cf2227a24144dee57598df2bb58f9ec","s":"0x313b5ccbbb6a15a48f80e054be1a6389b02d4fab0f867795655a8dd3738bf6cf","blockTime":1729224967,"chainId":"0x7e4","maxFeePerGas":"0x4a817c800","maxPriorityFeePerGas":"0x4a817c800"}]}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

//   test('multiple_txs_details empty', async () => {
//     let txHashes: string[] = [];
//     const result = await provider.get_details_of_multiple_transactions(txHashes);
//     const expected = '{"result":{"items":[]}}';
//     const jsonResult = JSON.stringify(result);
//     expect(jsonResult).toBe(expected);
//   }, TIMEOUT);

// });

// describe('Token transfer', () => {
//   let provider: SkynetWeb3Provider;

//   beforeEach(() => {
//     const connectionInfo = {
//       url: URL_RONIN_SKYNET_RPC,
//       headers: {
//         "X-API-KEY": process.env["X-API-KEY"] || ""
//       }
//     }
//     provider = new SkynetWeb3Provider(connectionInfo);
//   });

//   test('Get token transfers by block range', async () => {
//     const fromBlock = 39300772;
//     const toBlock   = 39301771;
//     const result = await provider.get_token_transfers_by_block_range(fromBlock, toBlock);
//     expect(result.result.items.length).toBeGreaterThan(0);
//     expect(result.result.items[0].blockNumber).toBeGreaterThanOrEqual(fromBlock);
//     expect(result.result.items[0].blockNumber).toBeLessThanOrEqual(toBlock);
//   }, TIMEOUT);

//   test('Get token transfers by block range limit=2', async () => {
//     const fromBlock = 39300772;
//     const toBlock   = 39301771;
//     const params = {limit: 2};
//     const result = await provider.get_token_transfers_by_block_range(fromBlock, toBlock, params);
//     expect(result.result.items.length).toBeGreaterThan(0);
//     expect(result.result.items.length).toBeLessThanOrEqual(2);
//     expect(result.result.items[0].blockNumber).toBeGreaterThanOrEqual(fromBlock);
//     expect(result.result.items[0].blockNumber).toBeLessThanOrEqual(toBlock);
//   }, TIMEOUT);

// })