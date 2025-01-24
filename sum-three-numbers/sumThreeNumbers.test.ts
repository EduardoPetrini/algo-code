import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sumThreeNumbers } from './index.s1';

describe('sumThreeNumbers', () => {
    it('should sum three numbers', () => {
        assert.equal(sumThreeNumbers(1, 2, 3), 6);
    });
});