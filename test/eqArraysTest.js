const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["A", "B", "C"], ["A", "B", "C"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should PASS
