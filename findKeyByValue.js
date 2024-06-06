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

// Function takes object and a variable, then it returns the first property key that matches with the value given.
const findKeyByValue = function (object, inputValue) {
  for (const [key, value] of Object.entries(object)) {
    if (value === inputValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
/* 
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const bandsByGenre = {
  metal: "Metallica",
  classicRock: "The Rolling Stones",
  indie: "Metric",
  punk: "The Clash",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bandsByGenre, "Metric"), "indie");
 */
