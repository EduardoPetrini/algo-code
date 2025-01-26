import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateDocumentS1 } from './index.s1';
import { generateDocumentS2 } from './index.s2';

describe('generateDocumentS1', () => {
    it('should return true if the document can be generated from the characters abc', () => {
        assert.strictEqual(generateDocumentS1('abc', 'aabbcc'), false);
    });

    it('should return true if the document can be generated from the characters aabbcc', () => {
        assert.strictEqual(generateDocumentS1('aabbcc', 'abc'), true);
    });

});

describe('generateDocumentS2', () => {
    it('should return true if the document can be generated from the characters abc', () => {
        assert.strictEqual(generateDocumentS2('abc', 'aabbcc'), false);
    });

    it('should return true if the document can be generated from the characters aabbcc', () => {
        assert.strictEqual(generateDocumentS2('aabbcc', 'abc'), true);
    });

});
