// FUNCTION IMPLEMENTATION
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //tests whether values are arrays, if so utilizes eqArrays to compare
        //if test fails function assumes that they are primitive data types and continues the loop
        if (eqArrays(object1[key], object2[key])) {
          continue;
        } else {
          return false;
        }
      } else if (object1[key] === object2[key]) {
        continue;
      } else {
        return false;
      }
    }
  } else return false;

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Will take to objects and console.log a PASS/FAIL message to the console
  const inspect = require("util").inspect; // Used to make assertions print out the actual objects and not [object Object]

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
    );
  } else {
    console.log(
      `❌❌❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`
    );
  }
};

const testObject1 = { A: 1, B: 2, C: 3 };
const testObject2 = { a: 2, b: 4 };

assertObjectsEqual(testObject1, { A: 1, B: 2, C: 3 }); // PASS
assertObjectsEqual(testObject2, { a: 2, b: 4 }); // PASS
assertObjectsEqual(testObject1, testObject2); // FAIL
