const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("returns A for({A: 1, B: 2, C: 3}, 1)", () => {
    assert.strictEqual(findKeyByValue({ A: 1, B: 2, C: 3 }, 1), "A");
  });
  it("returns 'Not Found' for ({A: 1, B: 2, C: 3}, 4)", () => {
    assert.strictEqual(findKeyByValue({ A: 1, B: 2, C: 3 }, 4), "Not Found");
  });
  // it("returns false for {A: '1'} equals {A: 1, B: 2}", () => {
  //   assert.strictEqual(findKeyByValue({ A: 1 }, { A: 1, B: 2 }), false);
  // });
  // it("returns false for {A: '1'} equals {A: 1}", () => {
  //   assert.strictEqual(findKeyByValue({ A: "1" }, { A: 1 }), false);
  // });
  // it("returns true for {} equals {}", () => {
  //   assert.strictEqual(findKeyByValue({}, {}), true);
  // });
  // it("returns true for {1: [1, 2, 3]} equals {1: [1, 2, 3]}", () => {
  //   assert.strictEqual(
  //     findKeyByValue({ 1: [1, 2, 3] }, { 1: [1, 2, 3] }),
  //     true
  //   );
  // });
  // it("returns false for {1: ['1', 2, 3]} equals {1: [1, 2, 3]}", () => {
  //   assert.strictEqual(
  //     findKeyByValue({ 1: ["1", 2, 3] }, { 1: [1, 2, 3] }),
  //     false
  //   );
  // });
});

/* 
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const bandsByGenre = {
  metal: "Metallica",
  classicRock: "The Rolling Stones",
  indie: "Metric",
  punk: "The Clash",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bandsByGenre, "Metric"), "indie");
 */
