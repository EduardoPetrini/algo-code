import { describe, it } from 'node:test';
import assert from 'node:assert';
import { missingTwoNumbers } from './index';

describe('Test Missing Two Numbers', () => {
    it('should return an empty array for not missing array', () => {
        const input = [1, 2, 3];
        const expected: number[] = [4, 5];

        assert.deepEqual(missingTwoNumbers(input), expected)
    });

    it('should return 2 and 5', () => {
        const input = [1, 4, 3];
        const expected = [2, 5];

        assert.deepEqual(missingTwoNumbers(input), expected)
    });

    it('should return 1 and 3', () => {
        const input = [2];
        const expected = [1, 3];

        assert.deepEqual(missingTwoNumbers(input), expected)
    });
});