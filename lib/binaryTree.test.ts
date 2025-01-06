import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BinaryTree } from './BinaryTree';

describe('Binary Tree', () => {
    it('should create an instance with only one node in the root', () => {
        const tree = new BinaryTree(1);

        assert.equal(tree.value, 1);
        assert.equal(tree.left, null);
        assert.equal(tree.right, null);
    });

    it('should create an instance with 3 nodes', () => {
        const tree = new BinaryTree(1);
        tree.insert(2);
        tree.insert(3);

        assert.equal(tree.value, 1);
        assert.equal(tree.left!.value, 2);
        assert.equal(tree.right!.value, 3);
    });

    it('should create an instance with 7 nodes', () => {
        const tree = new BinaryTree(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        tree.insert(6);
        tree.insert(7);

        assert.equal(tree.value, 1);
        assert.equal(tree.left!.value, 2);
        assert.equal(tree.right!.value, 3);
        assert.equal(tree.left!.left!.value, 4);
        assert.equal(tree.left!.right!.value, 5);
        assert.equal(tree.right!.left!.value, 6);
        assert.equal(tree.right!.right!.value, 7);
    });

    it('should create an instance with 7 nodes using the init function', () => {
        const tree = new BinaryTree(1);
        tree.init([2,3,4,5,6,7])

        assert.equal(tree.value, 1);
        assert.equal(tree.left!.value, 2);
        assert.equal(tree.right!.value, 3);
        assert.equal(tree.left!.left!.value, 4);
        assert.equal(tree.left!.right!.value, 5);
        assert.equal(tree.right!.left!.value, 6);
        assert.equal(tree.right!.right!.value, 7);
    });
});