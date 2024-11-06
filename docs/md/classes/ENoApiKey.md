[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / ENoApiKey

# Class: ENoApiKey

An error indicating no API key is provided

## Extends

- `Error`

## Constructors

### new ENoApiKey()

> **new ENoApiKey**(): [`ENoApiKey`](ENoApiKey.md)

#### Returns

[`ENoApiKey`](ENoApiKey.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/web3-ronin-types-errors.ts:9](https://github.com/chuacw/web3-ronin-provider/blob/5334d3e4a39d6911ce4028a880b09b3429564837/src/web3-ronin-types-errors.ts#L9)

## Properties

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:136
