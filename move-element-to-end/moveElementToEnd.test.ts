import { describe, it } from "node:test";
import assert from "node:assert";
import { moveElementToEnd } from "./index.s1";
import { moveElementToEndS2 } from "./index.s2";

describe("Test Move Element to End", () => {
  it("should return [1,1,1,2,2,2,3,3,3,3]", () => {
    assert.deepEqual(
      moveElementToEnd([1, 3, 1, 3, 1, 3, 2, 3, 2, 2], 3),
      [1, 1, 1, 2, 2, 2, 3, 3, 3, 3]
    );
  });

  it("should return [4,1,5,2,7,6,8,8,8]", () => {
    assert.deepEqual(
      moveElementToEnd([4,8,1,8,5,2,8,7,6], 8),
      [4,1,5,2,7,6,8,8,8]
    );
  });
});

describe("Test Move Element to End s2", () => {
  it("should return [1,1,1,2,2,2,3,3,3,3]", () => {
    assert.deepEqual(
      moveElementToEndS2([1, 3, 1, 3, 1, 3, 2, 3, 2, 2], 3),
      [1, 2, 1, 2, 1, 2, 3, 3, 3, 3]
    );
  });

  it("should return [4,1,5,2,7,6,8,8,8]", () => {
    assert.deepEqual(
      moveElementToEndS2([4, 8, 1, 8, 5, 2, 8, 7, 6], 8),
      [4, 6, 1, 7, 5, 2, 8, 8, 8]
    );
  });
});
