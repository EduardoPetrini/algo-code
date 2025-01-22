import { describe, it } from 'node:test';
import assert from 'node:assert';
import { palindromeCheck } from './index.s1';

describe('Test Palindrome Check', () => {
    it('should return true if the string is a palindrome', () => {
        assert.equal(palindromeCheck('racecar'), true);
    });

    it('should return false if the string is not a palindrome', () => {
        assert.equal(palindromeCheck('hello'), false);
    }); 

    it('should return true if the string is a palindrome with no spaces', () => {
        assert.equal(palindromeCheck('A man a plan a canal Panama'.replace(/\s/g, '').toLowerCase()), true);
    });
});
