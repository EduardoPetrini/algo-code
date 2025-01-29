import { describe, it } from "node:test";
import assert from "node:assert";
import { threeSum } from "./index.s1";

describe("Test Three Sum", () => {
  it("should return [1,2,3]", () => {
    assert.deepEqual(threeSum([1, 2, 3], 6), [[1, 2, 3]]);
  });

  it("should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]", () => {
    assert.deepEqual(threeSum([-8, -6, 1, 2, 3, 5, 6], 0), [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });
});
