import { describe, it } from 'node:test';
import assert from 'node:assert';
import { tournamentWinner } from './index.s1';

describe('Tournament Winner', () => {
    it('should return TS', () => {
        assert.equal(tournamentWinner([['TS', 'JS']], [1]), 'TS')
    });

    it('should return JS', () => {
        assert.equal(tournamentWinner([['TS', 'JS'], ['JS', 'PY'], ['TS', 'JS']], [1, 1, 0]), 'JS')
    });
});