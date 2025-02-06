import { describe, it } from 'node:test';
import assert from 'node:assert';
import { findDuplicatedValues } from './index.s1';

describe('Test Find Duplicated Values', () => {
    it('should return 2', () => {
        const input = [1, 2, 3, 4, 5, 2, 3, 4];
        const expect = 2;

        assert.equal(findDuplicatedValues(input), expect)
    })

    it('should return 25', () => {
        const input = [23, 25, 9, 26, 2, 19, 24, 18, 25, 17, 13, 3, 14, 17, 9, 20, 26, 15, 21, 2, 6, 11, 2, 12, 23, 5, 4, 20];
        const expect = 25;

        assert.equal(findDuplicatedValues(input), expect)
    })
})