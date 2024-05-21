// FUNCTION IMPLEMENTATION

const eqArrays = function (arr1, arr2) {
  /* Function takes in two arays and returns true or false, based on a perfect match */

  // Function must compare various things: length of the arrays, then the element inside the arrays
  //If those things are strictly equal, then it returns True, if not function returns false

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
  /* Function takes in two arrays and prints whether they are equal or not */

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const letterPositions = function (sentence) {
  const results = {};

  // logic to update results here

  if (typeof sentence !== "string") {
    throw new Error("Parameter is not a string");
  }

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;

      // if there is a space in the string, the function won't count it
    } else if (results[sentence[i]]) {
      // if there is an instance of the letter already in the object
      // pushes the positioning of the new instance of the letter into the value of the key representing the letter in the object
      results[sentence[i]].push(i);
    } else {
      // if there is no instance of the letter in the object, it assigns the positioning of the letter into the object as an array

      results[sentence[i]] = [i];
    }
    // }
  }
  return results;
};
const sentence1 = "hi there";

console.log(letterPositions(sentence1));
assertArraysEqual(letterPositions(sentence1).h, [0, 4]);
assertArraysEqual(letterPositions(sentence1).i, [1]);
assertArraysEqual(letterPositions(sentence1).t, [3]);
assertArraysEqual(letterPositions(sentence1).e, [5, 7]);
assertArraysEqual(letterPositions(sentence1).r, [6]);
