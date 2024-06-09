const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for ['A'] === ['A', 'B']", () => {
    assert.strictEqual(eqArrays(["A"], ["A", "B"]), false);
  });
  it("returns true for [] === []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it("returns false for 'Not an array' === ['Is', 'Array']", () => {
    assert.strictEqual(eqArrays("Not an array", ["Is", "Array"]), false);
  });
});
