// FUNCTION IMPLEMENTATION

const eqArrays = require("./eqArrays");

const assertArraysEqual = function (actual, expected) {
  /* Function takes in two arrays and prints whether they are equal or not */

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;
