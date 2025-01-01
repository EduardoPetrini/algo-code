import { describe, it } from 'node:test';
import assert from 'node:assert';
import { calcValidSubsequence } from './index.s1';
import { calcValidSubsequence2 } from './index.s2';

describe('Valid Subsequence', () => {
    it('should return false [], [1]', () => {
        assert.equal(calcValidSubsequence([], [1]), false);
        assert.equal(calcValidSubsequence2([], [1]), false);
    });

    it('should return true [1, 2, 3, 4], [1, 3]', () => {
        assert.equal(calcValidSubsequence([1, 2, 3, 4], [1, 3]), true);
        assert.equal(calcValidSubsequence2([1, 2, 3, 4], [1, 3]), true);
    });
    
    it('should return true [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]', () => {
        assert.equal(calcValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]), true);
        assert.equal(calcValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]), true);
    });

    it('should return false [5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]', () => {
        assert.equal(calcValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]), false);
        assert.equal(calcValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]), false);
    });
});