[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / RoninSkynetWeb3Provider

# Class: RoninSkynetWeb3Provider

This class implements the 
[Web3 API](https://docs.skymavis.com/api/web3/skynet-web-3-api|Skynet).  

To create a RoninSkynetWeb3Provider quickly, call [createSkyNetProvider](../functions/createSkyNetProvider.md) with the API key.  
To customize headers, call the RoninSkynetWeb3Provider constructor with a tailored [ConnectionInfo](../type-aliases/ConnectionInfo.md) parameter.

## Constructors

### new RoninSkynetWeb3Provider()

> **new RoninSkynetWeb3Provider**(`connection`): [`RoninSkynetWeb3Provider`](RoninSkynetWeb3Provider.md)

Creates an instance of RoninSkynetWeb3Provider, see documentation in the docs directory.

#### Parameters

• **connection**: [`ConnectionInfo`](../type-aliases/ConnectionInfo.md)

The URL to use, headers, etc

#### Returns

[`RoninSkynetWeb3Provider`](RoninSkynetWeb3Provider.md)

#### Throws

[EEmptyHeaders](EEmptyHeaders.md) when headers are present, but empty

#### Throws

[EEmptyUrl](EEmptyUrl.md) when URL is empty

#### Throws

[ENoApiKey](ENoApiKey.md) when X-API-KEY is absent

#### Throws

[ENoHeaders](ENoHeaders.md) when headers are absent

#### Defined in

[src/web3-RoninSkynetProvider.ts:77](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L77)

## Methods

### balance\_of\_address\_and\_contract()

> **balance\_of\_address\_and\_contract**(`account`, `contractAddress`): `Promise`\<[`balance_of_address_and_contract_Response`](../interfaces/balance_of_address_and_contract_Response.md)\>

Get balance of an address and contract

#### Parameters

• **account**: `string`

• **contractAddress**: `string`

#### Returns

`Promise`\<[`balance_of_address_and_contract_Response`](../interfaces/balance_of_address_and_contract_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:271](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L271)

***

### balances\_of\_address\_by\_multiple\_contracts()

> **balances\_of\_address\_by\_multiple\_contracts**(`account`, `contractAddresses`): `Promise`\<[`balances_of_address_by_multiple_contracts_Response`](../interfaces/balances_of_address_by_multiple_contracts_Response.md)\>

Get balances of an address by multiple contracts

#### Parameters

• **account**: `string`

• **contractAddresses**: `string`[]

#### Returns

`Promise`\<[`balances_of_address_by_multiple_contracts_Response`](../interfaces/balances_of_address_by_multiple_contracts_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:286](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L286)

***

### block\_by\_hash\_timestamp\_block\_number\_range()

> **block\_by\_hash\_timestamp\_block\_number\_range**(`fromBlock`, `toBlock`, `optionalParams`?): `Promise`\<[`block_by_hash_timestamp_block_number_range_Response`](../interfaces/block_by_hash_timestamp_block_number_range_Response.md)\>

Get block by hash, timestamp, block number range

#### Parameters

• **fromBlock**: `number`

• **toBlock**: `number`

• **optionalParams?**: [`OptionalParams`](../type-aliases/OptionalParams.md)

get the block where its life span covers the input timestamp and/or hash

#### Returns

`Promise`\<[`block_by_hash_timestamp_block_number_range_Response`](../interfaces/block_by_hash_timestamp_block_number_range_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:370](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L370)

***

### block\_by\_number()

> **block\_by\_number**(`block_number`): `Promise`\<[`block_by_number_Response`](../interfaces/block_by_number_Response.md)\>

Get block by number

#### Parameters

• **block\_number**: `number`

#### Returns

`Promise`\<[`block_by_number_Response`](../interfaces/block_by_number_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:354](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L354)

***

### collection\_detail()

> **collection\_detail**(`contract_addr`): `Promise`\<[`collection_detail_Response`](../interfaces/collection_detail_Response.md)\>

Get collection detail

#### Parameters

• **contract\_addr**: `string`

The address to get collection detail for

#### Returns

`Promise`\<[`collection_detail_Response`](../interfaces/collection_detail_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:553](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L553)

***

### collection\_holder\_list()

> **collection\_holder\_list**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`collection_holder_list_Response`](../interfaces/collection_holder_list_Response.md)\>

Get collection holder list

#### Parameters

• **contractAddress**: `string`

The address to get collection holder list for

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`collection_holder_list_Response`](../interfaces/collection_holder_list_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:527](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L527)

***

### collection\_token\_transfers()

> **collection\_token\_transfers**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`collection_token_transfers_Response`](../interfaces/collection_token_transfers_Response.md)\>

Get collection token transfers

#### Parameters

• **contractAddress**: `string`

The address to get token transfers for

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`collection_token_transfers_Response`](../interfaces/collection_token_transfers_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:541](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L541)

***

### concatUrl()

> `protected` **concatUrl**(`url`, `urlSuffix`): `string`

#### Parameters

• **url**: `string`

• **urlSuffix**: `string`

#### Returns

`string`

#### Defined in

[src/web3-RoninSkynetProvider.ts:96](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L96)

***

### contract\_detail()

> **contract\_detail**(`contract_addr`): `Promise`\<[`contract_detail_Response`](../interfaces/contract_detail_Response.md)\>

Get detail of a contract

#### Parameters

• **contract\_addr**: `string`

address of contract to get detail for

#### Returns

`Promise`\<[`contract_detail_Response`](../interfaces/contract_detail_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:585](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L585)

***

### detail\_of\_nft()

> **detail\_of\_nft**(`contract_addr`, `tokenId`): `Promise`\<[`detail_of_nft_Response`](../interfaces/detail_of_nft_Response.md)\>

Get detail of an NFT

#### Parameters

• **contract\_addr**: `string`

Contract address of NFT

• **tokenId**: `number`

ID of NFT token

#### Returns

`Promise`\<[`detail_of_nft_Response`](../interfaces/detail_of_nft_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:429](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L429)

***

### details\_of\_multiple\_collections()

> **details\_of\_multiple\_collections**(`contractAddresses`): `Promise`\<[`details_of_multiple_collections_Response`](../interfaces/details_of_multiple_collections_Response.md)\>

Get details of multiple collections

#### Parameters

• **contractAddresses**: `string`[]

An array of addresses

#### Returns

`Promise`\<[`details_of_multiple_collections_Response`](../interfaces/details_of_multiple_collections_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:567](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L567)

***

### details\_of\_multiple\_nfts()

> **details\_of\_multiple\_nfts**(`contractAddress`, `tokenIds`): `Promise`\<[`details_of_multiple_nfts_Response`](../interfaces/details_of_multiple_nfts_Response.md)\>

Get details of multiple NFTs

#### Parameters

• **contractAddress**: `string`

• **tokenIds**: `string`[]

#### Returns

`Promise`\<[`details_of_multiple_nfts_Response`](../interfaces/details_of_multiple_nfts_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:480](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L480)

***

### finalized\_block\_number()

> **finalized\_block\_number**(): `Promise`\<[`finalized_block_number_Response`](../interfaces/finalized_block_number_Response.md)\>

Get finalized block number

#### Returns

`Promise`\<[`finalized_block_number_Response`](../interfaces/finalized_block_number_Response.md)\>

#### Defined in

[src/web3-RoninSkynetProvider.ts:315](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L315)

***

### fungible\_token\_balance()

> **fungible\_token\_balance**(`address`, `limit`?, `cursor`?): `Promise`\<[`fungible_token_balance_Response`](../interfaces/fungible_token_balance_Response.md)\>

Get fungible token balances of an address, including the native token (RON)

#### Parameters

• **address**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`fungible_token_balance_Response`](../interfaces/fungible_token_balance_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:229](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L229)

***

### getRonin()

> `protected` **getRonin**(`urlSuffix`, `config`?): `Promise`\<`AxiosResponse`\<`any`, `any`\>\>

#### Parameters

• **urlSuffix**: `string`

• **config?**: `AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`\>\>

#### Defined in

[src/web3-RoninSkynetProvider.ts:140](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L140)

***

### getRoninLimitCursor()

> `protected` **getRoninLimitCursor**(`url`, `limit`?, `cursor`?): `Promise`\<`any`\>

Places a call to the service, with optional limits and cursor

#### Parameters

• **url**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<`any`\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:168](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L168)

***

### internal\_txs()

> **internal\_txs**(`txHash`): `Promise`\<[`internal_txs_Response`](../interfaces/internal_txs_Response.md)\>

Get internal transaction of a transaction

#### Parameters

• **txHash**: `string`

hash of the transaction to get

#### Returns

`Promise`\<[`internal_txs_Response`](../interfaces/internal_txs_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:615](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L615)

***

### internal\_txs\_detail()

> **internal\_txs\_detail**(`txHash`): `Promise`\<[`internal_txs_detail_Response`](../interfaces/internal_txs_detail_Response.md)\>

Get internal transaction details of a transaction

#### Parameters

• **txHash**: `string`

hash of the transaction to get

#### Returns

`Promise`\<[`internal_txs_detail_Response`](../interfaces/internal_txs_detail_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:628](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L628)

***

### latest\_block\_number()

> **latest\_block\_number**(): `Promise`\<[`finalized_block_number_Response`](../interfaces/finalized_block_number_Response.md)\>

Get latest block number

#### Returns

`Promise`\<[`finalized_block_number_Response`](../interfaces/finalized_block_number_Response.md)\>

#### Defined in

[src/web3-RoninSkynetProvider.ts:326](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L326)

***

### list\_of\_collections\_having\_NFTs()

> **list\_of\_collections\_having\_NFTs**(`address`, `limit`?, `cursor`?): `Promise`\<[`list_of_collections_having_NFTs_Response`](../interfaces/list_of_collections_having_NFTs_Response.md)\>

Get list of collections having NFTs belonging to an address

#### Parameters

• **address**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`list_of_collections_having_NFTs_Response`](../interfaces/list_of_collections_having_NFTs_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:243](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L243)

***

### multiple\_contracts\_details()

> **multiple\_contracts\_details**(`contractAddresses`): `Promise`\<[`multiple_contracts_details_Response`](../interfaces/multiple_contracts_details_Response.md)\>

Get details of multiple contracts

#### Parameters

• **contractAddresses**: `string`[]

An array of contract address to get details for

#### Returns

`Promise`\<[`multiple_contracts_details_Response`](../interfaces/multiple_contracts_details_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:598](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L598)

***

### multiple\_txs\_details()

> **multiple\_txs\_details**(`hashes`): `Promise`\<[`multiple_txs_details_Response`](../interfaces/multiple_txs_details_Response.md)\>

Get details of multiple transactions

#### Parameters

• **hashes**: `string`[]

hashes of transactions

#### Returns

`Promise`\<[`multiple_txs_details_Response`](../interfaces/multiple_txs_details_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:641](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L641)

***

### nft\_list\_of\_address\_and\_contract()

> **nft\_list\_of\_address\_and\_contract**(`address`, `contractAddress`, `limit`?, `cursor`?): `Promise`\<[`nft_list_of_address_and_contract_Response`](../interfaces/nft_list_of_address_and_contract_Response.md)\>

Get NFT list of an address and contract

#### Parameters

• **address**: `string`

• **contractAddress**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`nft_list_of_address_and_contract_Response`](../interfaces/nft_list_of_address_and_contract_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:258](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L258)

***

### nfts\_from\_collection()

> **nfts\_from\_collection**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`nfts_from_collection_Response`](../interfaces/nfts_from_collection_Response.md)\>

Get NFTs from a collection

#### Parameters

• **contractAddress**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`nfts_from_collection_Response`](../interfaces/nfts_from_collection_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:498](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L498)

***

### number\_of\_collection\_holdings\_by\_address()

> **number\_of\_collection\_holdings\_by\_address**(`contractAddress`, `address`, `limit`?, `cursor`?): `Promise`\<[`number_of_collection_holdings_by_address_Response`](../interfaces/number_of_collection_holdings_by_address_Response.md)\>

Get the number of collection holdings by address

#### Parameters

• **contractAddress**: `string`

The address to get the number of collection holders for

• **address**: `string`

The account address

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`number_of_collection_holdings_by_address_Response`](../interfaces/number_of_collection_holdings_by_address_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:513](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L513)

***

### owned\_nfts\_of()

> **owned\_nfts\_of**(`address`, `limit`?, `cursor`?): `Promise`\<[`owned_nfts_of_Response`](../interfaces/owned_nfts_of_Response.md)\>

Get owned NFTs of an address

#### Parameters

• **address**: `string`

The address to retrieve owned NFTs for

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`owned_nfts_of_Response`](../interfaces/owned_nfts_of_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:215](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L215)

***

### owners\_of\_nft()

> **owners\_of\_nft**(`contractAddress`, `tokenId`): `Promise`\<[`owners_of_nft_Response`](../interfaces/owners_of_nft_Response.md)\>

Get owners of an NFT

#### Parameters

• **contractAddress**: `string`

• **tokenId**: `number`

#### Returns

`Promise`\<[`owners_of_nft_Response`](../interfaces/owners_of_nft_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:400](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L400)

***

### postRonin()

> `protected` **postRonin**(`urlSuffix`, `data`): `Promise`\<`AxiosResponse`\<`any`, `any`\>\>

#### Parameters

• **urlSuffix**: `string`

• **data**: `any`

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`\>\>

#### Defined in

[src/web3-RoninSkynetProvider.ts:150](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L150)

***

### refresh\_nfts\_of\_collection\_async()

> **refresh\_nfts\_of\_collection\_async**(`contractAddress`, `tokenIds`): `Promise`\<[`refresh_nfts_of_collection_async_Response`](../interfaces/refresh_nfts_of_collection_async_Response.md)\>

Refresh NFTs of a collection in asynchronous manner

#### Parameters

• **contractAddress**: `string`

• **tokenIds**: `string`[]

#### Returns

`Promise`\<[`refresh_nfts_of_collection_async_Response`](../interfaces/refresh_nfts_of_collection_async_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:463](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L463)

***

### refresh\_nfts\_of\_collection\_sync()

> **refresh\_nfts\_of\_collection\_sync**(`contractAddress`, `maxWait`, `tokenIds`): `Promise`\<[`refresh_nfts_of_collection_sync_Response`](../interfaces/refresh_nfts_of_collection_sync_Response.md)\>

Refresh NFTs of a collection in synchronous manner

#### Parameters

• **contractAddress**: `string`

• **maxWait**: `number`

milliseconds, when maxWait exceeds server timeout, then server timeout will be used instead

• **tokenIds**: `string`[]

#### Returns

`Promise`\<[`refresh_nfts_of_collection_sync_Response`](../interfaces/refresh_nfts_of_collection_sync_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:445](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L445)

***

### search()

> **search**(`account`, `searchCriteria`?): `Promise`\<[`search_Response`](../interfaces/search_Response.md)\>

Search for matched account activities

#### Parameters

• **account**: `string`

address of the account to query events for.

• **searchCriteria?**: [`SearchCriteria`](../type-aliases/SearchCriteria.md)

When activityTypes is not empty, fromBlock and toBlock needs to be specified.

#### Returns

`Promise`\<[`search_Response`](../interfaces/search_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:185](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L185)

***

### token\_tranfers\_of\_address()

> **token\_tranfers\_of\_address**(`account`, `limit`?, `cursor`?): `Promise`\<[`token_tranfers_of_address_Response`](../interfaces/token_tranfers_of_address_Response.md)\>

Get token transfers of an address with a contract

#### Parameters

• **account**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`Promise`\<[`token_tranfers_of_address_Response`](../interfaces/token_tranfers_of_address_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:302](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L302)

***

### token\_transfers\_of\_nft()

> **token\_transfers\_of\_nft**(`contractAddress`, `tokenId`, `limit`?, `cursor`?): `Promise`\<[`token_transfers_of_nft_Response`](../interfaces/token_transfers_of_nft_Response.md)\>

Get token transfers of an NFT

#### Parameters

• **contractAddress**: `string`

The contract address of the NFT

• **tokenId**: `number`

The token ID of the NFT

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The cursor value in token_transfers_of_nft_Response.result.paging.nextCursor

#### Returns

`Promise`\<[`token_transfers_of_nft_Response`](../interfaces/token_transfers_of_nft_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:416](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L416)

***

### transactions\_by\_block\_number()

> **transactions\_by\_block\_number**(`block_number`): `Promise`\<[`transactions_by_block_number_Response`](../interfaces/transactions_by_block_number_Response.md)\>

Get transactions by block number

#### Parameters

• **block\_number**: `number`

#### Returns

`Promise`\<[`transactions_by_block_number_Response`](../interfaces/transactions_by_block_number_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:339](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L339)

***

### update\_url()

> `protected` **update\_url**(`url`, `limit`?, `cursor`?): `string`

Updates the url to include limit and cursors, if they're provided.

#### Parameters

• **url**: `string`

• **limit?**: `number`

The number of items to get

• **cursor?**: `string`

The page from which to get the requested items

#### Returns

`string`

Updated url if limit and cursors provided, otherwise, returns the parameter url.

#### Defined in

[src/web3-RoninSkynetProvider.ts:117](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L117)

***

### update\_url\_with\_Params()

> `protected` **update\_url\_with\_Params**(`url`, `params`): `string`

#### Parameters

• **url**: `string`

• **params**: `string` \| `URLSearchParams`

#### Returns

`string`

#### Defined in

[src/web3-RoninSkynetProvider.ts:129](https://github.com/chuacw/web3-ronin-provider/blob/7251b9677bbb79d30e6a4204bfabcc38fab6aa15/src/web3-RoninSkynetProvider.ts#L129)
