import { describe, it } from "node:test";
import assert from "node:assert";
import { bubbleSort } from "./index.s1";

describe("Test Buble Sort", () => {
  it("should return the sorted array 1", () => {
    assert.deepEqual(bubbleSort([10, 2, 4, 6, 5, 1]), [1, 2, 4, 5, 6, 10]);
  });

  it("should return the sorted array 2", () => {
    assert.deepEqual(bubbleSort([1, 2, 4]), [1, 2, 4]);
  });

  it("should return the sorted array 3", () => {
    assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
  });
});
