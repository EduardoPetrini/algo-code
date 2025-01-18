import { describe, it } from "node:test";
import assert from "node:assert";
import { findTheLargestThree } from "./index.s1";

describe("largestThree", () => {
  it("should return the largest three numbers in an array [3,4,5]", () => {
    assert.deepEqual(findTheLargestThree([1, 2, 3, 4, 5]), [3, 4, 5]);
  });

  it("should return the largest three numbers in an array [10, 10, 10]", () => {
    assert.deepEqual(findTheLargestThree([10, 10, 10]), [10, 10, 10]);
  });

  it("should return the largest three numbers in an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(findTheLargestThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [8, 9, 10]);
  });
  
  it("should return the largest three numbers from an unsorted array", () => {
    assert.deepEqual(findTheLargestThree([7, 2, 9, 1, 8, 3, 6, 4, 5]), [7, 8, 9]);
  });
});
