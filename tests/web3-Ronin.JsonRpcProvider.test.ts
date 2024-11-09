import 'dotenv/config';
import { createRoninJsonRpcProvider, RoninJsonRpcProvider } from '../src';
require('dotenv').config('../.env');

const TIMEOUT = 100_000_000;

describe('Ronin JSON RPC Provider', () => {
  let provider: RoninJsonRpcProvider;

  beforeEach(() => {
    const API_KEY = process.env['X-API-KEY']!;
    provider = createRoninJsonRpcProvider(API_KEY);
  });

  test('getFeeHistory', async () => {
    const feeHistory = await provider.getFeeHistory();
    // @ts-ignore
    const firstPercentialPriorityFees = feeHistory.map(b => b.priorityFeePerGas[0]!);
    const sum = firstPercentialPriorityFees.reduce((a, v) => a + v);
    const estimate = Math.round(sum / firstPercentialPriorityFees.length);
    expect(estimate).toBeGreaterThan(0);
  }, TIMEOUT);

});
