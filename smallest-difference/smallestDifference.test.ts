import { describe, it } from "node:test";
import assert from "node:assert";
import { smallestDifferenceS1 } from "./index.s1";
import { smallestDifferenceS2 } from "./index.s2";

describe("Test Smallest Difference s1", () => {
  it("should return [28, 26]", () => {
    const arrayOne = [-1, 5, 10, 20, 28, 3];
    const arrayTwo = [26, 134, 135, 15, 17];

    assert.deepEqual(smallestDifferenceS1(arrayOne, arrayTwo), [28, 26]);
  });

  it("should return [-1, 1]", () => {
    const arrayOne = [-1, 5, 10, 20, 3];
    const arrayTwo = [26, 134, 135, 1, 17];

    assert.deepEqual(smallestDifferenceS1(arrayOne, arrayTwo), [-1, 1]);
  });
});

describe("Test Smallest Difference s2", () => {
  it("should return [28, 26]", () => {
    const arrayOne = [-1, 5, 10, 20, 28, 3];
    const arrayTwo = [26, 134, 135, 15, 17];

    assert.deepEqual(smallestDifferenceS2(arrayOne, arrayTwo), [28, 26]);
  });

  it("should return [-1, 1]", () => {
    const arrayOne = [-1, 5, 10, 20, 3];
    const arrayTwo = [26, 134, 135, 1, 17];

    assert.deepEqual(smallestDifferenceS2(arrayOne, arrayTwo), [-1, 1]);
  });
});
