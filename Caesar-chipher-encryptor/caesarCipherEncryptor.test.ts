import { describe, it } from 'node:test';
import assert from 'node:assert';
import { caesarCipherEncryptor } from './index.s1';

describe('Test Caesar Cipher Encryptor', () => {
    it('should return the encrypted string', () => {
        assert.equal(caesarCipherEncryptor('abc', 1), 'bcd');
    });

    it('should return the encrypted string with a shift of 2', () => {
        assert.equal(caesarCipherEncryptor('abc', 2), 'cde');
    });

    it('should return the encrypted string with a shift of 26', () => {
        assert.equal(caesarCipherEncryptor('abc', 26), 'abc');
    });

    it('should return the encrypted string with a shift of 54', () => {
        assert.equal(caesarCipherEncryptor('abc', 54), 'cde');
    });
});
