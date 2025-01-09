import { describe, it } from 'node:test';
import assert from 'node:assert';
import { NaryTree } from './NaryTree';

describe('N-ary Tree', () => {
    it('should return a tree with name A and no children', () => {
        const tree = new NaryTree('A');

        assert.equal(tree.name, 'A');
        assert.deepStrictEqual(tree.children, []);
    })

    it('should return a tree with name A and 3 children', () => {
        const tree = new NaryTree('A');
        tree.addChild('B');
        tree.addChild('C');
        tree.addChild('D');
        assert.equal(tree.name, 'A');
        assert.deepEqual(tree.children[0], { name: 'B', children: [] });
        assert.deepEqual(tree.children[1], { name: 'C', children: [] });
        assert.deepEqual(tree.children[2], { name: 'D', children: [] });
    })
})