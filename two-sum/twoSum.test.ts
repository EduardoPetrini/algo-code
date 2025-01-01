import { twoSum } from './index.s1';
import { describe, it } from 'node:test'
import assert from 'node:assert'
import { twoSums2 } from './index.s2';

describe('twoSum', () => {
  it('should return an empty array when the input array is empty', () => {
    assert.deepStrictEqual(twoSum([], 0), []);
    assert.deepStrictEqual(twoSums2([], 0), []);
  });

  it('should return [11, -1]', () => {
    assert.deepStrictEqual(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10), [11, -1]);
    assert.deepStrictEqual(twoSums2([3, 5, -4, 8, 11, 1, -1, 6], 10), [11, -1]);
  });

  it('should return [4, 6]', () => {
    assert.deepStrictEqual(twoSum([4, 6], 10), [4, 6]);
    assert.deepStrictEqual(twoSums2([4, 6], 10), [4, 6]);
  });
});
