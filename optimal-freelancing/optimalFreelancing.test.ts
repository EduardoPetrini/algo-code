import { describe, it } from 'node:test';
import assert from 'node:assert';
import { optimalFreelancing } from './index.s1';

describe('Test Optimal Freelancing', () => {
    it('Should return 0', () => {
        const result = optimalFreelancing([]);
        assert.equal(result, 0);
    });

    it('Should return 1', () => {
        const result = optimalFreelancing([{ deadline: 1, payment: 1 }]);
        assert.equal(result, 1);
    });

    it('should return 2', () => {
        const jobs = [
            {
                "deadline": 1,
                "payment": 2
            },
            {
                "deadline": 1,
                "payment": 1
            }
        ];

        const result = optimalFreelancing(jobs);
        assert.equal(result, 2);
    })
    it('should return 16', () => {
        const jobs =[
            {
              "deadline": 2,
              "payment": 1
            },
            {
              "deadline": 1,
              "payment": 4
            },
            {
              "deadline": 3,
              "payment": 2
            },
            {
              "deadline": 1,
              "payment": 3
            },
            {
              "deadline": 4,
              "payment": 3
            },
            {
              "deadline": 4,
              "payment": 2
            },
            {
              "deadline": 4,
              "payment": 1
            },
            {
              "deadline": 5,
              "payment": 4
            },
            {
              "deadline": 8,
              "payment": 1
            }
          ];

        const result = optimalFreelancing(jobs);
        assert.equal(result, 16);
    })
});