// const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

const testObject1 = { A: 1, B: 2, C: 3 };
const testObject2 = { a: 2, b: 4 };
const testObject3 = { 1: [1, 2], 2: [2, 3] };

assertObjectsEqual(testObject1, { A: 1, B: 2, C: 3 }); // PASS
assertObjectsEqual(testObject2, { a: 2, b: 4 }); // PASS
assertObjectsEqual(testObject1, testObject2); // FAIL
assertObjectsEqual(testObject3, { 1: [1, 2], 2: [2, 3] }); // PASS
assertObjectsEqual(testObject1, {}); //FAIL
