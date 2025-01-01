import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sortedSquaredArrayS1 } from './index.s1';
import { sortedSquaredArrayS2 } from './index.s2';

describe('Sorted squared array', () => {
    it('it should return an empty array', () => {
        assert.deepStrictEqual(sortedSquaredArrayS1([]), []);
        assert.deepStrictEqual(sortedSquaredArrayS2([]), []);
    });

    it('it should return [1, 4, 9, 16]', () => {
        assert.deepStrictEqual(sortedSquaredArrayS1([1, 2, 3, 4]), [1, 4, 9, 16]);
        assert.deepStrictEqual(sortedSquaredArrayS2([1, 2, 3, 4]), [1, 4, 9, 16]);
    });

    it('it should return [9, 16, 25, 36, 49, 64, 81]', () => {
        assert.deepStrictEqual(sortedSquaredArrayS1([-7, -5, -4, 3, 6, 8, 9]), [9, 16, 25, 36, 49, 64, 81]);
        assert.deepStrictEqual(sortedSquaredArrayS2([-7, -5, -4, 3, 6, 8, 9]), [9, 16, 25, 36, 49, 64, 81]);
    });
});