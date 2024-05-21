//  FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  // Will take the two parameters and compare them with the strict equality operator
  //If they are strictly equal it will print Equal or Not Equal, as a test
  //If coded correctly the messages will be the required ones as per the
  //assignment
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let isMatch = false;
  //must stablish whether the objects have the same number of keys

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const [key1, value1] in Object.entries(object1)) {
      for (const [key2, value2] in Object.entries(object2)) {
        if (key1 === key2)
          if (value1 === value2) {
            isMatch = true;
          } else {
            isMatch = false;
          }
      }
    }
  } else {
    throw new Error("Objects have unequal number of keys");
  }

  return isMatch;
};

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
