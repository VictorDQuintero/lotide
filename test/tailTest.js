const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CASES

const resultArr = tail(["Metallica", "Megadeth", "Anthrax", "Slayer"]);
assertEqual(resultArr.length, 3); // Checks that resultArr has 3 elements
assertEqual(resultArr[0], "Megadeth"); // Expected result Assertion Passed
assertEqual(resultArr[1], "Anthrax"); // Expected result Assertion Passed
assertEqual(resultArr[2], "Slayer"); // Expected result Assertion Passed
