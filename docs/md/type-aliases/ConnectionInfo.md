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

[src/web3-RoninSkynetProvider.ts:56](https://github.com/chuacw/web3-ronin-provider/blob/4a0b7e0e7b62260bac28b4a11f9e6d6a49bfdfb2/src/web3-RoninSkynetProvider.ts#L56)
