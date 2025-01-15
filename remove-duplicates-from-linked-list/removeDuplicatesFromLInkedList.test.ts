import { describe, it } from 'node:test';
import assert from 'node:assert';
import { LinkedList } from '../lib/LinkedList';
import { removeDuplicatesFromLinkedList } from './index.s1';

describe('Test remove duplicates from linked list', () => {
    it('should change it to [1,2,3,4]', () => {
        const linkedList = new LinkedList(1);
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(2)
        linkedList.add(3)
        linkedList.add(3);
        linkedList.add(4);

        const result = removeDuplicatesFromLinkedList(linkedList)

        assert.equal(result.value, 1);
        let node: any = result.next;
        assert.equal(node?.value, 2)
        node = node?.next;
        assert.equal(node?.value, 3)
        node = node?.next;
        assert.equal(node?.value, 4)
    });
});