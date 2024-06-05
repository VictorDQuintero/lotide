//FUNCTION IMPLEMENTATION
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

const map = function (array, callback) {
  /* The map function will take in two arguments an array to map and a callback function.
The callback function will be implemented inside map function.  */
  const results = [];

  for (let item of array) {
    // goes through array and executes callback function on each item then pushes its return value on results array
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// TEST CODE

/* const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
assertArraysEqual(words, results1); // FAIL
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // PASS

const nums = [10, 3, 4, 6, 9];

const results2 = map(nums, (num) => num * 3);
assertArraysEqual(results2, nums); // FAIL
assertArraysEqual(results2, [30, 9, 12, 18, 27]); //PASS

const cities = ["London", "New York City", "Beijing", "Buenos Aires"];

const results3 = map(cities, (city) => city.length);
assertArraysEqual(results3, [6, 13, 7, 12]); // PASS
 */
