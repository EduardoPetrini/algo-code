import { describe, it } from 'node:test';
import assert from 'node:assert';
import { nthFibonacciS1 } from './index.s1';
import { nthFibonacciS2 } from './index.s2';

describe('Test nth Fibonacci sequence recusive', ()=>{
    it('should return 0 for the 1st',()=> {
        assert.equal(nthFibonacciS1(1), 0);
    });
    
    it('should return 1 for the 2nd',()=> {
        assert.equal(nthFibonacciS1(2), 1);
    });
    
    it('should return 5 for the 6th',()=> {
        assert.equal(nthFibonacciS1(6), 5);
    });

    it('should return 34 for the 10th',()=> {
        assert.equal(nthFibonacciS1(10), 34);
    });

    it('should return 4181 for the 20th',()=> {
        assert.equal(nthFibonacciS1(20), 4181);
    });
});

describe('Test nth Fibonacci sequence memoization', ()=>{
    it('should return 0 for the 1st',()=> {
        assert.equal(nthFibonacciS2(1), 0);
    });
    
    it('should return 1 for the 2nd',()=> {
        assert.equal(nthFibonacciS2(2), 1);
    });
    
    it('should return 5 for the 6th',()=> {
        assert.equal(nthFibonacciS2(6), 5);
    });

    it('should return 34 for the 10th',()=> {
        assert.equal(nthFibonacciS2(10), 34);
    });

    it('should return 4181 for the 20th',()=> {
        assert.equal(nthFibonacciS2(20), 4181);
    });
})