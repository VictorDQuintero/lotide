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

const countLetters = function (sentence) {
  /* Function takes a sentence and will return a count of each letter.
  As of now function treats numbers and special characters in strings as letters.
  If sent any other data type the function will throw an error message 
   */

  const letterCount = {};

  if (typeof sentence !== "string") {
    throw new Error("Parameter is not a string");
  }

  for (const letter of sentence) {
    if (letter === " ") {
      continue;
      // if there is a space in the string the function won't count it
    } else if (letterCount[letter]) {
      letterCount[letter]++; // if there is an instance of the letter in result, increment its value by 1
    } else {
      letterCount[letter] = 1; // if there is no instance of the letter in result, initialize its value to 1
    }
  }

  return letterCount;
};

module.exports = countLetters;

/* // TEST CODE
const sentence1 = "LHL is cool";
const result1 = countLetters(sentence1);

assertEqual(result1["L"], 2); // should PASS
assertEqual(result1["H"], 1);
assertEqual(result1["i"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["c"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["l"], 1);

console.log("----------");

const sentence2 = "     ";
const result2 = countLetters(sentence2);

assertEqual(result2[" "], undefined); // should PASS
console.log("----------");

const sentence3 = "We R Number 1";
const result3 = countLetters(sentence3);

assertEqual(result3["W"], 1); // should PASS
assertEqual(result3["e"], 2);
assertEqual(result3["R"], 1);
assertEqual(result3["N"], 1);
assertEqual(result3["u"], 1);
assertEqual(result3["m"], 1);
assertEqual(result3["b"], 1);
assertEqual(result3["r"], 1);
assertEqual(result3["1"], 1);
console.log("----------");

const sentence4 = 1;
const result4 = countLetters(sentence4);
 */
