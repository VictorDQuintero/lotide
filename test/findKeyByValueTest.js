const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("returns A for({A: 1, B: 2, C: 3}, 1)", () => {
    assert.strictEqual(findKeyByValue({ A: 1, B: 2, C: 3 }, 1), "A");
  });
  it("returns 'Key Not Found' for ({A: 1, B: 2, C: 3}, 4)", () => {
    assert.strictEqual(
      findKeyByValue({ A: 1, B: 2, C: 3 }, 4),
      "Key Not Found"
    );
  });
  it("returns 'No Object Provided' for (1, 4)", () => {
    assert.strictEqual(findKeyByValue(1, 4), "No Object Provided");
  });
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
