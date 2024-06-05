const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CASES

/* // TEST CASE 1

assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]); // should pass

// TEST CASE 2

assertEqual(tail([]), []); // Should pass
assertEqual(tail(["No"]), []); // Should pass

// TEST CASE 3

// Checks that original array is not changed

assertEqual(tail(["Fender", "Chevy", "Ford"].length, 3)); // Expected result: Assertion Passed: 3 === 3

// TEST CASE 4

assertEqual(tail(["Metallica", "Megadeth", "Anthrax", "Slayer"]).length, 3); // Checks that resultArr has 3 elements
assertEqual(
  tail(["Metallica", "Megadeth", "Anthrax", "Slayer"])[0],
  "Megadeth"
); // Expected result Assertion Passed
assertEqual(tail(["Metallica", "Megadeth", "Anthrax", "Slayer"])[1], "Anthrax"); // Expected result Assertion Passed
assertEqual(tail(["Metallica", "Megadeth", "Anthrax", "Slayer"])[2], "Slayer"); // Expected result Assertion Passed
 */

// TEST CASE 1

const arr = [1, 2, 3, 4]; // Defines array
console.log(tail(arr)); //Calls function and sends arr, expected result [2,3,4]

// TEST CASE 2

const emptyArr = []; // Defines empty array
const oneArr = ["No"]; // Defines one element array

console.log(tail(emptyArr)); // Expected result = []
console.log(tail(oneArr)); // Expected result = []

// TEST CASE 3

// Checks that original array is not changed

const carArr = ["Fender", "Chevy", "Ford"];
console.log(tail(carArr));
assertEqual(carArr.length, 3); // Expected result: Assertion Passed: 3 === 3

// TEST CASE 4

const resultArr = tail(["Metallica", "Megadeth", "Anthrax", "Slayer"]);
assertEqual(resultArr.length, 3); // Checks that resultArr has 3 elements
assertEqual(resultArr[0], "Megadeth"); // Expected result Assertion Passed
assertEqual(resultArr[1], "Anthrax"); // Expected result Assertion Passed
assertEqual(resultArr[2], "Slayer"); // Expected result Assertion Passed
