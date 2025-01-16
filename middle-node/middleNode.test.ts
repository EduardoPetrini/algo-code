import { describe, it } from 'node:test';
import assert from 'node:assert';
import { LinkedList } from '../lib/LinkedList';
import { middleNodeS1 } from './index.s1';
import { middleNodeS2 } from './index.s2';

describe('Test Middle Node S1', ()=>{
    it('should return 1 node', ()=>{
        const linkedList = new LinkedList(10);

        const result = middleNodeS1(linkedList)
        assert.equal(result?.value, 10);
        assert.equal(result?.next, null);
    })

    it('should return node value 20 (even)', ()=>{
        const linkedList = new LinkedList(10);
        linkedList.add(12)
        linkedList.add(20)
        linkedList.add(22)

        const result = middleNodeS1(linkedList)
        assert.equal(result?.value, 20);
    })

    it('should return node value 20 (odd)', ()=>{
        const linkedList = new LinkedList(10);
        linkedList.add(12)
        linkedList.add(20)
        linkedList.add(22)
        linkedList.add(24)

        const result = middleNodeS1(linkedList)
        assert.equal(result?.value, 20);
    })
})

describe('Test Middle Node S2', ()=>{
    it('should return 1 node', ()=>{
        const linkedList = new LinkedList(10);

        const result = middleNodeS2(linkedList)
        assert.equal(result?.value, 10);
        assert.equal(result?.next, null);
    })

    it('should return node value 20 (even)', ()=>{
        const linkedList = new LinkedList(10);
        linkedList.add(12)
        linkedList.add(20)
        linkedList.add(22)

        const result = middleNodeS2(linkedList)
        assert.equal(result?.value, 20);
    })

    it('should return node value 20 (odd)', ()=>{
        const linkedList = new LinkedList(10);
        linkedList.add(12)
        linkedList.add(20)
        linkedList.add(22)
        linkedList.add(24)

        const result = middleNodeS2(linkedList)
        assert.equal(result?.value, 20);
    })
})