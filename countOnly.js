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

/* Function takes an array of items and returns a count for a specific subset of those items. */

const countOnly = function (allItems, itemsToCount) {
  // allItems: an array of strings that we need to look through
  // itemsToCount: an object specifying what to count
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      // Checks if the an item in allItems is also contained in itemsToCount and has a boolean value of true
      if (results[item]) {
        // Checks if the item already exists as a key in results
        // If it does it increases its value by 1
        results[item] += 1;
      } else {
        // If it doesn't already exist it initializes it to 1
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;

// TEST CODE
/* 
const firstNames = [
  "Karl",
  "Salima",
  "Aghouanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Aghouanna"], undefined);
 */
