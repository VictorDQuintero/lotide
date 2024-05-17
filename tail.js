//  FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

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

const tail = function(arr) {

  /* Take the array, loop the elements and add them to the new result array,
  prints resulting array, then returns it*/

  /* const tailArr = [];

  for (let  i = 1; i < arr.length; i++) {
    
    tailArr[i - 1] = arr[i];
    
  }*/
  
  console.log(arr.slice(1));

  return arr.slice(1);
};

// TEST CASES

// TEST CASE 1

const arr = [1,2,3,4]; // Defines array
tail(arr); //Calls function and sends arr, expected result [2,3,4]

// TEST CASE 2

const emptyArr = []; // Defines empty array
const oneArr = ["No"]; // Defines one element array

tail(emptyArr); // Expected result = []
tail(oneArr); // Expected result = []

// TEST CASE 3

// Checks that original array is not changed

const carArr = ["Fender", "Chevy", "Ford"];
tail(carArr);
assertEqual(carArr.length, 3); // Expected result: Assertion Passed: 3 === 3

// TEST CASE 4

const resultArr = tail(["Metallica", "Megadeth", "Anthrax", "Slayer"]);
assertEqual(resultArr.length, 3); // Checks that resultArr has 3 elements
assertEqual(resultArr[0], "Megadeth"); // Expected result Assertion Passed
assertEqual(resultArr[1], "Anthrax"); // Expected result Assertion Passed
assertEqual(resultArr[2], "Slayer"); // Expected result Assertion Passed