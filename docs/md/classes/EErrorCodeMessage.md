[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / EErrorCodeMessage

# Class: EErrorCodeMessage

An error indicating the error code and message

## Extends

- `Error`

## Constructors

### new EErrorCodeMessage()

> **new EErrorCodeMessage**(`errorCode`, `message`): [`EErrorCodeMessage`](EErrorCodeMessage.md)

#### Parameters

• **errorCode**: `number`

• **message**: `string`

#### Returns

[`EErrorCodeMessage`](EErrorCodeMessage.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/web3-ronin-types-errors.ts:58](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-ronin-types-errors.ts#L58)

## Properties

### errorCode

> **errorCode**: `number`

The error code

#### Defined in

[src/web3-ronin-types-errors.ts:57](https://github.com/chuacw/web3-ronin-provider/blob/e9318161fb5ce839bfa5a7cd824e9be03b129c7e/src/web3-ronin-types-errors.ts#L57)

***

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
