import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BST } from '../BST';

describe('Test BST', () => {
    it('should create a BST with one root element', () => {
        const tree = new BST(10);

        assert.equal(tree.value, 10);
        assert.equal(tree.left, null);
        assert.equal(tree.right, null);
    });

    it('should create a BST with 3 elements', () => {
        const tree = new BST(10);
        tree.insert(8);
        tree.insert(12);

        assert.equal(tree.value, 10);
        assert.equal(tree.left!.value, 8);
        assert.equal(tree.right!.value, 12);
    });

    it('should create a BST with 6 elements', () => {
        const tree = new BST(10);
        tree.insert(8);
        tree.insert(12);
        tree.insert(11);
        tree.insert(13);
        tree.insert(9);
        tree.insert(7);

        assert.equal(tree.value, 10);
        assert.equal(tree.left!.value, 8);
        assert.equal(tree.right!.value, 12);
        assert.equal(tree.left!.right!.value, 9);
        assert.equal(tree.left!.left!.value, 7);
        assert.equal(tree.right!.left!.value, 11);
        assert.equal(tree.right!.right!.value, 13);
    });

    it('should init the tree with 3 values', () => {
        const tree = new BST(10);
        tree.init([8,12])

        assert.equal(tree.value, 10);
        assert.equal(tree.left!.value, 8);
        assert.equal(tree.right!.value, 12);
    })
});