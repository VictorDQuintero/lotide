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

const countOnly = function (allItems, itemsToCount) {
  /* Function takes an array of items and returns a count for a specific subset of those items */
  // allItems: an array of strings that we need to look through
  // itemsToCount: an object specying what to count
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      // Checks if the name in allTimes is also contained in itemsToCount and has a boolean value of true
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// TEST CODE

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
