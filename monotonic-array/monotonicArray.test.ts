import { describe, it } from 'node:test';
import assert from 'node:assert';
import { monotonicArray } from './index.s1';

describe('Test Monotonic Array', () => {
    it('should return true for an empty array', () => {
        assert.equal(monotonicArray([]), true);
    });

    it('should return true', () => {
        assert.equal(monotonicArray([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]), true);
    });

    it('should return true', () => {
        assert.equal(monotonicArray([-1, -5, -10, -1100, -900, -1101, -1102, -9001]), false);
    });
});