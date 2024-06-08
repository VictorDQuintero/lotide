const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns 2 o's for 'LHL is cool'", () => {
    assert.strictEqual(countLetters("LHL is cool")["o"], 2);
  });
  it("returns undefined for '   '", () => {
    assert.strictEqual(countLetters("   ")[" "], undefined);
  });
  it("returns 'Parameter is not a string' for []", () => {
    assert.strictEqual(countLetters([]), "Parameter is not a string");
  });
});
