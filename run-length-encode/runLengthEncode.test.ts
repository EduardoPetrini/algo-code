import { describe, it } from 'node:test';
import assert from 'node:assert';
import { runLengthEncode } from './index.s1';

describe('runLengthEncode', () => {
    it('should encode a string', () => {
        assert.equal(runLengthEncode('aabcccaa'), '2a1b3c2a');
    });

    it('should encode a string with a single character', () => {
        assert.equal(runLengthEncode('a'), '1a');
    });

    it('should encode a string with a single character repeated', () => {
        assert.equal(runLengthEncode('aaaa'), '4a');
    });
    
    it('should encode a string with no repeating characters', () => {
        assert.equal(runLengthEncode('abcd'), '1a1b1c1d');
    });
});
