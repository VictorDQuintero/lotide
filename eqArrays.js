//  Function takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {
  //if either input is not an array returns false
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  //if arrays are different lengths (not equal by default), return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Proceeds to compare elements

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
