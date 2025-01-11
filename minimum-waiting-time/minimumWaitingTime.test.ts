import { describe, it } from 'node:test';
import assert from 'node:assert';
import { minimumWaitingTime } from './index.s1';

describe('Minimum Waiting Time', () => {
    it('should return 0', ()=>{
        const result = minimumWaitingTime([1]);

        assert.equal(result, 0);
    });

    it('should return 17', ()=>{
        const result = minimumWaitingTime([3,2,1,2,6]);

        assert.equal(result, 17);
    });
});