import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BinaryTree } from '../lib/BinaryTree';
import { nodeDepths } from './index.s1';

describe('Node Depths', () => {
    it('should return 0', () => {
        const tree = new BinaryTree(1);

        assert.equal(nodeDepths(tree), 0);
    });

    it('should return 1', () => {
        const tree = new BinaryTree(1);
        tree.insert(2)

        assert.equal(nodeDepths(tree), 1);
    });

    it('should return 2', () => {
        const tree = new BinaryTree(1);
        tree.insert(2)
        tree.insert(3)

        assert.equal(nodeDepths(tree), 2);
    });

    it('should return 19', () => {
        const tree = new BinaryTree(1);
        tree.init([2, 3, 4, 5, 6, 7, 8, 9, 10])

        assert.equal(nodeDepths(tree), 19);
    });
});