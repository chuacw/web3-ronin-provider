import 'dotenv/config';
import { SkynetWeb3Provider } from '../src/web3-RoninSkynetProvider';
require('dotenv').config();

async function main() {
  const connectionInfo = {
    url: 'https://api-gateway.skymavis.com/skynet/ronin/web3/v2',
    headers: {
      "X-API-KEY": process.env["X-API-KEY"] || ""
    }
  };
  const provider = new SkynetWeb3Provider(connectionInfo);
  const AXS_StakingPool_Contract_Addr = '0x05b0bb3c1c320b280501b86706c3551995bc8571';
  
}

main();