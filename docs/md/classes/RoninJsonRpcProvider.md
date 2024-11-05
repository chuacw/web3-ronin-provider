[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / RoninJsonRpcProvider

# Class: RoninJsonRpcProvider

A wrapper to workaround gasPrice issue in etherjs v5 after London
hardfork when sending transactions for Ronin.

## Extends

- `JsonRpcProvider`

## Constructors

### new RoninJsonRpcProvider()

> **new RoninJsonRpcProvider**(`url`?, `network`?): [`RoninJsonRpcProvider`](RoninJsonRpcProvider.md)

#### Parameters

• **url?**: `string` \| `ConnectionInfo`

• **network?**: `Networkish`

#### Returns

[`RoninJsonRpcProvider`](RoninJsonRpcProvider.md)

#### Overrides

`JsonRpcProvider.constructor`

#### Defined in

[src/web3-RoninJsonRpcProvider.ts:12](https://github.com/chuacw/web3-ronin-provider/blob/a0101c455e71e221c1f508afff12749e77bf1fd8/src/web3-RoninJsonRpcProvider.ts#L12)

## Properties

### \_bootstrapPoll

> **\_bootstrapPoll**: `Timer`

#### Inherited from

`JsonRpcProvider._bootstrapPoll`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:66

***

### \_emitted

> **\_emitted**: `object`

#### Index Signature

 \[`eventName`: `string`\]: `number` \| `"pending"`

#### Inherited from

`JsonRpcProvider._emitted`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:61

***

### \_eventLoopCache

> **\_eventLoopCache**: `Record`\<`string`, `Promise`\<`any`\>\>

#### Inherited from

`JsonRpcProvider._eventLoopCache`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:32

***

### \_events

> **\_events**: `Event`[]

#### Inherited from

`JsonRpcProvider._events`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:59

***

### \_fastBlockNumber

> **\_fastBlockNumber**: `number`

#### Inherited from

`JsonRpcProvider._fastBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:69

***

### \_fastBlockNumberPromise

> **\_fastBlockNumberPromise**: `Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider._fastBlockNumberPromise`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:70

***

### \_fastQueryDate

> **\_fastQueryDate**: `number`

#### Inherited from

`JsonRpcProvider._fastQueryDate`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:71

***

### \_internalBlockNumber

> **\_internalBlockNumber**: `Promise`\<`object`\>

#### Type declaration

##### blockNumber

> **blockNumber**: `number`

##### reqTime

> **reqTime**: `number`

##### respTime

> **respTime**: `number`

#### Inherited from

`JsonRpcProvider._internalBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:73

***

### \_isProvider

> `readonly` **\_isProvider**: `boolean`

#### Inherited from

`JsonRpcProvider._isProvider`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:152

***

### \_lastBlockNumber

> **\_lastBlockNumber**: `number`

#### Inherited from

`JsonRpcProvider._lastBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:67

***

### \_maxFilterBlockRange

> **\_maxFilterBlockRange**: `number`

#### Inherited from

`JsonRpcProvider._maxFilterBlockRange`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:68

***

### \_maxInternalBlockNumber

> **\_maxInternalBlockNumber**: `number`

#### Inherited from

`JsonRpcProvider._maxInternalBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:72

***

### \_network

> **\_network**: `Network`

#### Inherited from

`JsonRpcProvider._network`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:58

***

### \_networkPromise

> **\_networkPromise**: `Promise`\<`Network`\>

#### Inherited from

`JsonRpcProvider._networkPromise`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:57

***

### \_nextId

> **\_nextId**: `number`

#### Inherited from

`JsonRpcProvider._nextId`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:31

***

### \_pendingFilter

> **\_pendingFilter**: `Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider._pendingFilter`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:30

***

### \_poller

> **\_poller**: `Timer`

#### Inherited from

`JsonRpcProvider._poller`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:65

***

### \_pollingInterval

> **\_pollingInterval**: `number`

#### Inherited from

`JsonRpcProvider._pollingInterval`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:64

***

### anyNetwork

> `readonly` **anyNetwork**: `boolean`

#### Inherited from

`JsonRpcProvider.anyNetwork`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:78

***

### connection

> `readonly` **connection**: `ConnectionInfo`

#### Inherited from

`JsonRpcProvider.connection`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:29

***

### disableCcipRead

> **disableCcipRead**: `boolean`

#### Inherited from

`JsonRpcProvider.disableCcipRead`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:79

***

### formatter

> **formatter**: `Formatter`

#### Inherited from

`JsonRpcProvider.formatter`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### \_cache

#### Get Signature

> **get** **\_cache**(): `Record`\<`string`, `Promise`\<`any`\>\>

##### Returns

`Record`\<`string`, `Promise`\<`any`\>\>

#### Inherited from

`JsonRpcProvider._cache`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:33

***

### blockNumber

#### Get Signature

> **get** **blockNumber**(): `number`

##### Returns

`number`

#### Inherited from

`JsonRpcProvider.blockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:101

***

### network

#### Get Signature

> **get** **network**(): `Network`

##### Returns

`Network`

#### Inherited from

`JsonRpcProvider.network`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:98

***

### polling

#### Get Signature

> **get** **polling**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **polling**(`value`): `void`

##### Parameters

• **value**: `boolean`

##### Returns

`void`

#### Inherited from

`JsonRpcProvider.polling`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:102

***

### pollingInterval

#### Get Signature

> **get** **pollingInterval**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **pollingInterval**(`value`): `void`

##### Parameters

• **value**: `number`

##### Returns

`void`

#### Inherited from

`JsonRpcProvider.pollingInterval`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:104

***

### ready

#### Get Signature

> **get** **ready**(): `Promise`\<`Network`\>

##### Returns

`Promise`\<`Network`\>

#### Inherited from

`JsonRpcProvider.ready`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener()

> **\_addEventListener**(`eventName`, `listener`, `once`): `this`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

• **once**: `boolean`

#### Returns

`this`

#### Inherited from

`JsonRpcProvider._addEventListener`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:147

***

### \_call()

> **\_call**(`transaction`, `blockTag`, `attempt`): `Promise`\<`string`\>

#### Parameters

• **transaction**: `TransactionRequest`

• **blockTag**: `BlockTag`

• **attempt**: `number`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`JsonRpcProvider._call`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:127

***

### \_getAddress()

> **\_getAddress**(`addressOrName`): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`JsonRpcProvider._getAddress`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:130

***

### \_getBlock()

> **\_getBlock**(`blockHashOrBlockTag`, `includeTransactions`?): `Promise`\<`Block` \| `BlockWithTransactions`\>

#### Parameters

• **blockHashOrBlockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

• **includeTransactions?**: `boolean`

#### Returns

`Promise`\<`Block` \| `BlockWithTransactions`\>

#### Inherited from

`JsonRpcProvider._getBlock`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:131

***

### \_getBlockTag()

> **\_getBlockTag**(`blockTag`): `Promise`\<`BlockTag`\>

#### Parameters

• **blockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`BlockTag`\>

#### Inherited from

`JsonRpcProvider._getBlockTag`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:138

***

### \_getFastBlockNumber()

> **\_getFastBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider._getFastBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:106

***

### \_getFilter()

> **\_getFilter**(`filter`): `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Parameters

• **filter**: `Filter` \| `FilterByBlockHash` \| `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Returns

`Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Inherited from

`JsonRpcProvider._getFilter`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:126

***

### \_getInternalBlockNumber()

> **\_getInternalBlockNumber**(`maxAge`): `Promise`\<`number`\>

#### Parameters

• **maxAge**: `number`

#### Returns

`Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider._getInternalBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:95

***

### \_getResolver()

> **\_getResolver**(`name`, `operation`?): `Promise`\<`string`\>

#### Parameters

• **name**: `string`

• **operation?**: `string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`JsonRpcProvider._getResolver`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:140

***

### \_getTransactionRequest()

> **\_getTransactionRequest**(`transaction`): `Promise`\<`Transaction`\>

#### Parameters

• **transaction**: `Deferrable`\<`TransactionRequest`\>

#### Returns

`Promise`\<`Transaction`\>

#### Inherited from

`JsonRpcProvider._getTransactionRequest`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:125

***

### \_ready()

> **\_ready**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`JsonRpcProvider._ready`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:90

***

### \_setFastBlockNumber()

> **\_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

• **blockNumber**: `number`

#### Returns

`void`

#### Inherited from

`JsonRpcProvider._setFastBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:107

***

### \_startEvent()

> **\_startEvent**(`event`): `void`

#### Parameters

• **event**: `Event`

#### Returns

`void`

#### Inherited from

`JsonRpcProvider._startEvent`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:44

***

### \_startPending()

> **\_startPending**(): `void`

#### Returns

`void`

#### Inherited from

`JsonRpcProvider._startPending`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:45

***

### \_stopEvent()

> **\_stopEvent**(`event`): `void`

#### Parameters

• **event**: `Event`

#### Returns

`void`

#### Inherited from

`JsonRpcProvider._stopEvent`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:46

***

### \_uncachedDetectNetwork()

> **\_uncachedDetectNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`JsonRpcProvider._uncachedDetectNetwork`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:37

***

### \_waitForTransaction()

> **\_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`\<`TransactionReceipt`\>

#### Parameters

• **transactionHash**: `string`

• **confirmations**: `number`

• **timeout**: `number`

• **replaceable**

• **replaceable.data**: `string`

• **replaceable.from**: `string`

• **replaceable.nonce**: `number`

• **replaceable.startBlock**: `number`

• **replaceable.to**: `string`

• **replaceable.value**: `BigNumber`

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

`JsonRpcProvider._waitForTransaction`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:109

***

### \_wrapTransaction()

> **\_wrapTransaction**(`tx`, `hash`?, `startBlock`?): `TransactionResponse`

#### Parameters

• **tx**: `Transaction`

• **hash?**: `string`

• **startBlock?**: `number`

#### Returns

`TransactionResponse`

#### Inherited from

`JsonRpcProvider._wrapTransaction`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:123

***

### addListener()

> **addListener**(`eventName`, `listener`): `Provider`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`Provider`

#### Inherited from

`JsonRpcProvider.addListener`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

***

### call()

> **call**(`transaction`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **transaction**: `Deferrable`\<`TransactionRequest`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`JsonRpcProvider.call`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:128

***

### ccipReadFetch()

> **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`\<`null` \| `string`\>

#### Parameters

• **tx**: `Transaction`

• **calldata**: `string`

• **urls**: `string`[]

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`JsonRpcProvider.ccipReadFetch`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:94

***

### detectNetwork()

> **detectNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`JsonRpcProvider.detectNetwork`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:36

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

• **eventName**: `EventType`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

`JsonRpcProvider.emit`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:150

***

### estimateGas()

> **estimateGas**(`transaction`): `Promise`\<`BigNumber`\>

#### Parameters

• **transaction**: `Deferrable`\<`TransactionRequest`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`JsonRpcProvider.estimateGas`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:129

***

### getAvatar()

> **getAvatar**(`nameOrAddress`): `Promise`\<`null` \| `string`\>

#### Parameters

• **nameOrAddress**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`JsonRpcProvider.getAvatar`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:143

***

### getBalance()

> **getBalance**(`addressOrName`, `blockTag`?): `Promise`\<`BigNumber`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`JsonRpcProvider.getBalance`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:119

***

### getBlock()

> **getBlock**(`blockHashOrBlockTag`): `Promise`\<`Block`\>

#### Parameters

• **blockHashOrBlockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`Block`\>

#### Inherited from

`JsonRpcProvider.getBlock`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:132

***

### getBlockNumber()

> **getBlockNumber**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider.getBlockNumber`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:117

***

### getBlockWithTransactions()

> **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`\<`BlockWithTransactions`\>

#### Parameters

• **blockHashOrBlockTag**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`BlockWithTransactions`\>

#### Inherited from

`JsonRpcProvider.getBlockWithTransactions`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:133

***

### getCode()

> **getCode**(`addressOrName`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`JsonRpcProvider.getCode`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:121

***

### getEtherPrice()

> **getEtherPrice**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider.getEtherPrice`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:137

***

### getFeeData()

> **getFeeData**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### gasPrice

> **gasPrice**: `null` \| `BigNumber`

##### lastBaseFeePerGas

> **lastBaseFeePerGas**: `null` \| `BigNumber`

##### maxFeePerGas

> **maxFeePerGas**: `null` \| `BigNumber`

##### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `null` \| `BigNumber`

#### Overrides

`JsonRpcProvider.getFeeData`

#### Defined in

[src/web3-RoninJsonRpcProvider.ts:17](https://github.com/chuacw/web3-ronin-provider/blob/a0101c455e71e221c1f508afff12749e77bf1fd8/src/web3-RoninJsonRpcProvider.ts#L17)

***

### getGasPrice()

> **getGasPrice**(): `Promise`\<`BigNumber`\>

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`JsonRpcProvider.getGasPrice`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:118

***

### getLogs()

> **getLogs**(`filter`): `Promise`\<`Log`[]\>

#### Parameters

• **filter**: `Filter` \| `FilterByBlockHash` \| `Promise`\<`Filter` \| `FilterByBlockHash`\>

#### Returns

`Promise`\<`Log`[]\>

#### Inherited from

`JsonRpcProvider.getLogs`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:136

***

### getNetwork()

> **getNetwork**(): `Promise`\<`Network`\>

#### Returns

`Promise`\<`Network`\>

#### Inherited from

`JsonRpcProvider.getNetwork`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:100

***

### getResolver()

> **getResolver**(`name`): `Promise`\<`null` \| `Resolver`\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`null` \| `Resolver`\>

#### Inherited from

`JsonRpcProvider.getResolver`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:139

***

### getSigner()

> **getSigner**(`addressOrIndex`?): `JsonRpcSigner`

#### Parameters

• **addressOrIndex?**: `string` \| `number`

#### Returns

`JsonRpcSigner`

#### Inherited from

`JsonRpcProvider.getSigner`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:38

***

### getStorageAt()

> **getStorageAt**(`addressOrName`, `position`, `blockTag`?): `Promise`\<`string`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **position**: `BigNumberish` \| `Promise`\<`BigNumberish`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`JsonRpcProvider.getStorageAt`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:122

***

### getTransaction()

> **getTransaction**(`transactionHash`): `Promise`\<`TransactionResponse`\>

#### Parameters

• **transactionHash**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`JsonRpcProvider.getTransaction`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:134

***

### getTransactionCount()

> **getTransactionCount**(`addressOrName`, `blockTag`?): `Promise`\<`number`\>

#### Parameters

• **addressOrName**: `string` \| `Promise`\<`string`\>

• **blockTag?**: `BlockTag` \| `Promise`\<`BlockTag`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`JsonRpcProvider.getTransactionCount`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:120

***

### getTransactionReceipt()

> **getTransactionReceipt**(`transactionHash`): `Promise`\<`TransactionReceipt`\>

#### Parameters

• **transactionHash**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

`JsonRpcProvider.getTransactionReceipt`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:135

***

### getUncheckedSigner()

> **getUncheckedSigner**(`addressOrIndex`?): `UncheckedJsonRpcSigner`

#### Parameters

• **addressOrIndex?**: `string` \| `number`

#### Returns

`UncheckedJsonRpcSigner`

#### Inherited from

`JsonRpcProvider.getUncheckedSigner`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:39

***

### listAccounts()

> **listAccounts**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`JsonRpcProvider.listAccounts`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:40

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

• **eventName?**: `EventType`

#### Returns

`number`

#### Inherited from

`JsonRpcProvider.listenerCount`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:151

***

### listeners()

> **listeners**(`eventName`?): `Listener`[]

#### Parameters

• **eventName?**: `EventType`

#### Returns

`Listener`[]

#### Inherited from

`JsonRpcProvider.listeners`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:152

***

### lookupAddress()

> **lookupAddress**(`address`): `Promise`\<`null` \| `string`\>

#### Parameters

• **address**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`JsonRpcProvider.lookupAddress`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:142

***

### off()

> **off**(`eventName`, `listener`?): `this`

#### Parameters

• **eventName**: `EventType`

• **listener?**: `Listener`

#### Returns

`this`

#### Inherited from

`JsonRpcProvider.off`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:153

***

### on()

> **on**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`this`

#### Inherited from

`JsonRpcProvider.on`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:148

***

### once()

> **once**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`this`

#### Inherited from

`JsonRpcProvider.once`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:149

***

### perform()

> **perform**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

• **method**: `string`

• **params**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`JsonRpcProvider.perform`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:43

***

### poll()

> **poll**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

`JsonRpcProvider.poll`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:96

***

### prepareRequest()

> **prepareRequest**(`method`, `params`): [`string`, `any`[]]

#### Parameters

• **method**: `string`

• **params**: `any`

#### Returns

[`string`, `any`[]]

#### Inherited from

`JsonRpcProvider.prepareRequest`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:42

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `this`

#### Parameters

• **eventName?**: `EventType`

#### Returns

`this`

#### Inherited from

`JsonRpcProvider.removeAllListeners`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:154

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `Provider`

#### Parameters

• **eventName**: `EventType`

• **listener**: `Listener`

#### Returns

`Provider`

#### Inherited from

`JsonRpcProvider.removeListener`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:150

***

### resetEventsBlock()

> **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

• **blockNumber**: `number`

#### Returns

`void`

#### Inherited from

`JsonRpcProvider.resetEventsBlock`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:97

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`null` \| `string`\>

#### Parameters

• **name**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Inherited from

`JsonRpcProvider.resolveName`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:141

***

### send()

> **send**(`method`, `params`): `Promise`\<`any`\>

#### Parameters

• **method**: `string`

• **params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`JsonRpcProvider.send`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:41

***

### sendTransaction()

> **sendTransaction**(`signedTransaction`): `Promise`\<`TransactionResponse`\>

#### Parameters

• **signedTransaction**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`JsonRpcProvider.sendTransaction`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:124

***

### waitForTransaction()

> **waitForTransaction**(`transactionHash`, `confirmations`?, `timeout`?): `Promise`\<`TransactionReceipt`\>

#### Parameters

• **transactionHash**: `string`

• **confirmations?**: `number`

• **timeout?**: `number`

#### Returns

`Promise`\<`TransactionReceipt`\>

#### Inherited from

`JsonRpcProvider.waitForTransaction`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:108

***

### defaultUrl()

> `static` **defaultUrl**(): `string`

#### Returns

`string`

#### Inherited from

`JsonRpcProvider.defaultUrl`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:35

***

### getFormatter()

> `static` **getFormatter**(): `Formatter`

#### Returns

`Formatter`

#### Inherited from

`JsonRpcProvider.getFormatter`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:92

***

### getNetwork()

> `static` **getNetwork**(`network`): `Network`

#### Parameters

• **network**: `Networkish`

#### Returns

`Network`

#### Inherited from

`JsonRpcProvider.getNetwork`

#### Defined in

node\_modules/@ethersproject/providers/lib/base-provider.d.ts:93

***

### hexlifyTransaction()

> `static` **hexlifyTransaction**(`transaction`, `allowExtra`?): `object`

#### Parameters

• **transaction**: `TransactionRequest`

• **allowExtra?**

#### Returns

`object`

#### Inherited from

`JsonRpcProvider.hexlifyTransaction`

#### Defined in

node\_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:47

***

### isProvider()

> `static` **isProvider**(`value`): `value is Provider`

#### Parameters

• **value**: `any`

#### Returns

`value is Provider`

#### Inherited from

`JsonRpcProvider.isProvider`

#### Defined in

node\_modules/@ethersproject/abstract-provider/lib/index.d.ts:154
