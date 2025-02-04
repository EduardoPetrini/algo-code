import { describe, it } from 'node:test'
import assert from 'node:assert'
import { longestPeak } from './index.s1';

describe('Test Longest Peak', () => {
    it('Should return a peak of 0', () => {
        const array: number[] = [];
        const expect = 0;

        assert.equal(longestPeak(array), expect);
    });

    it('Should return a peak of 6', () => {
        const array: number[] = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
        const expect = 6;

        assert.equal(longestPeak(array), expect);
    });

    it('Should return a peak of 3', () => {
        const array: number[] = [1, 3, 2];
        const expect = 3;

        assert.equal(longestPeak(array), expect);
    });
});