import { describe, it } from 'node:test';
import assert from 'node:assert';
import { spiralTraverseS1 } from './index.s1';
import { spiralTraverseS2 } from './index.s2';

describe('test Spiral Traverse it', () => {
    it('should return [1]', () => {
        const array = [[1]];
        const result = spiralTraverseS1(array);
        assert.deepEqual(result, [1]);
    });

    it('should return the expect array 15', () => {
        const array = [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7]
        ];

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const result = spiralTraverseS1(array);
        assert.deepEqual(result, expected);
    });

    it('should return the expect array 11', () => {
        const array = [
            [1, 2, 3, 4],
            [10, 11, 12, 5],
            [9, 8, 7, 6]
          ];

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const result = spiralTraverseS1(array);
        assert.deepEqual(result, expected);
    });
});


describe('test Spiral Traverse rec', () => {
    it('should return [1]', () => {
        const array = [[1]];
        const result = spiralTraverseS2(array);
        assert.deepEqual(result, [1]);
    });

    it('should return the expect array 15', () => {
        const array = [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7]
        ];

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const result = spiralTraverseS2(array);
        assert.deepEqual(result, expected);
    });

    it('should return the expect array 11', () => {
        const array = [
            [1, 2, 3, 4],
            [10, 11, 12, 5],
            [9, 8, 7, 6]
          ];

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const result = spiralTraverseS2(array);
        assert.deepEqual(result, expected);
    });
});