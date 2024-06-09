const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("returns C for({ A: 2, B: 3, C: 5, D: 6 }, (x) => x >= 5)", () => {
    assert.strictEqual(
      findKey({ A: 2, B: 3, C: 5, D: 6 }, (x) => x >= 5),
      "C"
    );
  });
  it("returns 'noma'", () => {
    assert.strictEqual(
      findKey(
        {
          "Blue Hill": { stars: 1 },
          Akaleri: { stars: 3 },
          noma: { stars: 2 },
          elBulli: { stars: 3 },
          Ora: { stars: 2 },
          Akelarre: { stars: 3 },
        },
        (x) => x.stars === 2
      ),
      "noma"
    );
  });
  it("returns 'No Object Provided'", () => {
    assert.strictEqual(
      findKey(1, (x) => x >= 5),
      "No Object Provided"
    );
  });
});

/* 


const testObject = {
  Jim: { age: 46, countryOfOrigin: "USA" },
  Beth: { age: 40, countryOfOrigin: "UK" },
  Sven: { age: 37, countryOfOrigin: "Sweden" },
};
const result3 = findKey(testObject, (x) => x.age <= 30);

assertEqual(result3, undefined);
 */
