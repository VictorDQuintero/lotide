// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  /* Function takes in two arays and prints wether they are equal or not */
  
    if (arr1.length !== arr2.length) {
      return console.log("❌❌❌ Assertion Failed: The arrays are NOT equal");
    }
    
    // Proceeds to compare elements
    
    for (let i = 0; i < arr1.length; i++) {
  
      if (arr1[i] !== arr2[i]) {
          return console.log("❌❌❌ Assertion Failed: The arrays are NOT equal");
        }
  
    } return console.log("✅✅✅ Assertion Passed: The arrays ARE equal");
              
  };



 
