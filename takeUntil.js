//  FUNCTION IMPLEMENTATION

const eqArrays = function (arr1, arr2) {
  /* Function takes in two arrays and returns true or false, based on a perfect match */

  // Function must compare various things: length of the arrays, then the element inside the arrays
  //If those things are strictly equal, then it returns True, if not function returns false

  // Do this by iterating the arrays, and compare the elements simultaneously

  if (arr1.length !== arr2.length) {
    return false;
  }

  // Proceeds to compare elements

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  /* Function takes in two arrays and prints whether they are equal or not */

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const takeUntil = function (array, callback) {
  /* The function will return a "slice of the array with elements taken from the beggining", \
until the callback returns a truthy value. The callback will only be provided the item in the array */

  const result = [];

  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }

  return result;
};

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
