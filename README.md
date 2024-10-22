# Utilities for Ronin blockchain
This package provides 2 Web3 providers for the Ronin blockchain.
The 2 Web3 providers are:
* Ronin JSON RPC provider
* Ronin SkyNet provider

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

Use it like so:
```
    const connectionInfo = {
      url: 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2',
      headers: {
        "X-API-KEY": process.env.X_API_KEY || ""
      }
    }
    const provider = new SkynetWeb3Provider(connectionInfo);
    const contract_addr = '0x32950db2a7164ae833121501c797d79e7b79d74c';
    const tokenId = 3067049;
    const result = await provider.owners_of_nft(contract_addr, tokenId);
```

