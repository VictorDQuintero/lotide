// Import assertArraysEqual function for asserting if two arrays are equal
const assertArraysEqual = require("../assertArraysEqual");

// Import middle function that will take array and return an array with the middle element or elements of the input array
const middle = require("../middle");

//TEST CODE
// Take an array and return an array with the middle value, then asserts whether the returning array is equal to the expected result

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
