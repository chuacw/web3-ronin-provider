
import 'dotenv/config';
require('dotenv').config();
import { createSkynetRESTProvider, SkynetRESTProvider } from '../src/web3-RoninSkynetRESTProvider';
import { get_Account_Activities_Request_Body, get_blocks_Item, get_blocks_Param, get_blocks_Result } from '../src/web3-ronin-types-rest-accounts';
import { get_multiple_NFTs_Query, get_summary_for_multiple_NFTs_Query, search_for_matched_NFTs_Query } from '../src/web3-ronin-types-rest-nfts';
import { EErrorCodeMessage } from '../src/web3-ronin-types-errors';
import { ERROR_INVALID_ADDR } from '../src/web3-ronin-consts-rest';
import { search_tokens_Query, search_tokens_Query_Order, search_tokens_Query_Sort_FieldName } from '../src/web3-ronin-types-rest-tokens';
import { Tokens } from '../src/web3-ronin-consts-tokens';

const TIMEOUT = 100000000;

describe('Accounts', () => {
  let provider: SkynetRESTProvider;

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('Get account activities on Ronin chain - throws', async () => {
    const body: get_Account_Activities_Request_Body = {
      "activityTypes": [
        "swap"
      ],
      "block": {
        "blockRange": [
          17832048,
          17832148
        ]
      },
      "paging": {
        "offset": 0,
        "pagingStyle": 'offset'
      }
    };
    expect(async () => {
      const response = await provider.get_Account_Activities("0xb418bf09bb489255b148c82d9353cecde3871834", body);
    }).rejects.toThrow();
  }, TIMEOUT);

  test('Get account activities on Ronin chain - resolved', async () => {
    const body: get_Account_Activities_Request_Body = {
      "block": {
        "blockRange": [
          39590490,
          39590690
        ]
      },
      "paging": {
        "offset": 0,
        "pagingStyle": 'offset'
      }
    };
    const response = await provider.get_Account_Activities("0xf22a97a220392b1311f5ecde3175ec07fa21154b", body);
    expect(response.result.items.length).toBeGreaterThanOrEqual(1);
  }, TIMEOUT);

  test('Get account info by address', async () => {
    const ADDR = "0xf22a97a220392b1311f5ecde3175ec07fa21154b";
    const response = await provider.get_account_info_by_address(ADDR);
    expect(response.result.address).toBe(ADDR);
  }, TIMEOUT);

  test('Search wealthiest accounts', async () => {
    const response = await provider.search_wealthiest_accounts();
    expect(response.result.items.length).toBeGreaterThan(0);
  }, TIMEOUT);

});

describe('Blocks', () => {
  let provider: SkynetRESTProvider;

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('Get blocks', async () => {
    const response = await provider.get_blocks();
    expect('result' in response).toBeTruthy();
    const hasFieldResult = 'items' in response.result;
    if (hasFieldResult) {
      expect((response.result as get_blocks_Result).items.length).toBeGreaterThan(0);
    } else {
      expect(hasFieldResult).toBeFalsy();
    }
  }, TIMEOUT);

  test('Get blocks - hash', async () => {
    const params: get_blocks_Param = {
      block_hash: "0xb12370db9c195fd3d36799ebed779105399ea46b512152ee66dd63c128dc5348"
    };
    const response = await provider.get_blocks(params);
    expect((response.result as get_blocks_Item).hash).toBe(params.block_hash);
  }, TIMEOUT);

  test('Get blocks - block_number', async () => {
    const params: get_blocks_Param = {
      block_number: 29949082
    };
    const response = await provider.get_blocks(params);
    expect((response.result as get_blocks_Item).number).toBe(params.block_number);
  }, TIMEOUT);

  test('Get the finalized block number', async () => {
    const response = await provider.get_the_finalized_block_number();
    expect(response.result.blockNumber).toBeGreaterThan(0);
  }, TIMEOUT);

});

describe('Contracts', () => {
  let provider: SkynetRESTProvider;

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('Get contract by address', async () => {
    const contractAddr = "0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa";
    const response = await provider.get_contract_by_address(contractAddr);
    expect(response.result.address).toBe(contractAddr);
  }, TIMEOUT);

});

// describe('Internal transactions', () => {
//   let provider: SkynetRESTProvider;

//   beforeEach(() => {
//     provider = createSkyNetRESTProvider(process.env["X-API-KEY"] || "");
//   });

// });

describe('NFTs', () => {
  let provider: SkynetRESTProvider;
  const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('Get summary for individual NFT', async () => {
    const tokenId = 2006055;
    const response = await provider.get_summary_for_individual_NFT(contractAddress, tokenId);
    expect(response.result.tokenId).toBe(tokenId.toString());
  }, TIMEOUT);

  test('Get multiple NFTs', async () => {
    const query: get_multiple_NFTs_Query = {
      ids: [
        {
          contractAddress,
          "tokenId": "11944138"
        }
      ]
    }
    const response = await provider.get_multiple_NFTs(query);
    expect(response.result.items.length).toBe(1);
  }, TIMEOUT);

  test('Search for NFTs by metadata attributes', async () => {
    const query = {
      "contractAddress": "0x32950db2a7164ae833121501c797d79e7b79d74c",
      "includes": [
        "owner"
      ],
      "metadata": {
        "attributes": [
          {
            "traitType": "bodyShape",
            "value": "normal"
          }
        ]
      },
      "paging": {
        "cursor": "string",
        "limit": 2,
        "offset": 0,
        "pagingStyle": "offset"
      }
    };
    const response = await provider.search_for_NFTs_by_metadata_attributes(query);
    expect(response.result.items.length).toBeGreaterThan(0);
    expect(response.result.items[0].rawMetadata.properties.bodyshape).toEqual(query.metadata.attributes[0].value);
  }, TIMEOUT);

  test('Search for NFTs by metadata attributes - invalid address', async () => {
    const query = {
      "contractAddress": "288773542827848288992017604387765179882216740684",
      "includes": [
        "owner"
      ],
      "metadata": {
        "attributes": [
          {
            "traitType": "bodyShape",
            "value": "normal"
          }
        ]
      },
      "paging": {
        "cursor": "string",
        "limit": 2,
        "offset": 0,
        "pagingStyle": "offset"
      }
    };
    expect(async () => {
      const response = await provider.search_for_NFTs_by_metadata_attributes(query);
    }).rejects.toThrow(new EErrorCodeMessage(400, ERROR_INVALID_ADDR));
  }, TIMEOUT);

  test('Search for matched NFTs', async () => {
    const query: search_for_matched_NFTs_Query = {
      "contractAddresses": [
        "0x32950db2a7164ae833121501c797d79e7b79d74c"
      ],
      "ownerAddress": "0xf22a97a220392b1311f5ecde3175ec07fa21154b",
      "paging": {
        "cursor": "string",
        "limit": 2,
        "offset": 0,
        "pagingStyle": "offset"
      },
      "tokenIds": [
      ]
    };
    const response = await provider.search_for_matched_NFTs(query);
    expect(response.result.items.length).toBeGreaterThanOrEqual(0);
    if (response.result.items.length > 0) {
      const result = response.result;
      expect(result.items[0].contractAddress).toBe(query.contractAddresses[0]);
    }
  }, TIMEOUT);

  test('Get summary for multiple NFTs', async () => {
    const query: get_summary_for_multiple_NFTs_Query = {
      "ids": [
        {
          "contractAddress": "0x32950db2a7164ae833121501c797d79e7b79d74c",
          "tokenId": "11944138"
        },
        {
          "contractAddress": "0x32950db2a7164ae833121501c797d79e7b79d74c",
          "tokenId": "11944140"
        }
      ]
    };
    const response = await provider.get_summary_for_multiple_NFTs(query);
    expect(response.result.items.length).toBe(2);
  }, TIMEOUT);

});

describe('Tokens', () => {
  let provider: SkynetRESTProvider;
  const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test("Get token by address", async () => {
    const contractAddresses = Tokens.AXS;
    const response = await provider.get_token_by_address(contractAddresses);
    expect(response.result.contractAddress).toBe(contractAddresses);
  }, TIMEOUT);

  test("Get token's top holders", async () => {
    const contractAddresses = Tokens.AXS;
    const response = await provider.get_token_top_holders(contractAddresses);
    expect(response.result.items.length).toBeGreaterThanOrEqual(20);
  }, TIMEOUT);

  test('Get overview for tokens', async () => {
    const contractAddresses = [
      "0xdc20ca4df25d6df51f36be48292cbcc509b10f28",
      "0xf0c97554e098383ebdab4645a96fea6eff6c2295"
    ];
    const response = await provider.get_overview_for_tokens(contractAddresses);
    expect(response.result.items.length).toBe(2);
  }, TIMEOUT);

  test('Search tokens', async () => {
    const query: search_tokens_Query = {
      "paging": {
        "cursor": "string",
        "limit": 2,
        "offset": 0,
        "pagingStyle": "offset"
      },
      "sort": [
        {
          "fieldName": search_tokens_Query_Sort_FieldName.createdAt,
          "order": search_tokens_Query_Order.DESC
        }
      ]
    };
    const response = await provider.search_tokens(query);
    expect(response.result.items.length).toBeGreaterThan(0);
  }, TIMEOUT);

});

describe('Token balances', () => {
  let provider: SkynetRESTProvider;
  const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('Search token balances', async () => {
    const query = {
      "contractAddresses": [
        "0x97a9107c1793bc407d6f527b77e7fff4d812bece"
      ],
      "includes": [
        "RON"
      ],
      "ownerAddress": "0xf22a97a220392b1311f5ecde3175ec07fa21154b",
      "paging": {
        "cursor": "string",
        "limit": 2,
        "offset": 0,
        "pagingStyle": "offset"
      },
      "tokenIds": [
        "1339"
      ],
      "tokenStandards": [
        "ERC20",
        "ERC721",
        "ERC1155"
      ]
    };
    const response = await provider.search_token_balances(query);
    expect(response.result.items[0].ownerAddress).toBe(query.ownerAddress);
  }, TIMEOUT);


  test('Get summary of token balances', async () => {
    const query = {
      "includes": [
        "RON"
      ],
      "ownerAddress": "0xf22a97a220392b1311f5ecde3175ec07fa21154b",
      "tokenStandards": [
        "ERC20",
        "ERC721",
        "ERC1155"
      ]
    };
    const response = await provider.get_summary_of_token_balances(query);
    expect(response.result.items[0].ownerAddress).toBe(query.ownerAddress);
  }, TIMEOUT);

});

describe('Token transfers', () => {
  let provider: SkynetRESTProvider;
  const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('List token transfers by timestamp', async () => {
    const response = await provider.list_token_transfers_by_timestamp();
    expect(response.result.items.length).toBeGreaterThanOrEqual(1);
  }, TIMEOUT);

  test('List token transfers ordered by transaction hash', async () => {
    const tx_hash = ["0x17e8de4d39ebed4bd6ff0126e2ad8f8ca2cf713df067f5a7a829aaeee5aa8988"];
    const response = await provider.list_token_transfers_by_transaction_hash(tx_hash);
    expect(response.result.items.length).toBeGreaterThan(0);
  }, TIMEOUT);

});

describe('Transactions', () => {
  let provider: SkynetRESTProvider;
  const contractAddress = "0x32950db2a7164ae833121501c797d79e7b79d74c";

  beforeEach(() => {
    provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
  });

  test('List transactions', async () => {
    const response = await provider.list_transactions();
    expect(response.result.items.length).toBeGreaterThanOrEqual(1);
  }, TIMEOUT);

  test('Get transaction by hash', async () => {
    const hash = "0x17e8de4d39ebed4bd6ff0126e2ad8f8ca2cf713df067f5a7a829aaeee5aa8988";
    const response = await provider.get_transaction_by_hash(hash);
    expect(response.result.transactionHash).toEqual(hash);
  }, TIMEOUT);

  test('Get multiple transactions by hashes', async () => {
    const list_txs_response = await provider.list_transactions(3);
    let tx_hash: string[] = [];
    list_txs_response.result.items.map((item) => { tx_hash.push(item.transactionHash) });
    const hashes = ["0x17e8de4d39ebed4bd6ff0126e2ad8f8ca2cf713df067f5a7a829aaeee5aa8988",
      ...tx_hash
    ];
    const response = await provider.get_multiple_transactions_by_hashes(hashes);
    let count = 0;
    response.result.items.map(item => {
      const index = hashes.indexOf(item.transactionHash);
      if (index >= 0) {
        count++;
      };
    });
    expect(count).toBeGreaterThanOrEqual(1);
  }, TIMEOUT);

  // test('Search transactions', async() => {
  // }, TIMEOUT);

  test('Get daily count of transactions', async () => {
    const response = await provider.get_daily_count_of_transactions();
    const keys = Object.keys(response.result);
    expect(keys.length).toBeGreaterThan(0);
    const first_day = keys[0];
    const daily_value = response.result[first_day];
    expect(daily_value).toBeGreaterThan(0);
  }, TIMEOUT);

});


