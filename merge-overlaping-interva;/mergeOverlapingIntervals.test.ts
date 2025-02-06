import { describe, it } from 'node:test';
import assert from 'node:assert';
import { mergeOverlapingIntervals } from './index.s1';

describe('Test Merge Overlaping Intervals', () => {
    it('should return [1,2]', () => {
        const input = [[1, 2]];
        const expected = [[1, 2]];

        assert.deepEqual(mergeOverlapingIntervals(input), expected);
    });

    it('should return 3 intervals', () => {
        const input = [[1, 2],
        [3, 5],
        [4, 7],
        [6, 8],
        [9, 10]];
        const expected = [[1, 2],
        [3, 8],
        [9, 10]];

        assert.deepEqual(mergeOverlapingIntervals(input), expected);
    });

    it('should return 2 intervals', () => {
        const input = [[1, 22],
        [-20, 30]];
        const expected = [[-20, 30]];

        assert.deepEqual(mergeOverlapingIntervals(input), expected);
    })
})