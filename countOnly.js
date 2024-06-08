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
