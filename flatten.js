// Function takes in a nested array, one level deep, and 'flattens' it by turning it into an unnested array.
// This function will only handle one level of nesting.
const flatten = function(arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    // Tests whether array sent is array at all
    return "Input is not an array";
  }

  for (let element of arr) {
    if (!Array.isArray(element)) {
      // If element of array is not an array pushes element into new array
      newArr.push(element);
    } else {
      for (let nestElement of element) {
        // If element IS an array, the element is looped through and each element of the array gets pushed into new array
        newArr.push(nestElement);
      }
    }
  }
  return newArr;
};

module.exports = flatten;
