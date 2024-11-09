import { JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";
import { resolveProperties } from "ethers/lib/utils";
import { URL_RONIN_MAINNET_RPC } from "./web3-ronin-consts";

export type HistoricalFee = {
  baseFeePerGas: string[];
  gasUsedRatio: number[];
  oldestBlock: string;
  reward: string[][];
}

export type FormattedFeeHistory = {
  number: number | string;
  baseFeePerGas: number;
  gasUsedRatio: number;
  priorityFeePerGas: number[] | null
}

/**
 * A wrapper to workaround gasPrice issue in etherjs v5 after London
 * hardfork when sending transactions for Ronin.
 */
export class RoninJsonRpcProvider extends JsonRpcProvider {
  readonly #FIFTEEN: BigNumber;

  /**
   * Creates an instance of RoninJsonRpcProvider.
   *
   * @constructor
   * @param {?(ethers.utils.ConnectionInfo | string)} [url] The URL to use, headers, etc
   * @param {?ethers.providers.Networkish} [network]
   * @throws {@link EEmptyHeaders} when headers are present, but empty
   * @throws {@link EEmptyUrl} when URL is empty
   * @throws {@link ENoApiKey} when X-API-KEY is absent
   * @throws {@link ENoHeaders} when headers are absent
   */
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
      maxPriorityFeePerGas = // (gasPrice != null) ? gasPrice : this.#FIFTEEN;
        BigNumber.from(await this.getFeeEstimate());
      maxFeePerGas = block.baseFeePerGas.mul(2).add(maxPriorityFeePerGas);
    }

    return { lastBaseFeePerGas, maxFeePerGas, maxPriorityFeePerGas, gasPrice };
  }

  formatFeeHistory(result: HistoricalFee, historicalBlocks: number = 4, includePending: boolean = false) {
    let blockNum: BigNumber = BigNumber.from(result.oldestBlock);
    let index = 0;
    const blocks = [];
    while (index < historicalBlocks) {
      blocks.push({
        number: Number(blockNum.toString()),
        baseFeePerGas: Number(result.baseFeePerGas[index]),
        gasUsedRatio: Number(result.gasUsedRatio[index]),
        priorityFeePerGas: result.reward[index].map(x => Number(x)),
      });
      blockNum = blockNum.add(1);
      index += 1;
    }
    if (includePending) {
      blocks.push({
        number: "pending",
        baseFeePerGas: Number(result.baseFeePerGas[historicalBlocks]),
        gasUsedRatio: 0,
        priorityFeePerGas: [0, 0, 0, 0],
      });
    }
    return blocks;
  }

  /**
   * getFeeHistory gets the history for blocks from the pending block to the past historicalBlocks.
   * By default, this would be the past 4 blocks, if historicalBlocks is left at the default.
   * This is an implementation of EIP 1559.
   *
   * @async
   * @param {number} [historicalBlocks=4]
   * @returns {Promise<FormattedFeeHistory[]>}
   */
  async getFeeHistory(historicalBlocks: number = 4): Promise<FormattedFeeHistory[]> {
    const feeHistory = await this.send("eth_feeHistory", [historicalBlocks, "pending", [25, 50, 75]]);
    const formattedFeeHistory = this.formatFeeHistory(feeHistory);
    return formattedFeeHistory;
  }

  /**
   * getFeeEstimate estimates the fee for the next transaction
   *
   * @async
   * @returns {Promise<number>}
   */
  async getFeeEstimate(): Promise<number> {
    const feeHistory = await this.getFeeHistory();
    // @ts-ignore
    const firstPercentialPriorityFees = feeHistory.map(b => b.priorityFeePerGas[0]!);
    const sum = firstPercentialPriorityFees.reduce((a, v) => a + v);
    const result = Math.round(sum / firstPercentialPriorityFees.length);
    return result;
  }

}

/**
 * createRoninJsonRpcProvider creates a RoninJsonRpcProvider given the X_API_KEY
 *
 * @param {string} X_API_KEY
 * @param {?string} [url]
 * @returns {RoninJsonRpcProvider}
 */
function createRoninJsonRpcProvider(X_API_KEY: string, url?: string): RoninJsonRpcProvider {
  const connection = { url: url || URL_RONIN_MAINNET_RPC, headers: { "X-API-KEY": X_API_KEY } };
  const result = new RoninJsonRpcProvider(connection);
  return result;
}

export {
  createRoninJsonRpcProvider
}
