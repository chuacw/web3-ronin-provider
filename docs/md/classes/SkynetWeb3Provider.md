[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / SkynetWeb3Provider

# Class: SkynetWeb3Provider

This class implements the 
[Skynet Web3 API](https://docs.skymavis.com/api/web3/skynet-web-3-api).  

To create a SkynetWeb3Provider quickly, call [createSkynetProvider](../functions/createSkynetProvider.md) with the API key.  
To customize headers, call the SkynetWeb3Provider constructor with a tailored [ConnectionInfo](../type-aliases/ConnectionInfo.md) parameter.

## Extends

- `CustomSkynetProvider`

## Constructors

### new SkynetWeb3Provider()

> **new SkynetWeb3Provider**(`connection`): [`SkynetWeb3Provider`](SkynetWeb3Provider.md)

Creates an instance of SkynetWeb3Provider, see documentation in the docs directory.

#### Parameters

• **connection**: [`ConnectionInfo`](../type-aliases/ConnectionInfo.md)

The URL to use, headers, etc

#### Returns

[`SkynetWeb3Provider`](SkynetWeb3Provider.md)

#### Throws

[EEmptyHeaders](EEmptyHeaders.md) when headers are present, but empty

#### Throws

[EEmptyUrl](EEmptyUrl.md) when URL is empty

#### Throws

[ENoApiKey](ENoApiKey.md) when X-API-KEY is absent

#### Throws

[ENoHeaders](ENoHeaders.md) when headers are absent

#### Overrides

`CustomSkynetProvider.constructor`

#### Defined in

[src/web3-RoninSkynetProvider.ts:68](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L68)

## Accounts

### get\_balance\_of\_address\_and\_contract()

> **get\_balance\_of\_address\_and\_contract**(`account`, `contractAddress`): `Promise`\<[`get_balance_of_address_and_contract_Response`](../interfaces/get_balance_of_address_and_contract_Response.md)\>

Get balance of an address and contract

#### Parameters

• **account**: `string`

• **contractAddress**: `string`

#### Returns

`Promise`\<[`get_balance_of_address_and_contract_Response`](../interfaces/get_balance_of_address_and_contract_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:262](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L262)

***

### get\_balances\_of\_address\_by\_multiple\_contracts()

> **get\_balances\_of\_address\_by\_multiple\_contracts**(`account`, `contractAddresses`): `Promise`\<[`get_balances_of_address_by_multiple_contracts_Response`](../interfaces/get_balances_of_address_by_multiple_contracts_Response.md)\>

Get balances of an address by multiple contracts

#### Parameters

• **account**: `string`

• **contractAddresses**: `string`[]

#### Returns

`Promise`\<[`get_balances_of_address_by_multiple_contracts_Response`](../interfaces/get_balances_of_address_by_multiple_contracts_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:279](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L279)

***

### get\_fungible\_token\_balance()

> **get\_fungible\_token\_balance**(`address`, `limit`?, `cursor`?): `Promise`\<[`get_fungible_token_balance_Response`](../interfaces/get_fungible_token_balance_Response.md)\>

Get fungible token balances of an address, including the native token (RON)

#### Parameters

• **address**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_fungible_token_balance_Response`](../interfaces/get_fungible_token_balance_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:214](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L214)

***

### get\_internal\_txs\_transfers()

> **get\_internal\_txs\_transfers**(`account`, `limit`?, `cursor`?): `Promise`\<[`get_internal_txs_transfers_Response`](../interfaces/get_internal_txs_transfers_Response.md)\>

Get internal tx transfers

Get all RON transfers via internal transactions of a wallet address

This API provides a focused view of internal transactions that may indicate potential money movement associated with a specific wallet. This API exclusively returns internal transactions where the Ethereum Virtual Machine (EVM) OpCode is "CALL" signaling that the transaction likely involves a call to another contract, which may result in a transfer of funds.

The API filters results to include only those internal transactions where either the from or to field matches the provided wallet address. This allows users to efficiently monitor all relevant internal activity linked to their wallet, helping them track significant interactions, such as fund movements or contract engagements.

By focusing on potential money movements, this API is invaluable for users looking to gain insights into their on-chain behavior and manage their assets effectively.

#### Parameters

• **account**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_internal_txs_transfers_Response`](../interfaces/get_internal_txs_transfers_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:369](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L369)

***

### get\_list\_of\_collections\_having\_NFTs()

> **get\_list\_of\_collections\_having\_NFTs**(`address`, `limit`?, `cursor`?): `Promise`\<[`get_list_of_collections_having_NFTs_Response`](../interfaces/get_list_of_collections_having_NFTs_Response.md)\>

Get list of collections having NFTs belonging to an address

#### Parameters

• **address**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_list_of_collections_having_NFTs_Response`](../interfaces/get_list_of_collections_having_NFTs_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:230](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L230)

***

### get\_nft\_list\_of\_address\_and\_contract()

> **get\_nft\_list\_of\_address\_and\_contract**(`address`, `contractAddress`, `limit`?, `cursor`?): `Promise`\<[`get_nft_list_of_address_and_contract_Response`](../interfaces/get_nft_list_of_address_and_contract_Response.md)\>

Get NFT list of an address and contract

#### Parameters

• **address**: `string`

• **contractAddress**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_nft_list_of_address_and_contract_Response`](../interfaces/get_nft_list_of_address_and_contract_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:247](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L247)

***

### get\_owned\_nfts\_of\_address()

> **get\_owned\_nfts\_of\_address**(`address`, `limit`?, `cursor`?): `Promise`\<[`get_owned_nfts_of_address_Response`](../interfaces/get_owned_nfts_of_address_Response.md)\>

Get owned NFTs of an address

This API allows you to retrieve a list of NFTs owned by a wallet address.

#### Parameters

• **address**: `string`

owner address - The address to retrieve owned NFTs for

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_owned_nfts_of_address_Response`](../interfaces/get_owned_nfts_of_address_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:198](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L198)

***

### get\_token\_tranfers\_of\_address()

> **get\_token\_tranfers\_of\_address**(`account`, `limit`?, `cursor`?): `Promise`\<[`get_token_tranfers_of_address_Response`](../interfaces/get_token_tranfers_of_address_Response.md)\>

Get token transfers of an address

#### Parameters

• **account**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_token_tranfers_of_address_Response`](../interfaces/get_token_tranfers_of_address_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:298](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L298)

***

### get\_token\_tranfers\_of\_address\_with\_contract()

> **get\_token\_tranfers\_of\_address\_with\_contract**(`account`, `contractAddress`, `limit`?, `cursor`?): `Promise`\<[`get_token_tranfers_of_address_with_contract_Response`](../interfaces/get_token_tranfers_of_address_with_contract_Response.md)\>

Get token transfers of an address with a contract

Get all token transfers of a wallet address and a contract

This API offers a more targeted way to track token movements between a specific wallet and a particular smart contract. It is ideal for platforms, traders, and developers who need detailed insights into how tokens are being transferred between a wallet and a specific contract, such as in staking, liquidity pools, or token sale contracts. For NFT and token holders, it allows precise tracking of interactions with a contract, ensuring transparency and control over assets. DeFi projects and investors can use this API to analyze contract-specific transactions like token swaps, staking, or rewards distributed from the contract to the wallet. By narrowing the focus to a single wallet-contract relationship, this API simplifies auditing and enhances security checks, helping users spot patterns or irregularities in token flows. I t’s an essential tool for those who need contract-specific token transfer data without wading through the noise of all wallet transactions

#### Parameters

• **account**: `string`

wallet address

• **contractAddress**: `string`

contract address

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_token_tranfers_of_address_with_contract_Response`](../interfaces/get_token_tranfers_of_address_with_contract_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:320](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L320)

***

### get\_transactions\_of\_address()

> **get\_transactions\_of\_address**(`account`, `limit`?, `cursor`?): `Promise`\<[`get_transactions_of_address_Response`](../interfaces/get_transactions_of_address_Response.md)\>

Get transactions of an address

Get all transactions of a wallet address

This API provides comprehensive access to every blockchain transaction associated with a specific wallet address. Unlike token transfers, which are derived from event logs, this API returns raw blockchain transactions, including contract interactions, token approvals, and transfers. This is invaluable for developers, investors, and platforms needing a full overview of a wallet's blockchain activity. For DeFi users, it offers transparency into all on-chain actions, whether interacting with smart contracts or moving assets between wallets. NFT collectors and creators can use this API to track every significant transaction related to their assets, such as minting or contract deployments. By providing a complete history of blockchain transactions, this API is essential for auditing, monitoring, and managing wallets, helping users maintain full visibility into their on-chain behavior, including interactions that don't necessarily involve token transfers.

A blockchain transaction relates to a wallet through the from, to, and contractAddress fields. The from field indicates the sender; if it matches the wallet address, it means the wallet initiated the transaction, such as sending tokens or RON. The to field represents the recipient; if this matches the wallet, it signifies that the wallet received assets. The contractAddress specifies any smart contract involved in the transaction. If this address matches a specific contract the wallet interacts with, it shows the relationship between the wallet and that contract.

#### Parameters

• **account**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_transactions_of_address_Response`](../interfaces/get_transactions_of_address_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:343](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L343)

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

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:163](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L163)

## Blocks

### get\_block\_by\_hash\_timestamp\_block\_number\_range()

> **get\_block\_by\_hash\_timestamp\_block\_number\_range**(`fromBlock`, `toBlock`, `optionalParams`?): `Promise`\<[`get_block_by_hash_timestamp_block_number_range_Response`](../interfaces/get_block_by_hash_timestamp_block_number_range_Response.md)\>

Get block by hash, timestamp, block number range

#### Parameters

• **fromBlock**: `number`

• **toBlock**: `number`

• **optionalParams?**: [`OptionalParams`](../type-aliases/OptionalParams.md)

get the block where its life span covers the input timestamp and/or hash

#### Returns

`Promise`\<[`get_block_by_hash_timestamp_block_number_range_Response`](../interfaces/get_block_by_hash_timestamp_block_number_range_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:449](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L449)

***

### get\_block\_by\_number()

> **get\_block\_by\_number**(`block_number`): `Promise`\<[`get_block_by_number_Response`](../interfaces/get_block_by_number_Response.md)\>

Get block by number

#### Parameters

• **block\_number**: `number`

#### Returns

`Promise`\<[`get_block_by_number_Response`](../interfaces/get_block_by_number_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:431](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L431)

***

### get\_finalized\_block\_number()

> **get\_finalized\_block\_number**(): `Promise`\<[`get_finalized_block_number_Response`](../interfaces/get_finalized_block_number_Response.md)\>

Get finalized block number

#### Returns

`Promise`\<[`get_finalized_block_number_Response`](../interfaces/get_finalized_block_number_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:385](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L385)

***

### get\_latest\_block\_number()

> **get\_latest\_block\_number**(): `Promise`\<[`get_finalized_block_number_Response`](../interfaces/get_finalized_block_number_Response.md)\>

Get latest block number

#### Returns

`Promise`\<[`get_finalized_block_number_Response`](../interfaces/get_finalized_block_number_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:399](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L399)

***

### get\_transactions\_by\_block\_number()

> **get\_transactions\_by\_block\_number**(`block_number`): `Promise`\<[`get_transactions_by_block_number_Response`](../interfaces/get_transactions_by_block_number_Response.md)\>

Get transactions by block number

#### Parameters

• **block\_number**: `number`

#### Returns

`Promise`\<[`get_transactions_by_block_number_Response`](../interfaces/get_transactions_by_block_number_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:414](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L414)

## Collections

### get\_collection\_detail()

> **get\_collection\_detail**(`contract_addr`): `Promise`\<[`get_collection_detail_Response`](../interfaces/get_collection_detail_Response.md)\>

Get collection detail

#### Parameters

• **contract\_addr**: `string`

The address to get collection detail for

#### Returns

`Promise`\<[`get_collection_detail_Response`](../interfaces/get_collection_detail_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:683](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L683)

***

### get\_collection\_holder\_list()

> **get\_collection\_holder\_list**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`get_collection_holder_list_Response`](../interfaces/get_collection_holder_list_Response.md)\>

Get collection holder list

Get all owners of a collection

This API allows you to retrieve a list of wallet addresses that own NFTs from a specific collection along with NFTs amounts they own.

#### Parameters

• **contractAddress**: `string`

The address to get collection holder list for

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_collection_holder_list_Response`](../interfaces/get_collection_holder_list_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:653](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L653)

***

### get\_collection\_token\_transfers()

> **get\_collection\_token\_transfers**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`get_collection_token_transfers_Response`](../interfaces/get_collection_token_transfers_Response.md)\>

Get collection token transfers

#### Parameters

• **contractAddress**: `string`

The address to get token transfers for

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_collection_token_transfers_Response`](../interfaces/get_collection_token_transfers_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:669](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L669)

***

### get\_detail\_of\_nft()

> **get\_detail\_of\_nft**(`contractAddress`, `tokenId`): `Promise`\<[`get_detail_of_nft_Response`](../interfaces/get_detail_of_nft_Response.md)\>

Get detail of an NFT

This API allows you to retrieve details of one or more NFTs their identities

#### Parameters

• **contractAddress**: `string`

collection address - Contract address of NFT

• **tokenId**: `number`

ID of NFT token

#### Returns

`Promise`\<[`get_detail_of_nft_Response`](../interfaces/get_detail_of_nft_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:524](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L524)

***

### get\_details\_of\_multiple\_collections()

> **get\_details\_of\_multiple\_collections**(`contractAddresses`): `Promise`\<[`get_details_of_multiple_collections_Response`](../interfaces/get_details_of_multiple_collections_Response.md)\>

Get details of multiple collections

#### Parameters

• **contractAddresses**: `string`[]

An array of addresses

#### Returns

`Promise`\<[`get_details_of_multiple_collections_Response`](../interfaces/get_details_of_multiple_collections_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:699](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L699)

***

### get\_details\_of\_multiple\_nfts()

> **get\_details\_of\_multiple\_nfts**(`contractAddress`, `tokenIds`): `Promise`\<[`get_details_of_multiple_nfts_Response`](../interfaces/get_details_of_multiple_nfts_Response.md)\>

Get details of multiple NFTs

#### Parameters

• **contractAddress**: `string`

• **tokenIds**: `string`[]

#### Returns

`Promise`\<[`get_details_of_multiple_nfts_Response`](../interfaces/get_details_of_multiple_nfts_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:589](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L589)

***

### get\_nfts\_from\_collection()

> **get\_nfts\_from\_collection**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`get_nfts_from_collection_Response`](../interfaces/get_nfts_from_collection_Response.md)\>

Get NFTs from a collection

 This API is a must-have for game studios looking to efficiently manage their on-chain assets. With one simple request, game developers can access all NFTs in as collection.
 Game studios often deal with large volumes of NFTs, from in-game items to collectibles. This API provides an easy way to retrieve and organize all assets in a collection, helping teams focus on game development, not blockchain complexity.
 Ensure your NFT-based assets are accurately tracked and managed on-chain, providing transparency and security for both the studio and its players.
 No need for deep blockchain knowledge—this API handles the heavy lifting.

#### Parameters

• **contractAddress**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_nfts_from_collection_Response`](../interfaces/get_nfts_from_collection_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:616](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L616)

***

### get\_number\_of\_collection\_holdings\_by\_address()

> **get\_number\_of\_collection\_holdings\_by\_address**(`contractAddress`, `address`, `limit`?, `cursor`?): `Promise`\<[`get_number_of_collection_holdings_by_address_Response`](../interfaces/get_number_of_collection_holdings_by_address_Response.md)\>

Get the number of collection holdings by address

#### Parameters

• **contractAddress**: `string`

The address to get the number of collection holders for

• **address**: `string`

The account address

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_number_of_collection_holdings_by_address_Response`](../interfaces/get_number_of_collection_holdings_by_address_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:633](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L633)

***

### get\_owners\_of\_nft()

> **get\_owners\_of\_nft**(`contractAddress`, `tokenId`): `Promise`\<[`get_owners_of_nft_Response`](../interfaces/get_owners_of_nft_Response.md)\>

Get owners of an NFT

The most efficient way to access NFT ownership data. Whether you're building a marketplace, verifying digital assets, or analyzing trends in the NFT space, our API provides a streamlined solution to gather ownership information faster and more reliably than traditional.

You can travel through the whole list of owners in case an NFT has more than one owner.

#### Parameters

• **contractAddress**: `string`

• **tokenId**: `number`

#### Returns

`Promise`\<[`get_owners_of_nft_Response`](../interfaces/get_owners_of_nft_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:485](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L485)

***

### get\_token\_transfers\_of\_nft()

> **get\_token\_transfers\_of\_nft**(`contractAddress`, `tokenId`, `limit`?, `cursor`?): `Promise`\<[`get_token_transfers_of_nft_Response`](../interfaces/get_token_transfers_of_nft_Response.md)\>

Get token transfers of an NFT

Get all token transfers of an NFT

This API is a powerful tool to track the complete transfer history of any NFT. This API is invaluable for NFT creators, collectors, and marketplaces, providing detailed insights into every transaction an NFT has gone through. For collectors and investors, it enables easy tracking of an NFT’s provenance. NFT game studios and creators can also benefit from this API to monitor the distribution and movement of their assets across different users.

#### Parameters

• **contractAddress**: `string`

collection address

• **tokenId**: `number`

NFT ID

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_token_transfers_of_nft_Response`](../interfaces/get_token_transfers_of_nft_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:507](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L507)

***

### refresh\_nfts\_of\_collection\_async()

> **refresh\_nfts\_of\_collection\_async**(`contractAddress`, `tokenIds`): `Promise`\<[`refresh_nfts_of_collection_async_Response`](../interfaces/refresh_nfts_of_collection_async_Response.md)\>

Refresh NFTs of a collection in asynchronous manner

By using this API, users don't have to wait until the API complete the refreshing process. The API will return immediately after putting tokenIds to the background queue successfully, results of refreshing operation are not notified in any channel. You should call the [NFT details API](SkynetWeb3Provider.md#get_detail_of_nft) to verify refresh results.

#### Parameters

• **contractAddress**: `string`

• **tokenIds**: `string`[]

#### Returns

`Promise`\<[`refresh_nfts_of_collection_async_Response`](../interfaces/refresh_nfts_of_collection_async_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:569](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L569)

***

### refresh\_nfts\_of\_collection\_sync()

> **refresh\_nfts\_of\_collection\_sync**(`contractAddress`, `tokenIds`, `maxWait`): `Promise`\<[`refresh_nfts_of_collection_sync_Response`](../interfaces/refresh_nfts_of_collection_sync_Response.md)\>

Refresh NFTs of a collection in synchronous manner

By using this API, users have to wait until the API complete the refreshing process, tokenIds list can be specified in the request body as well as the maxWait duration in milliseconds (the maximum amount of wait time this call can accept). Without its presence, the API treat it as server default timeout of 10 seconds.

In the response, there are two lists, successes and failures tokenIds, failure reasons can vary and not be exposed. If an NFT keeps failing for a long time, you'd better contact developer support.

#### Parameters

• **contractAddress**: `string`

• **tokenIds**: `string`[]

• **maxWait**: `number`

milliseconds, when maxWait exceeds server timeout, then server timeout will be used instead

#### Returns

`Promise`\<[`refresh_nfts_of_collection_sync_Response`](../interfaces/refresh_nfts_of_collection_sync_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:546](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L546)

## Contracts

### get\_detail\_of\_contract()

> **get\_detail\_of\_contract**(`contract_addr`): `Promise`\<[`get_detail_of_contract_Response`](../interfaces/get_detail_of_contract_Response.md)\>

Get detail of a contract

#### Parameters

• **contract\_addr**: `string`

address of contract to get detail for

#### Returns

`Promise`\<[`get_detail_of_contract_Response`](../interfaces/get_detail_of_contract_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:720](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L720)

***

### get\_details\_of\_multiple\_contracts()

> **get\_details\_of\_multiple\_contracts**(`contractAddresses`): `Promise`\<[`get_details_of_multiple_contracts_Response`](../interfaces/get_details_of_multiple_contracts_Response.md)\>

Get details of multiple contracts

#### Parameters

• **contractAddresses**: `string`[]

An array of contract address to get details for

#### Returns

`Promise`\<[`get_details_of_multiple_contracts_Response`](../interfaces/get_details_of_multiple_contracts_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:736](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L736)

## Logs

### get\_logs\_by\_contract\_address()

> **get\_logs\_by\_contract\_address**(`contractAddress`, `limit`?, `cursor`?): `Promise`\<[`get_logs_by_contract_address_Response`](../interfaces/get_logs_by_contract_address_Response.md)\>

Get logs by contract address

#### Parameters

• **contractAddress**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_logs_by_contract_address_Response`](../interfaces/get_logs_by_contract_address_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:758](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L758)

***

### get\_logs\_by\_contract\_address\_and\_log\_topic()

> **get\_logs\_by\_contract\_address\_and\_log\_topic**(`contractAddress`, `topic`, `limit`?, `cursor`?): `Promise`\<[`get_logs_by_contract_address_and_log_topic_Response`](../interfaces/get_logs_by_contract_address_and_log_topic_Response.md)\>

Get logs by contract address and log topic

#### Parameters

• **contractAddress**: `string`

• **topic**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<[`get_logs_by_contract_address_and_log_topic_Response`](../interfaces/get_logs_by_contract_address_and_log_topic_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:777](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L777)

## NFTs

### search\_nfts\_by\_metadata()

> **search\_nfts\_by\_metadata**(`contractAddress`, `metadata`, `limit`?, `cursor`?): `Promise`\<[`search_nfts_by_metadata_Response`](../interfaces/search_nfts_by_metadata_Response.md)\>

Search NFTs by metadata

#### Parameters

• **contractAddress**: `string`

• **metadata**: [`search_nfts_by_metadata_Request`](../interfaces/search_nfts_by_metadata_Request.md)

• **limit?**: `number`

• **cursor?**: `string`

#### Returns

`Promise`\<[`search_nfts_by_metadata_Response`](../interfaces/search_nfts_by_metadata_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetProvider.ts:884](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L884)

## Other

### connection

> `protected` `readonly` **connection**: [`ConnectionInfo`](../type-aliases/ConnectionInfo.md)

#### Inherited from

`CustomSkynetProvider.connection`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:10](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-roninCustomSkynetProvider.ts#L10)

***

### concatUrl()

> `protected` **concatUrl**(`url`, `urlSuffix`): `string`

#### Parameters

• **url**: `string`

• **urlSuffix**: `string`

#### Returns

`string`

#### Inherited from

`CustomSkynetProvider.concatUrl`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:48](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-roninCustomSkynetProvider.ts#L48)

***

### getRonin()

> `protected` **getRonin**(`urlSuffix`, `config`?): `Promise`\<`AxiosResponse`\<`any`, `any`\>\>

Sends HTTP GET message to the service provider

#### Parameters

• **urlSuffix**: `string`

• **config?**: `AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`\>\>

#### Async

#### Throws

[EErrorCodeMessage](EErrorCodeMessage.md)

#### Overrides

`CustomSkynetProvider.getRonin`

#### Defined in

[src/web3-RoninSkynetProvider.ts:100](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L100)

***

### getRoninLimitCursor()

> `protected` **getRoninLimitCursor**(`url`, `limit`?, `cursor`?): `Promise`\<`any`\>

Places a call to the service, with optional limits and cursor

#### Parameters

• **url**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`Promise`\<`any`\>

#### Async

#### Inherited from

`CustomSkynetProvider.getRoninLimitCursor`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:103](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-roninCustomSkynetProvider.ts#L103)

***

### isErrorResponse()

> `protected` **isErrorResponse**(`e`): `boolean`

#### Parameters

• **e**: `unknown`

#### Returns

`boolean`

#### Inherited from

`CustomSkynetProvider.isErrorResponse`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:44](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-roninCustomSkynetProvider.ts#L44)

***

### postRonin()

> `protected` **postRonin**(`urlSuffix`, `data`): `Promise`\<`AxiosResponse`\<`any`, `any`\>\>

Sends HTTP POST message to the service provider

#### Parameters

• **urlSuffix**: `string`

• **data**: `any`

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`\>\>

#### Async

#### Throws

[EErrorCodeMessage](EErrorCodeMessage.md)

#### Overrides

`CustomSkynetProvider.postRonin`

#### Defined in

[src/web3-RoninSkynetProvider.ts:131](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L131)

***

### update\_url()

> `protected` **update\_url**(`url`, `limit`?, `cursor`?): `string`

Updates the url to include limit and cursors, if they're provided.

#### Parameters

• **url**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **cursor?**: `string`

the current pointer of the result set, to iterate to the next part of the results, it's returned by the previous call (nextCursor field), you get it and pass to the next call, present nextCursor means there will be more results to scroll, empty nextCursor means it reaches to the end of results

#### Returns

`string`

Updated url if limit and cursors provided, otherwise, returns the parameter url.

#### Inherited from

`CustomSkynetProvider.update_url`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:69](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-roninCustomSkynetProvider.ts#L69)

***

### update\_url\_with\_Params()

> `protected` **update\_url\_with\_Params**(`url`, `params`): `string`

#### Parameters

• **url**: `string`

• **params**: `string` \| `URLSearchParams`

#### Returns

`string`

#### Inherited from

`CustomSkynetProvider.update_url_with_Params`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:81](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-roninCustomSkynetProvider.ts#L81)

## Token transfers

### get\_token\_transfers\_by\_block\_range()

> **get\_token\_transfers\_by\_block\_range**(`fromBlock`, `toBlock`, `optionalParams`?): `Promise`\<[`get_token_transfers_by_block_range_Response`](../interfaces/get_token_transfers_by_block_range_Response.md)\>

Get token transfers by block range, with maximum number of blocks allowed of 1000 blocks

#### Parameters

• **fromBlock**: `number`

• **toBlock**: `number`

• **optionalParams?**: [`get_token_transfers_by_block_range_OptionalParams`](../interfaces/get_token_transfers_by_block_range_OptionalParams.md)

#### Returns

`Promise`\<[`get_token_transfers_by_block_range_Response`](../interfaces/get_token_transfers_by_block_range_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:849](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L849)

## Transactions

### get\_detail\_of\_transaction()

> **get\_detail\_of\_transaction**(`txHash`): `Promise`\<[`get_detail_of_transaction_Response`](../interfaces/get_detail_of_transaction_Response.md)\>

Get detail of a transaction

#### Parameters

• **txHash**: `string`

hash of the transaction to get

#### Returns

`Promise`\<[`get_detail_of_transaction_Response`](../interfaces/get_detail_of_transaction_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:813](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L813)

***

### get\_details\_of\_multiple\_transactions()

> **get\_details\_of\_multiple\_transactions**(`hashes`): `Promise`\<[`get_details_of_multiple_transactions_Response`](../interfaces/get_details_of_multiple_transactions_Response.md)\>

Get details of multiple transactions

#### Parameters

• **hashes**: `string`[]

hashes of transactions

#### Returns

`Promise`\<[`get_details_of_multiple_transactions_Response`](../interfaces/get_details_of_multiple_transactions_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:829](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L829)

***

### get\_internal\_transaction\_of\_transaction()

> **get\_internal\_transaction\_of\_transaction**(`txHash`): `Promise`\<[`get_internal_transaction_of_transaction_Response`](../interfaces/get_internal_transaction_of_transaction_Response.md)\>

Get internal transaction of a transaction

#### Parameters

• **txHash**: `string`

hash of the transaction to get

#### Returns

`Promise`\<[`get_internal_transaction_of_transaction_Response`](../interfaces/get_internal_transaction_of_transaction_Response.md)\>

#### Async

#### Throws

EErrorCodeMessage

#### Defined in

[src/web3-RoninSkynetProvider.ts:797](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-RoninSkynetProvider.ts#L797)
