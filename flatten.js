// FUNCTION IMPLEMENTATION
const eqArrays = function (arr1, arr2) {
  /* Function takes in two arays and returns true or false, based on a perfect match */

  // Function must compare various things: length of the arrays, then the element inside the arrays
  //If those things are strictly equal, then it returns True, if not function returns false

  // Do this by iterating the arrays, and compare the elements simultaneously

  if (arr1.length !== arr2.length) {
    return false;
  }

  // Proceeds to compare corresponding elements

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  /* Function takes in two arrays and prints wether they are equal or not. */

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const flatten = function (arr) {
  /* Function takes in a nested array, one level deep, and 'flattens' it by turning it into an unnested array. */
  /* This function will only handle one level of nesting. */

  //Loop array
  //Check if element of the array is an array or not
  //If not an array push element into new array
  //If it is an array, loop that array and push elements into new array

  let newArr = [];

  if (!Array.isArray(arr)) {
    // Tests wether array sent is array at all
    return;
  }

  for (let element of arr) {
    // Loops array
    if (!Array.isArray(element)) {
      // If element of array is not an array pushes element into new array
      newArr.push(element);
    } else {
      for (let nestElement of element) {
        // If element IS an array, the element is looped through
        newArr.push(nestElement); // Each element of the array gets pushed into new array
      }
    }
  }
  return newArr; // Function returns new array
};

let array = [1, 2, [3, 4], 5, [6]];
assertArraysEqual(flatten(array), [1, 2, 3, 4, 5, 6]); // => should PASS
