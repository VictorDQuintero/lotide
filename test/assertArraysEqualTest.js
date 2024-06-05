const assertArraysEqual = require("../assertArraysEqual");

// Asserts whether two arrays are equal or not

assertArraysEqual([1, 2, 3], [1, 2, 3]); //=> should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); //=> should FAIL
assertArraysEqual(["A", "B", "C"], ["A", "B", "C"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
