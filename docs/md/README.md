**web3-ronin-provider** • [**Docs**](globals.md)

***

# Utilities for Ronin blockchain
This package provides 3 providers for interacting with the Ronin blockchain.  

The 3 Web3 providers are:  
* [Skynet REST provider](https://chuacw.github.io/web3-ronin-provider/html/classes/SkynetRESTProvider.html)
* [Ronin JSON RPC provider](https://chuacw.github.io/web3-ronin-provider/html/classes/RoninJsonRpcProvider.html)
* [Skynet Web3 provider](https://chuacw.github.io/web3-ronin-provider/html/classes/SkynetWeb3Provider.html)

## Skynet REST provider
A [REST provider for Skynet](https://chuacw.github.io/web3-ronin-provider/html/classes/SkynetRESTProvider.html).

Use it like so:
```
    const  provider = createSkynetRESTProvider(process.env["X-API-KEY"] || "");
    const contractAddr = "0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa";
    const response = await provider.get_contract_by_address(contractAddr);
```

## Ronin JSON RPC provider
A [JSON RPC Provider for Ronin](https://chuacw.github.io/web3-ronin-provider/html/classes/RoninJsonRpcProvider.html).  

Use this like so:
```
  const connection_info = {
    headers: {
      "X-API-KEY": X_API_KEY
    },
    url: RONIN_MAINNET_RPC,
  };
  const provider = new RoninJsonRpcProvider(connection_info);
```

or like this:
```
    const provider = createRoninJsonRpcProvider(API_KEY);
```

## Ronin Skynet Web3 Provider
A [Skynet Web3 Provider for Ronin](https://chuacw.github.io/web3-ronin-provider/html/classes/SkynetWeb3Provider.html).  

#### Creating an instance of the Skynet Web3 Provider
---
Create it like this:

```
    const connectionInfo = {
      url: URL_RONIN_SKYNET_RPC,
      headers: {
        "X-API-KEY": process.env["X_API_KEY"] || ""
      }
    }
    const provider = new SkynetWeb3Provider(connectionInfo);
```

or like this:
```
    const provider = createSkynetProvider(API_KEY);
```

Use it like so:
```
    const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
    const tokenId = 3067049;
    const response = await provider.get_owners_of_nft(contract_addr, tokenId);
```

## Documentation
For further documentation, see the 
* [docs directory](https://chuacw.github.io/web3-ronin-provider/md/globals.html) on GitHub.
* [HTML documents](https://chuacw.github.io/web3-ronin-provider/html/index.html).

## Examples
There's an [examples](https://github.com/chuacw/web3-ronin-provider/tree/main/examples) directory showing how to use the Skynet Web3 provider.
