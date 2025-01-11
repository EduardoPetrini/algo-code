import { describe, it } from 'node:test';
import assert from 'node:assert';
import { classPhoto } from './index.s1';

describe('Check Class Photo', () => {
    it('should return false if the height is the same', () => {
        const result = classPhoto([6], [6]);

        assert.equal(result, false)
    });


    it('should return true if the all blue is higher', () => {
        const result = classPhoto([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);

        assert.equal(result, true)
    });

    it('should return false if the heights are mixed', () => {
        const result = classPhoto([19, 19, 21, 1, 1, 1, 1, 1], [20, 5, 4, 4, 4, 4, 4, 4]);

        assert.equal(result, false)
    });
});