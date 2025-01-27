import { describe, it } from "node:test";
import assert from "node:assert";
import { semordnilap } from "./index.s1";

describe("Test Semordnilap", () => {
  it("should return an empty array", () => {
    assert.deepEqual(semordnilap([]), []);
  });
  it("should return an array of semordnilap pairs", () => {
    const words = ["abc", "cba", "bca", "acb"];
    const expected = [
      ["abc", "cba"],
      ["acb", "bca"],
    ];
    const result = semordnilap(words);

    result.forEach((pair) => pair.sort());
    assert.deepEqual(result, expected);
  });

  it('should return an array of semordnilap pairs with words ["aaa", "bbbb"]', () => {
    const words = ["aaa", "bbbb"];
    const result = semordnilap(words);
    assert.deepEqual(result, []);
  });
});
