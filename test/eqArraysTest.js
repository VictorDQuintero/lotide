const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => eqArrays should return true, assertEqual should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => eqArrays should return false, assertEqual should PASS
assertEqual(eqArrays(["A", "B", "C"], ["A", "B", "C"]), true); // => eqArrays should return true, assertEqual should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => eqArrays should return false, assertEqual should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => eqArrays should return false, assertEqual should PASS
