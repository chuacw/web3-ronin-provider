import { SetEnvironmentVariable } from "delphirtl/sysutils";

SetEnvironmentVariable('DEBUG', 'true');


import { HOWTO_01_get_owners_of_nft } from "../examples/HOWTO-01_get_owners_of_nft";
import { HOWTO_02_Get_all_NFTs_of_a_collection } from "../examples/HOWTO-02_Get_all_NFTs_of_a_collection";
import { HOWTO_03_Get_all_NFTs_of_an_owner } from "../examples/HOWTO-03_Get_all_NFTs_of_an_owner";
import { HOWTO_04_Get_NFT_detail } from "../examples/HOWTO-04_Get_NFT_detail";
import { HOWTO_05_Refresh_NFTs } from "../examples/HOWTO-05_Refresh_NFTs";
import { HOWTO_06_Get_all_owners_of_a_collection } from "../examples/HOWTO-06_Get_all_owners_of_a_collection";
import { HOWTO_07_Get_all_collections_of_an_owner } from "../examples/HOWTO-07_Get_all_collections_of_an_owner";
import { HOWTO_08_Get_all_token_transfers_of_a_contract } from "../examples/HOWTO-08_Get_all_token_transfers_of_a_contract";
import { HOWTO_09_Get_all_token_transfers_of_a_wallet_address } from "../examples/HOWTO-09_Get_all_token_transfers_of_a_wallet_address";
import { HOWTO_10_Get_all_token_transfers_of_a_wallet_address_and_a_contract } from "../examples/HOWTO-10_Get_all_token_transfers_of_a_wallet_address_and_a_contract";
import { HOWTO_11_Get_all_token_transfers_of_an_NFT } from "../examples/HOWTO-11_Get_all_token_transfers_of_an_NFT";
import { HOWTO_12_Get_all_transactions_of_a_wallet_address } from "../examples/HOWTO-12_Get_all_transactions_of_a_wallet_address";
import { HOWTO_13_Get_all_RON_transfers_via_internal_transactions_of_a_wallet_address } from "../examples/HOWTO-13_Get_all_RON_transfers_via_internal_transactions_of_a_wallet_address";
import { HOWTO_14_Get_all_logs_of_a_contract } from "../examples/HOWTO-14_Get_all_logs_of_a_contract";

const TIMEOUT = 100_000_000;
const ALL_TIMEOUT = 100_000_000_000;

describe('Examples', () => {

  test('HOWTO_01_get_owners_of_nft', () => {
    expect(async () => { 
      await HOWTO_01_get_owners_of_nft();
    }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_02_Get_all_NFTs_of_a_collection', () => {
    expect(async () => { await HOWTO_02_Get_all_NFTs_of_a_collection() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_03_Get_all_NFTs_of_an_owner', () => {
    expect(async () => { await HOWTO_03_Get_all_NFTs_of_an_owner() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_04_Get_NFT_detail', () => {
    expect(async () => { await HOWTO_04_Get_NFT_detail() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_05_Refresh_NFTs', () => {
    expect(async () => { await HOWTO_05_Refresh_NFTs() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_01_get_owners_of_nft', () => {
    expect(async () => { await HOWTO_01_get_owners_of_nft() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_06_Get_all_owners_of_a_collection', () => {
    expect(async () => { await HOWTO_06_Get_all_owners_of_a_collection() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_07_Get_all_collections_of_an_owner', () => {
    expect(async () => { await HOWTO_07_Get_all_collections_of_an_owner() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_08_Get_all_token_transfers_of_a_contract', () => {
    expect(async () => { await HOWTO_08_Get_all_token_transfers_of_a_contract() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_09_Get_all_token_transfers_of_a_wallet_address', () => {
    expect(async () => { await HOWTO_09_Get_all_token_transfers_of_a_wallet_address() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_10_Get_all_token_transfers_of_a_wallet_address_and_a_contract', () => {
    expect(async () => { await HOWTO_10_Get_all_token_transfers_of_a_wallet_address_and_a_contract() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_11_Get_all_token_transfers_of_an_NFT', () => {
    expect(async () => { await HOWTO_11_Get_all_token_transfers_of_an_NFT() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_12_Get_all_transactions_of_a_wallet_address', () => {
    expect(async () => { await HOWTO_12_Get_all_transactions_of_a_wallet_address() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_13_Get_all_RON_transfers_via_internal_transactions_of_a_wallet_address', () => {
    expect(async () => { await HOWTO_13_Get_all_RON_transfers_via_internal_transactions_of_a_wallet_address() }).not.toThrow();
  }, TIMEOUT);

  test('HOWTO_14_Get_all_logs_of_a_contract', () => {
    expect(async () => { await HOWTO_14_Get_all_logs_of_a_contract() }).not.toThrow();
  }, TIMEOUT);

});
