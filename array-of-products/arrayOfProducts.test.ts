import { describe, it } from 'node:test';
import assert from 'node:assert';
import { arrayOfProducts } from './index.s1';

describe('Test Array of Products', () => {
    it('should return [1]', () => {
        const input = [1];
        const expected = [1];

        assert.deepEqual(arrayOfProducts(input), expected)
    });

    it('should return [8, 40, 10, 20]', () => {
        const input = [5, 1, 4, 2];
        const expected = [8, 40, 10, 20];

        assert.deepEqual(arrayOfProducts(input), expected)
    });
});