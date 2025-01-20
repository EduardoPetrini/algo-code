import { describe, it } from "node:test";
import assert from "node:assert";
import { insertionSort } from "./index.s1";

describe("Test Insertion Sort", () => {
  it("should return a sorted array using insertion sort 1", () => {
    assert.deepEqual(insertionSort([3, 2, 1]), [1, 2, 3]);
  });

  it("should return a sorted array using insertion sort 2", () => {
    assert.deepEqual(
      insertionSort([10, 5, 7, 9, 1, 3, 2, 4, 6]),
      [1, 2, 3, 4, 5, 6, 7, 9, 10]
    );
  });

  it("should return a sorted array using insertion sort 3", () => {
    assert.deepEqual(insertionSort([1, 2, 4]), [1, 2, 4]);
  });
});
