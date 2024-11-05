**web3-ronin-provider** • [**Docs**](globals.md)

***

# Utilities for Ronin blockchain
This package provides 3 providers for interacting with the Ronin blockchain.  

The 3 Web3 providers are:  
* SkyNet REST provider
* Ronin JSON RPC provider
* SkyNet Web3 provider

## SkyNet REST provider
A REST provider for SkyNet.

Use it like so:
```
    const  provider = createSkyNetRESTProvider(process.env["X-API-KEY"] || "");
    const contractAddr = "0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa";
    const response = await provider.get_contract_by_address(contractAddr);
```

## Ronin JSON RPC provider
A JSON RPC Provider for Ronin.  

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

## Ronin SkyNet Web3 Provider
A SkyNet Web3 Provider for Ronin.  

#### Creating an instance of the SkyNet Web3 Provider
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
    const provider = createSkyNetProvider(API_KEY);
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
There's an [examples](./examples/) directory showing how to use the SkyNet Web3 provider.
