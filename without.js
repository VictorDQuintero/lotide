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
  /* Function takes in two arrays and prints wether they are equal or not */

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// Function takes a source array and a second array with the items to remove from the source array. It returns a third array similar to the source array but without the elements from itemsToRemove.

const without = function (sourceArr, itemsToRemove) {
  let newArr = [];

  let isMatchFound = false; //Boolean variable that 'flags' a match

  for (let sourceElement of sourceArr) {
    // Iterates source array

    for (let removeElement of itemsToRemove) {
      // Iterates iTR array, while sourceElement is 'static'

      if (removeElement === sourceElement) {
        isMatchFound = true;
      } // If an element from iTR matches an element from source, the source element gets 'flagged'
    }
    if (!isMatchFound) {
      // If the flag never went up during an iteration of the iTR array then the sourceElement goes into the new array
      newArr.push(sourceElement);
    }
    isMatchFound = false; // 'Flag' gets reset for the next element in source array
  }
  return newArr;
};

module.exports = without;

/* 
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([2, 3, 1, 2, 4, 5], [2, 4, 1]), [3, 5]); // => [3, 5]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
 */
