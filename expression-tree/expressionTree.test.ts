import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BinaryTree } from '../lib/BinaryTree';
import { evaluateExpressionTree } from './index.s1';

describe('Evaluate Expression Tree', () => {
    it('should return 1', () => {
        const tree = new BinaryTree(1);

        assert.equal(evaluateExpressionTree(tree), 1);
    });

    it('should return 6', () => {
        const tree = new BinaryTree(-1);
        tree.init([-2, -3, -4, 2, 8, 3, 2, 3])

        assert.equal(evaluateExpressionTree(tree), 6);
    });
});