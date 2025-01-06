import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BinaryTree } from '../lib/BinaryTree';
import { branchSums } from './index.s1';

const tree = new BinaryTree(1);
tree.init([2, 3, 4, 5, 6, 7, 8, 9, 10]);

describe('Branch sum', ()=>{
    it('should return [1]', () => {
        const tree = new BinaryTree(1);
        const results = branchSums(tree);
        assert.deepStrictEqual(results, [1])
    });

    it('should return [3, 4]', () => {
        const tree = new BinaryTree(1);
        tree.init([2,3])
        const results = branchSums(tree);
        assert.deepStrictEqual(results, [3, 4])
    });

    it('should return [15, 16, 18, 10, 11]', () => {
        const results = branchSums(tree);
        assert.deepStrictEqual(results, [15, 16, 18, 10, 11])
    });
});