// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  /* Function takes in two arays and returns true or false, based on a perfect match */
  
  // Function must compare various things: length of the arrays, then the element inside the arrays
  //If those things are strictly equal, then it returns True, if not function returns false
  
  // Do this by iterating the arrays, and compare the elements simultaneously
  
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  // Proceeds to compare corresponding elements
    
  for (let i = 0; i < arr1.length; i++) {
  
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  
  } return true;
              
     
};

const assertArraysEqual = function(arr1, arr2) {
  /* Function takes in two arays and prints wether they are equal or not */
  
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
    
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); //=> should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); //=> should FAIL
assertArraysEqual(["A", "B", "C"], ["A", "B", "C"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
  
 
