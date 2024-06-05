/* const head = require("../head.js");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5); // should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // should pass
assertEqual(head([]), "undefined"); // should fail
assertEqual(head([]), undefined); // should pass
assertEqual(head(["H", "e", "y"]), "h"); // Should fail
 */

const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
});
