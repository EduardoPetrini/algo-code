import { describe, it } from 'node:test';
import assert from 'node:assert';
import { LinkedList } from '../LinkedList';

describe('Test Linked List', () => {
    it('should return a linked list with one node', () => {
        const linkedList = new LinkedList(10);

        assert.equal(linkedList.value, 10);
        assert.equal(linkedList.next, null);
    });

    it('should return a linked list with 2 nodes', () => {
        const linkedList = new LinkedList(10);
        linkedList.add(11);

        assert.equal(linkedList.value, 10);
        assert.equal(linkedList.next?.value, 11);
    });

    it('should return a linked list with 3 nodes', () => {
        const linkedList = new LinkedList(10);
        linkedList.add(11);
        linkedList.add(12);

        assert.equal(linkedList.value, 10);
        assert.equal(linkedList.next?.value, 11);
        const next = linkedList.next?.next;

        assert.equal(next?.value, 12)
    });
});