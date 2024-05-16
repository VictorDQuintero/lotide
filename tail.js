//  FUNCTION IMPLEMENTATION
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

const tail = function(arr) {

  /* Take the array, loop the elements and add them to the new result array
  tArr[i-1] then send it out*/

  const tArr = [];

  for (let  i = 1; i < arr.length; i++){}

}