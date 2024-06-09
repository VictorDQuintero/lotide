const eqArrays = require("./eqArrays");

// Function takes two objects and returns true if both objects have identical keys with identical values.
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

module.exports = eqObjects;
