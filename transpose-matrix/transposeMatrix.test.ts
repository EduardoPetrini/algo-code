import { describe, it } from 'node:test';
import assert from 'node:assert';
import { transposeMatrix } from './index.s1';
import { transposeMatrixS2 } from './index.s2';

describe('Transpose Matrix', () => {
    it('should return an empty array', () => {
        const result = transposeMatrix([]);

        assert.deepStrictEqual(result, []);
    });

    it('should return [[1],[2]]', () => {
        const result = transposeMatrix([[1, 2]]);

        assert.deepStrictEqual(result, [[1], [2]]);
    });

    it('should return [[1,4,7],[2,5,8],[3,6,9]]', () => {
        const result = transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

        assert.deepStrictEqual(result, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    });

    it('should return [[1,4,7],[2,5,8],[3,6]]', () => {
        const result = transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8]]);

        assert.deepStrictEqual(result, [[1, 4, 7], [2, 5, 8], [3, 6]]);
    });
});

describe('Transpose Matrix s2', () => {
    it('should return an empty array', () => {
        const result = transposeMatrixS2([]);

        assert.deepStrictEqual(result, []);
    });

    it('should return [[1],[2]]', () => {
        const result = transposeMatrixS2([[1, 2]]);

        assert.deepStrictEqual(result, [[1], [2]]);
    });

    it('should return [[1,4,7],[2,5,8],[3,6,9]]', () => {
        const result = transposeMatrixS2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

        assert.deepStrictEqual(result, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    });

    it('should return [[1,4,7],[2,5,8],[3,6]]', () => {
        const result = transposeMatrixS2([[1, 2, 3], [4, 5, 6], [7, 8]]);

        assert.deepStrictEqual(result, [[1, 4, 7], [2, 5, 8], [3, 6]]);
    });
});