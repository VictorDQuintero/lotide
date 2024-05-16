//  FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  // Will take the two parameters and compare them with the strict equality operator
  //If they are strictly equal it will print Equal or Not Equal, as a test
  //If coded correctly the messages will be the required ones as per the
  //assignment
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello!", "Hello!");
assertEqual(4,3);