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
/* // TEST CODE
const sentence1 = "LHL is cool";
const result1 = countLetters(sentence1);

assertEqual(result1["L"], 2); // should PASS
assertEqual(result1["H"], 1);
assertEqual(result1["i"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["c"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["l"], 1);

console.log("----------");

const sentence2 = "     ";
const result2 = countLetters(sentence2);

assertEqual(result2[" "], undefined); // should PASS
console.log("----------");

const sentence3 = "We R Number 1";
const result3 = countLetters(sentence3);

assertEqual(result3["W"], 1); // should PASS
assertEqual(result3["e"], 2);
assertEqual(result3["R"], 1);
assertEqual(result3["N"], 1);
assertEqual(result3["u"], 1);
assertEqual(result3["m"], 1);
assertEqual(result3["b"], 1);
assertEqual(result3["r"], 1);
assertEqual(result3["1"], 1);
console.log("----------");

const sentence4 = 1;
const result4 = countLetters(sentence4);
 */
