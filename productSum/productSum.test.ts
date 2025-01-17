import { describe, it } from 'node:test';
import assert from 'node:assert';
import { productSumS1 } from './index.s1';
import { productSumS2 } from './index.s2';

describe('Test Product Sum S1', () => {
    it('should return 12', () => {
        assert.equal(productSumS1([5, 2, [7, -1], 3, [6, [-13, 8], 4]]), 12);
    });

    it('should return 18', () => {
        assert.equal(productSumS1([1, 2, [3], 4, 5]), 18);
    });

    it('should return 15', () => {
        assert.equal(productSumS1([1, 2, 3, 4, 5]), 15);
    });
});

describe('Test Product Sum S2', () => {
    it('should return 12', () => {
        assert.equal(productSumS2([5, 2, [7, -1], 3, [6, [-13, 8], 4]]), 12);
    });

    it('should return 18', () => {
        assert.equal(productSumS2([1, 2, [3], 4, 5]), 18);
    });

    it('should return 15', () => {
        assert.equal(productSumS2([1, 2, 3, 4, 5]), 15);
    });
});