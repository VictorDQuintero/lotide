// Import eqArrays function for comparing arrays
const eqArrays = require("./eqArrays");

// Function takes in two arrays and prints whether they are equal or not.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;
