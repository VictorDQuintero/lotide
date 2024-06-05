const head = require("../head.js");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5); // should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // should pass
assertEqual(head([]), "undefined"); // should fail
assertEqual(head([]), undefined); // should pass
assertEqual(head(["H", "e", "y"]), "h"); // Should fail
