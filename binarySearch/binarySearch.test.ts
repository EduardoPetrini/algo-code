import { describe, it } from 'node:test';
import assert from 'node:assert';
import { binarySearch } from './index.s1';

describe('Test Binary Search', () => {
    it('should return the index -1', () => {
        assert.equal(binarySearch([0], 1), -1);
    });

    it('should return the index 2', () => {
        assert.equal(binarySearch([0, 1, 2, 3, 3, 4], 2), 2);
    });

    it('should return the index 9', () => {
        assert.equal(binarySearch([0, 1, 2, 3, 3, 4, 10, 15, 18, 22, 25, 30], 22), 9);
    });
});