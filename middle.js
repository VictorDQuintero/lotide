//  Function takes array and returns an array with the middle element or elements of the input array
const middle = function(arr) {
  //Test array if it's array
  let newArr = [];

  if (!Array.isArray(arr)) {
    return "Input is not an array";
  }

  //Test if array has less than two elements, if so return empty new array

  if (arr.length < 3) {
    return newArr;
  }

  //Test if array has odd number of elements, if so return new array with a single middle element

  if (arr.length % 2 !== 0) {
    newArr.push(arr[(arr.length - 1) / 2]);
  } else {
    //Test if array has even number elements, if so return new array with the middle two elements
    newArr.push(arr[arr.length / 2 - 1]); //Determines the index of the leftmost middle element
    newArr.push(arr[arr.length / 2]); //Determines the index of the rightmost middle element
  }
  return newArr;
};

module.exports = middle;
