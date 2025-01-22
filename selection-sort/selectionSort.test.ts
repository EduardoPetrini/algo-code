import { describe, it } from 'node:test';
import { selectionSort } from "./index.s1";
import assert from 'node:assert';

describe('Test Selection Sort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 4, 2];
        const sortedArr = selectionSort(arr);
        assert.deepEqual(sortedArr, [2, 3, 4, 5, 8]);
    });

    it("should return a sorted array using insertion sort 2", () => {
        assert.deepEqual(
            selectionSort([10, 5, 7, 9, 1, 3, 2, 4, 6]),
          [1, 2, 3, 4, 5, 6, 7, 9, 10]
        );
      });
    
      it("should return a sorted array using insertion sort 3", () => {
        assert.deepEqual(selectionSort([1, 2, 4]), [1, 2, 4]);
      });
});
