import { describe, it } from 'node:test';
import assert from 'node:assert';
import { NaryTree } from '../lib/NaryTree';
import { depthFirstSearch } from './index.s1';

describe('Depth First Search', () => {
    it('should return an array [A]', () => {
        const tree = new NaryTree('A');

        const result = depthFirstSearch(tree);

        assert.deepEqual(result, ['A'])
    });

    it('should return an array [A, B, C]', () => {
        const tree = new NaryTree('A');
        tree.addChild('B')
        tree.addChild('C')

        const result = depthFirstSearch(tree);

        assert.deepEqual(result, ['A', 'B', 'C'])
    });

    it('should return an array [A, B, D, C]', () => {
        const tree = new NaryTree('A');
        tree.addChild('B')
        tree.addChild('C')

        tree.children[0].addChild('D')

        const result = depthFirstSearch(tree);

        assert.deepEqual(result, ['A', 'B', 'D', 'C'])
    });
});