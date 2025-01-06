import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BST } from '../lib/BST';
import { findClosestValue } from './index.s1';


let tree = new BST(10);
tree.init([5, 2, 1, 15, 13, 22, 14]);

describe('find the closest value', () => {
    it('should find 13 as the closest of 12', () => {
        const closest = findClosestValue(tree, 12, null);

        assert.equal(closest, 13);
    });

    it('should find 22 as the closest of 20', () => {
        const closest = findClosestValue(tree, 20, null);

        assert.equal(closest, 22);
    });

    it('should find 5 as the closest of 4', () => {
        const closest = findClosestValue(tree, 4, null);

        assert.equal(closest, 5);
    });

});