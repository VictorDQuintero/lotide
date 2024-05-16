// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

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

const head = function(arr) {

  /* Will take an array and extract the first element, then return it */

  return arr[0];

};

// TEST ASSERTION

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "undefined");
assertEqual(head(["H", "e", "y"]), "h");


// TEST HEAD

/* console.log(head([7,5,6]));
console.log(head(["Hello", "World", "!"]));
console.log(head([])); */