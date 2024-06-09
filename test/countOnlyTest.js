const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns 1 for Jason", () => {
    assert.strictEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Aghouanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Agouhanna: false,
        }
      )["Jason"],
      1
    );
  });
  it("returns undefined for Karima", () => {
    assert.strictEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Aghouanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Agouanna: false,
        }
      )["Karima"],
      undefined
    );
  });
  it("returns undefined for Aghouanna", () => {
    assert.strictEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Aghouanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Aghouanna: false,
        }
      )["Aghouanna"],
      undefined
    );
  });
  it("returns 'Empty Array'", () => {
    assert.strictEqual(
      countOnly([], {
        Jason: true,
        Karima: true,
        Fang: true,
        Aghouanna: false,
      }),
      "Empty Array"
    );
  });
  it("returns 'Empty Object'", () => {
    assert.strictEqual(countOnly([1, 2, 3], {}), "Empty Object");
  });
  it("returns 'Array Not Given'", () => {
    assert.strictEqual(countOnly(1, { A: "a" }), "Array Not Given");
  });
});
