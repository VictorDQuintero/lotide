const eqObjects = require("./eqObjects");

// Function takes two objects, compares them and prints whether they are equal or not.
const assertObjectsEqual = function(actual, expected) {
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

module.exports = assertObjectsEqual;
