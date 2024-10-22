// Author: chuacw, Singapore, Singapore

import { JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";
import { resolveProperties } from "ethers/lib/utils";

/**
 * A wrapper to workaround gasPrice issue in etherjs v5 after London
 * hardfork when sending transaction for Ronin.
 */
export class RoninJsonRpcProvider extends JsonRpcProvider {
  #FIFTEEN: BigNumber;

  constructor(url?: ethers.utils.ConnectionInfo | string, network?: ethers.providers.Networkish) {
    super(url, network);
    this.#FIFTEEN = BigNumber.from("1500000000");
  }
  
  async getFeeData() {
    const { block, gasPrice } = await resolveProperties({
      block: this.getBlock("latest"),
      gasPrice: this.getGasPrice().catch(() => {
        return null;
      })
    });

    let lastBaseFeePerGas = null, maxFeePerGas = null, maxPriorityFeePerGas = null;

    if (block && block.baseFeePerGas) {
      lastBaseFeePerGas = block.baseFeePerGas;
      maxPriorityFeePerGas = (gasPrice != null) ? gasPrice : this.#FIFTEEN;
      maxFeePerGas = block.baseFeePerGas.mul(2).add(maxPriorityFeePerGas);
    }

    return { lastBaseFeePerGas, maxFeePerGas, maxPriorityFeePerGas, gasPrice };
  }
}
