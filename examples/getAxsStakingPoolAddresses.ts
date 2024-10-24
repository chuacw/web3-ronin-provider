import 'dotenv/config';
import { createSkyNetProvider, SkynetWeb3Provider } from '../src/web3-RoninSkynetProvider';
require('dotenv').config();

function assert(x: any, msg: string) {
  if (!x) {
    throw new Error(msg);
  }
}

async function main() {
  assert(process.env.X_API_KEY, "X_API_KEY not defined!");
  const provider = createSkyNetProvider(process.env.X_API_KEY!)
  const AXS_StakingPool_Contract_Addr = '0x05b0bb3c1c320b280501b86706c3551995bc8571';
  
}

main();