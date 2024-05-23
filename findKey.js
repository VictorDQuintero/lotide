// FUNCTION IMPLEMENTATION

const assertEqual = function (actual, expected) {
  // Will take the two parameters and compare them with the strict equality operator
  //If they are strictly equal it will print Equal or Not Equal, as a test
  //If coded correctly the messages will be the required ones as per the
  //assignment
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  /* Function scans object and return the first key for which the callback returns a truthy value.
  If no key is found, then it should return undefined. */

  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

const letters = { A: 2, B: 3, C: 5, D: 6 };
const result1 = findKey(letters, (x) => x >= 5);

assertEqual(result1, "C");

const result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(result2, "noma"); //PASS

const testObject = {
  Jim: { age: 46, countryOfOrigin: "USA" },
  Beth: { age: 40, countryOfOrigin: "UK" },
  Sven: { age: 37, countryOfOrigin: "Sweden" },
};
const result3 = findKey(testObject, (x) => x.age <= 30);
const undef = undefined;

assertEqual(result3, undef);
