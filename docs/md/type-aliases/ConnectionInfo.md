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

[src/web3-RoninSkynetProvider.ts:53](https://github.com/chuacw/web3-ronin-provider/blob/023290ecb372f58c7f32d82694336112a4fc5a2a/src/web3-RoninSkynetProvider.ts#L53)
