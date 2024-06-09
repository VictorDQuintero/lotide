const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true for {A: 1, B: 2, C: 3} equals {A: 1, B: 2, C: 3}", () => {
    assert.strictEqual(
      eqObjects({ A: 1, B: 2, C: 3 }, { A: 1, B: 2, C: 3 }),
      true
    );
  });
  it("returns false for {A: '1'} equals {A: 1, B: 2}", () => {
    assert.strictEqual(eqObjects({ A: 1 }, { A: 1, B: 2 }), false);
  });
  it("returns false for {A: '1'} equals {A: 1}", () => {
    assert.strictEqual(eqObjects({ A: "1" }, { A: 1 }), false);
  });
  it("returns true for {} equals {}", () => {
    assert.strictEqual(eqObjects({}, {}), true);
  });
  it("returns true for {1: [1, 2, 3]} equals {1: [1, 2, 3]}", () => {
    assert.strictEqual(eqObjects({ 1: [1, 2, 3] }, { 1: [1, 2, 3] }), true);
  });
  it("returns false for {1: ['1', 2, 3]} equals {1: [1, 2, 3]}", () => {
    assert.strictEqual(eqObjects({ 1: ["1", 2, 3] }, { 1: [1, 2, 3] }), false);
  });
});
