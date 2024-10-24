[**web3-ronin-provider**](../README.md) • **Docs**

***

[web3-ronin-provider](../globals.md) / ConnectionInfo

# Type Alias: ConnectionInfo

> **ConnectionInfo**: `object`

Provides the URL, headers, and other information to set up a connection to the backend.

## Type declaration

### headers?

> `optional` **headers**: `object`

Optional headers as key-value pairs.

#### Index Signature

 \[`key`: `string`\]: `string` \| `number`

### proxy?

> `optional` **proxy**: `AxiosProxyConfig`

Optional proxy configuration

### url

> **url**: `string`

The URL for the connection

## Defined in

[src/web3-RoninSkynetProvider.ts:40](https://github.com/chuacw/web3-ronin-provider/blob/4a3e9d183c6bab0e7301d6bb6cb7346d9988c1ec/src/web3-RoninSkynetProvider.ts#L40)
