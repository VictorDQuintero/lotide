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
  const inspect = require("util").inspect;

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      // Determines if the value is an object
      for (const keyOfValue of Object.keys(value)) {
        if (callback(value)) {
          return key;
        }
      }
    } else {
      if (callback(key)) {
        return key;
      }

      // if (typeof value === "object" ){
      //   for (const valueObject of Object.values(value)){
      //     if(value[valueObject] === callback(value))
      //   }
      // }
      // for (const value)
      // console.log(`${key} has ${inspect(value)} stars`);
      // if (value === callback(key)) {
      //   return key;
      // }
    }
  }
};

const letters = { A: 2, B: 3, C: 5, D: 6 };
const result1 = findKey(letters, (key) => letters[key] >= 5);
console.log(result1); // should show D

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

console.log(result2);
