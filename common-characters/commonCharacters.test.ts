import { describe, it } from "node:test";
import assert from "node:assert";
import { commonCharactersS1 } from "./index.s1";
import { commonCharactersS2 } from "./index.s2";

describe("commonCharacters S1", () => {
  it("should return the common characters in all strings - bc", () => {
    assert.deepEqual(commonCharactersS1(["abc", "bcd", "bce"]), ["b", "c"]);
  });

  it("should return the common characters in all strings - abcdef", () => {
    assert.deepEqual(commonCharactersS1(["abcdef", "fedcba", "abcefd", "aefbcd", "efadbc", "effffffffffffbcda", "eeeeeffffffbbbbbaaaaaccccdddd", "**************abdcef************"]), ["a", "b", "c", "d", "e", "f"]);
  });
});

describe("commonCharacters S2", () => {
    it("should return the common characters in all strings - bc", () => {
      assert.deepEqual(commonCharactersS2(["abc", "bcd", "bce"]), ["b", "c"]);
    });
  
    it("should return the common characters in all strings - abcdef", () => {
      assert.deepEqual(commonCharactersS2(["abcdef", "fedcba", "abcefd", "aefbcd", "efadbc", "effffffffffffbcda", "eeeeeffffffbbbbbaaaaaccccdddd", "**************abdcef************"]), ["a", "b", "c", "d", "e", "f"]);
    });
  });
  