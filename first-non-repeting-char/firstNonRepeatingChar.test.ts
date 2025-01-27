import { describe, it } from 'node:test';
import assert from 'node:assert';
import { firstNonRepeatingChar } from './index.s1';

describe('firstNonRepeatingChar', () => {
  it('should return the index of the first non-repeating character', () => {
    assert.equal(firstNonRepeatingChar('leetcode'), 0);
  });

  it('should return -1 if there is no non-repeating character', () => {
    assert.equal(firstNonRepeatingChar('abcabc'), -1);
  });

  it('should return -1 if the string is empty', () => {
    assert.equal(firstNonRepeatingChar(''), -1);
  });
});
