[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / SkynetRESTProvider

# Class: SkynetRESTProvider

This class implements the 
[Skynet REST API](https://docs.skymavis.com/api/ronin-rest/skynet-rest-api).  

To create a SkynetRESTProvider quickly, call [createSkynetRESTProvider](../functions/createSkynetRESTProvider.md) with the API key.  
To customize headers, call the SkynetRESTProvider constructor with a tailored [ConnectionInfo](../type-aliases/ConnectionInfo.md) parameter.

## Extends

- `CustomSkynetProvider`

## Constructors

### new SkynetRESTProvider()

> **new SkynetRESTProvider**(`connection`): [`SkynetRESTProvider`](SkynetRESTProvider.md)

Creates an instance of CustomSkynetProvider. Used by SkynetWeb3Provider and SkynetRESTProvider.

#### Parameters

• **connection**: [`ConnectionInfo`](../type-aliases/ConnectionInfo.md)

The URL to use, headers, etc

#### Returns

[`SkynetRESTProvider`](SkynetRESTProvider.md)

#### Throws

[EEmptyHeaders](EEmptyHeaders.md) when headers are present, but empty

#### Throws

[EEmptyUrl](EEmptyUrl.md) when URL is empty

#### Throws

[ENoApiKey](ENoApiKey.md) when X-API-KEY is absent

#### Throws

[ENoHeaders](ENoHeaders.md) when headers are absent

#### Inherited from

`CustomSkynetProvider.constructor`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:22](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-roninCustomSkynetProvider.ts#L22)

## Accounts

### get\_Account\_Activities()

> **get\_Account\_Activities**(`account_addr`, `body`): `Promise`\<[`get_Account_Activities_Response`](../interfaces/get_Account_Activities_Response.md)\>

Get account activities on Ronin chain

Get an account's activities on the Ronin chain (Transfers, Approvals, Mint, Burn, Marketplace, Deposit, Staking, Add/Remove Liquidity).

#### Parameters

• **account\_addr**: `string`

• **body**: [`get_Account_Activities_Request_Body`](../interfaces/get_Account_Activities_Request_Body.md)

#### Returns

`Promise`\<[`get_Account_Activities_Response`](../interfaces/get_Account_Activities_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:157](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L157)

***

### get\_account\_info\_by\_address()

> **get\_account\_info\_by\_address**(`account_addr`): `Promise`\<[`get_account_info_by_address_Response`](../interfaces/get_account_info_by_address_Response.md)\>

Get account info by address

Get an account's information by its address.

#### Parameters

• **account\_addr**: `string`

#### Returns

`Promise`\<[`get_account_info_by_address_Response`](../interfaces/get_account_info_by_address_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:174](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L174)

***

### search\_wealthiest\_accounts()

> **search\_wealthiest\_accounts**(`limit`?, `offset`?): `Promise`\<[`search_wealthiest_accounts_Response`](../interfaces/search_wealthiest_accounts_Response.md)\>

Search wealthiest accounts

Get the wealthiest accounts.

#### Parameters

• **limit?**: `number`

• **offset?**: `string`

#### Returns

`Promise`\<[`search_wealthiest_accounts_Response`](../interfaces/search_wealthiest_accounts_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:192](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L192)

## Block

### get\_the\_finalized\_block\_number()

> **get\_the\_finalized\_block\_number**(): `Promise`\<[`get_the_finalized_block_number_Response`](../interfaces/get_the_finalized_block_number_Response.md)\>

Get the finalized block number

Returns the most recent block that has been confirmed as final and that cannot be reverted, even by a reorg.

#### Returns

`Promise`\<[`get_the_finalized_block_number_Response`](../interfaces/get_the_finalized_block_number_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:234](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L234)

***

### get\_the\_latest\_block\_number()

> **get\_the\_latest\_block\_number**(): `Promise`\<[`get_the_finalized_block_number_Response`](../interfaces/get_the_finalized_block_number_Response.md)\>

Get the latest block number

Returns the most recent block that has been added to the chain, but that can still be reverted by a reorg.

#### Returns

`Promise`\<[`get_the_finalized_block_number_Response`](../interfaces/get_the_finalized_block_number_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:250](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L250)

## Blocks

### get\_blocks()

> **get\_blocks**(`params`?): `Promise`\<[`get_blocks_Response`](../interfaces/get_blocks_Response.md)\>

Get blocks

If block_hash is present, always search by block_hash first. The block_number value must be positive. 
If there is no block_hash or block_number present, the API searches for all blocks. 
The limit and offset parameters are used to paginate results.

#### Parameters

• **params?**: [`get_blocks_Param`](../interfaces/get_blocks_Param.md)

optional query parameters

#### Returns

`Promise`\<[`get_blocks_Response`](../interfaces/get_blocks_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:210](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L210)

## Contracts

### get\_contract\_by\_address()

> **get\_contract\_by\_address**(`contractAddr`): `Promise`\<[`get_contract_by_address_Response`](../interfaces/get_contract_by_address_Response.md)\>

Get contract by address

Get a contract by its address.

#### Parameters

• **contractAddr**: `string`

#### Returns

`Promise`\<[`get_contract_by_address_Response`](../interfaces/get_contract_by_address_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:267](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L267)

## NFTs

### get\_multiple\_NFTs()

> **get\_multiple\_NFTs**(`query`): `Promise`\<[`get_multiple_NFTs_Response`](../interfaces/get_multiple_NFTs_Response.md)\>

Get multiple NFTs

Get multiple NFTs that matched the specified IDs.

#### Parameters

• **query**: [`get_multiple_NFTs_Query`](../interfaces/get_multiple_NFTs_Query.md)

#### Returns

`Promise`\<[`get_multiple_NFTs_Response`](../interfaces/get_multiple_NFTs_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:302](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L302)

***

### get\_summary\_for\_individual\_NFT()

> **get\_summary\_for\_individual\_NFT**(`contractAddr`, `tokenId`): `Promise`\<[`get_summary_for_individual_NFT_Response`](../interfaces/get_summary_for_individual_NFT_Response.md)\>

Get summary for individual NFT

Get summarized information for an individual NFT.

#### Parameters

• **contractAddr**: `string`

• **tokenId**: `number`

#### Returns

`Promise`\<[`get_summary_for_individual_NFT_Response`](../interfaces/get_summary_for_individual_NFT_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:285](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L285)

***

### get\_summary\_for\_multiple\_NFTs()

> **get\_summary\_for\_multiple\_NFTs**(`query`): `Promise`\<[`get_summary_for_multiple_NFTs_Response`](../interfaces/get_summary_for_multiple_NFTs_Response.md)\>

Get summary for multiple NFTs

Get summarized information for multiple NFTs.

#### Parameters

• **query**: [`get_summary_for_multiple_NFTs_Query`](../interfaces/get_summary_for_multiple_NFTs_Query.md)

#### Returns

`Promise`\<[`get_summary_for_multiple_NFTs_Response`](../interfaces/get_summary_for_multiple_NFTs_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:353](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L353)

***

### search\_for\_matched\_NFTs()

> **search\_for\_matched\_NFTs**(`query`): `Promise`\<[`search_for_matched_NFTs_Response`](../interfaces/search_for_matched_NFTs_Response.md)\>

Search for matched NFTs

Search for NFTs that matched the specified search parameters.

#### Parameters

• **query**: [`search_for_matched_NFTs_Query`](../type-aliases/search_for_matched_NFTs_Query.md)

#### Returns

`Promise`\<[`search_for_matched_NFTs_Response`](../interfaces/search_for_matched_NFTs_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:336](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L336)

***

### search\_for\_NFTs\_by\_metadata\_attributes()

> **search\_for\_NFTs\_by\_metadata\_attributes**(`query`): `Promise`\<[`search_for_NFTs_by_metadata_attributes_Response`](../interfaces/search_for_NFTs_by_metadata_attributes_Response.md)\>

DSearch for NFTs by metadata attributes

Search for NFTs that match the specified metadata attributes.

#### Parameters

• **query**: [`search_for_NFTs_by_metadata_attributes_Query`](../interfaces/search_for_NFTs_by_metadata_attributes_Query.md)

#### Returns

`Promise`\<[`search_for_NFTs_by_metadata_attributes_Response`](../interfaces/search_for_NFTs_by_metadata_attributes_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:319](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L319)

## Other

### connection

> `protected` `readonly` **connection**: [`ConnectionInfo`](../type-aliases/ConnectionInfo.md)

#### Inherited from

`CustomSkynetProvider.connection`

#### Defined in

[src/web3-roninCustomSkynetProvider.ts:10](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-roninCustomSkynetProvider.ts#L10)

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

[src/web3-roninCustomSkynetProvider.ts:48](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-roninCustomSkynetProvider.ts#L48)

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

[src/web3-RoninSkynetRESTProvider.ts:91](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L91)

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

[src/web3-roninCustomSkynetProvider.ts:103](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-roninCustomSkynetProvider.ts#L103)

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

[src/web3-roninCustomSkynetProvider.ts:44](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-roninCustomSkynetProvider.ts#L44)

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

[src/web3-RoninSkynetRESTProvider.ts:122](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L122)

***

### search\_token\_transfers()

> **search\_token\_transfers**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:596](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L596)

***

### update\_url()

> `protected` **update\_url**(`url`, `limit`?, `offset`?): `string`

Updates the url to include limit and cursors, if they're provided.

#### Parameters

• **url**: `string`

• **limit?**: `number`

how many items can be return in a single response, maximum 200

• **offset?**: `string` \| `number`

#### Returns

`string`

Updated url if limit and cursors provided, otherwise, returns the parameter url.

#### Overrides

`CustomSkynetProvider.update_url`

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:69](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L69)

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

[src/web3-roninCustomSkynetProvider.ts:81](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-roninCustomSkynetProvider.ts#L81)

## Supplies

### get\_circulating\_RON\_supply()

> **get\_circulating\_RON\_supply**(`from`?, `to`?): `Promise`\<[`get_circulating_RON_supply_Response`](../interfaces/get_circulating_RON_supply_Response.md)\>

Get circulating RON supply

Get ronin circulating supply for RON. When getting by date range, both param from and to must be present, from and to must follow date format YYYY-MM-DD, for example '2023-10-29'. Max difference allowed between from and to 100 days.

#### Parameters

• **from?**: `string`

YYYY-MM-DD

• **to?**: `string`

YYYY-MM-DD

#### Returns

`Promise`\<[`get_circulating_RON_supply_Response`](../interfaces/get_circulating_RON_supply_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:425](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L425)

***

### get\_circulating\_token\_supply()

> **get\_circulating\_token\_supply**(`symbol`): `Promise`\<[`get_circulating_token_supply_Response`](../interfaces/get_circulating_token_supply_Response.md)\>

Get circulating token supply

Get the circulating supply for a token.

#### Parameters

• **symbol**: `string`

#### Returns

`Promise`\<[`get_circulating_token_supply_Response`](../interfaces/get_circulating_token_supply_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:370](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L370)

***

### get\_total\_RON\_supply()

> **get\_total\_RON\_supply**(): `Promise`\<[`get_total_RON_supply_Response`](../interfaces/get_total_RON_supply_Response.md)\>

Get total RON supply

Get the total supply for RON.

#### Returns

`Promise`\<[`get_total_RON_supply_Response`](../interfaces/get_total_RON_supply_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:467](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L467)

***

### get\_total\_token\_supply()

> **get\_total\_token\_supply**(`symbol`): `Promise`\<[`get_total_token_supply_Response`](../interfaces/get_total_token_supply_Response.md)\>

Get total token supply

Get the total supply for the specified token.

#### Parameters

• **symbol**: `string`

#### Returns

`Promise`\<[`get_total_token_supply_Response`](../interfaces/get_total_token_supply_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:407](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L407)

***

### query\_RON\_supply()

> **query\_RON\_supply**(`supply_type`): `Promise`\<`number`\>

Query RON supply

Get the total supply or circulating supply for RON.

#### Parameters

• **supply\_type**: [`query_token_supply_Query`](../enumerations/query_token_supply_Query.md)

#### Returns

`Promise`\<`number`\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:448](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L448)

***

### query\_token\_supply()

> **query\_token\_supply**(`symbol`, `supply_type`): `Promise`\<[`get_circulating_token_supply_Response`](../interfaces/get_circulating_token_supply_Response.md)\>

Query token supply

Get the total supply or circulating supply for the specified token.

#### Parameters

• **symbol**: `string`

• **supply\_type**: [`query_token_supply_Query`](../enumerations/query_token_supply_Query.md)

#### Returns

`Promise`\<[`get_circulating_token_supply_Response`](../interfaces/get_circulating_token_supply_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:388](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L388)

## Token balances

### get\_summary\_of\_token\_balances()

> **get\_summary\_of\_token\_balances**(`query`): `Promise`\<[`get_summary_of_token_balances_Response`](../interfaces/get_summary_of_token_balances_Response.md)\>

Get summary of token balances

Get the summary of token balances for the specified owner address.

#### Parameters

• **query**: [`get_summary_of_token_balances_Query`](../interfaces/get_summary_of_token_balances_Query.md)

#### Returns

`Promise`\<[`get_summary_of_token_balances_Response`](../interfaces/get_summary_of_token_balances_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:570](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L570)

***

### search\_token\_balances()

> **search\_token\_balances**(`query`): `Promise`\<[`search_token_balances_Response`](../interfaces/search_token_balances_Response.md)\>

Search token balances

Search token balances.

#### Parameters

• **query**: [`search_token_balances_Query`](../interfaces/search_token_balances_Query.md)

#### Returns

`Promise`\<[`search_token_balances_Response`](../interfaces/search_token_balances_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:553](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L553)

## Token transfers

### list\_token\_transfers\_by\_timestamp()

> **list\_token\_transfers\_by\_timestamp**(`limit`?, `offset`?): `Promise`\<[`list_token_transfers_by_timestamp_Response`](../interfaces/list_token_transfers_by_timestamp_Response.md)\>

List token transfers by timestamp

List token transfers ordered by timestamp.

#### Parameters

• **limit?**: `number`

• **offset?**: `number`

#### Returns

`Promise`\<[`list_token_transfers_by_timestamp_Response`](../interfaces/list_token_transfers_by_timestamp_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:588](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L588)

***

### list\_token\_transfers\_by\_transaction\_hash()

> **list\_token\_transfers\_by\_transaction\_hash**(`transaction_hashes`): `Promise`\<[`list_token_transfers_by_transaction_hash_Response`](../interfaces/list_token_transfers_by_transaction_hash_Response.md)\>

List token transfers by transaction hash

List token transfers ordered by transaction hash.

#### Parameters

• **transaction\_hashes**: `string`[]

#### Returns

`Promise`\<[`list_token_transfers_by_transaction_hash_Response`](../interfaces/list_token_transfers_by_transaction_hash_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:613](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L613)

## Tokens

### get\_overview\_for\_tokens()

> **get\_overview\_for\_tokens**(`contractAddresses`): `Promise`\<[`get_overview_for_tokens_Response`](../interfaces/get_overview_for_tokens_Response.md)\>

Get overview for tokens

Get an overview for tokens that matched the specified contract addresses.

#### Parameters

• **contractAddresses**: `string`[]

#### Returns

`Promise`\<[`get_overview_for_tokens_Response`](../interfaces/get_overview_for_tokens_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:518](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L518)

***

### get\_token\_by\_address()

> **get\_token\_by\_address**(`contractAddr`): `Promise`\<[`get_token_by_address_Response`](../interfaces/get_token_by_address_Response.md)\>

Get token by address

Get a token by its address.

#### Parameters

• **contractAddr**: `string`

#### Returns

`Promise`\<[`get_token_by_address_Response`](../interfaces/get_token_by_address_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:484](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L484)

***

### get\_token\_top\_holders()

> **get\_token\_top\_holders**(`contractAddr`): `Promise`\<[`get_token_top_holders_Response`](../interfaces/get_token_top_holders_Response.md)\>

Get token's top holders

Get the top holders of the specified token.

#### Parameters

• **contractAddr**: `string`

#### Returns

`Promise`\<[`get_token_top_holders_Response`](../interfaces/get_token_top_holders_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:501](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L501)

***

### search\_tokens()

> **search\_tokens**(`query`): `Promise`\<[`search_tokens_Response`](../interfaces/search_tokens_Response.md)\>

Search tokens

Search tokens.

#### Parameters

• **query**: [`search_tokens_Query`](../interfaces/search_tokens_Query.md)

#### Returns

`Promise`\<[`search_tokens_Response`](../interfaces/search_tokens_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:535](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L535)

## Transactions

### get\_daily\_count\_of\_transactions()

> **get\_daily\_count\_of\_transactions**(): `Promise`\<[`get_daily_count_of_transactions_Response`](../interfaces/get_daily_count_of_transactions_Response.md)\>

Get daily count of transactions

Get the daily count of transactions.

#### Returns

`Promise`\<[`get_daily_count_of_transactions_Response`](../interfaces/get_daily_count_of_transactions_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:684](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L684)

***

### get\_multiple\_transactions\_by\_hashes()

> **get\_multiple\_transactions\_by\_hashes**(`hashes`): `Promise`\<[`get_multiple_transactions_by_hashes_Response`](../interfaces/get_multiple_transactions_by_hashes_Response.md)\>

Get multiple transactions by hashes

Returns the details of multiple transactions by their hashes.

#### Parameters

• **hashes**: `string`[]

#### Returns

`Promise`\<[`get_multiple_transactions_by_hashes_Response`](../interfaces/get_multiple_transactions_by_hashes_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:665](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L665)

***

### get\_transaction\_by\_hash()

> **get\_transaction\_by\_hash**(`hash`): `Promise`\<[`get_transaction_by_hash_Response`](../interfaces/get_transaction_by_hash_Response.md)\>

Get transaction by hash

Returns the details of an individual transaction by its hash.

#### Parameters

• **hash**: `string`

#### Returns

`Promise`\<[`get_transaction_by_hash_Response`](../interfaces/get_transaction_by_hash_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:648](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L648)

***

### list\_transactions()

> **list\_transactions**(`limit`?, `offset`?): `Promise`\<[`list_transactions_Response`](../interfaces/list_transactions_Response.md)\>

List transactions

List transactions.

#### Parameters

• **limit?**: `number`

• **offset?**: `number`

#### Returns

`Promise`\<[`list_transactions_Response`](../interfaces/list_transactions_Response.md)\>

#### Async

#### Defined in

[src/web3-RoninSkynetRESTProvider.ts:631](https://github.com/chuacw/web3-ronin-provider/blob/3fc214e27766815592deb24c85c0a23477593bed/src/web3-RoninSkynetRESTProvider.ts#L631)
