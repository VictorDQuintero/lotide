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

const countLetters = function (string) {
  /* Function takes a sentence and will return a count of each letter  */

  const letterCount = {};

  for (const letter of string) {
    if (letter === " ") {
      // if there is a space in the string function won't count it
    } else if (letterCount[letter]) {
      letterCount[letter]++; // if there is an instance of the letter in result, increment its value by 1
    } else {
      letterCount[letter] = 1; // if there is no instance of the letter in result, initialize its value to 1
    }
  }

  return letterCount;
};

// TEST CODE
const sentence1 = "LHL is cool";
const result = countLetters(sentence1);

assertEqual(result["L"], 2); // should PASS
assertEqual(result["H"], 1); // should PASS
assertEqual(result["i"], 1); // should PASS
assertEqual(result["s"], 1); // should PASS
assertEqual(result["c"], 1); // should PASS
assertEqual(result["o"], 2); // should PASS
assertEqual(result["l"], 1); // should PASS
