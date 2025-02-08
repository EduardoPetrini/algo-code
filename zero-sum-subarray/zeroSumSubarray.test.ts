import { describe, it } from 'node:test';
import assert from 'node:assert';
import { zeroSumSubarray } from './index.s1';

describe('Test Zero Sum Subarray', ()=>{
    it('Should return false', ()=> {
        const input: number[] = [];
        const expected = false;

        const result = zeroSumSubarray(input);

        assert.equal(result, expected);
    });

    it('Should return true for 1-lenght zero array', ()=> {
        const input: number[] = [0];
        const expected = true;

        const result = zeroSumSubarray(input);

        assert.equal(result, expected);
    });

    it('Should return true for 5-lenght array of numbers', ()=> {
        const input: number[] = [-5, -5, 2, 3, -2];
        const expected = true;

        const result = zeroSumSubarray(input);

        assert.equal(result, expected);
    });
});