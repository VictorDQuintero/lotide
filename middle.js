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
  /* Function takes in two arrays and prints whether they are equal or not. */

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const middle = function (arr) {
  /* Function will take array and return an array with the middle element or elements of the input array  */

  //Test array if it's array
  let newArr = [];

  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  //Test if array has less than two elements, if so return empty new array

  if (arr.length < 3) {
    return newArr;
  }

  //Test if array has odd number of elements, if so return new array with a single middle element

  if (arr.length % 2 !== 0) {
    newArr.push(arr[(arr.length - 1) / 2]);
  } else {
    //Test if array has even number elements, if so return new array with the middle two elements
    newArr.push(arr[arr.length / 2 - 1]); //Determines the index of the leftmost middle element
    newArr.push(arr[arr.length / 2]); //Determines the index of the rightmost middle element
  }
  return newArr;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
