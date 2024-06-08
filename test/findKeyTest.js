/* 
const letters = { A: 2, B: 3, C: 5, D: 6 };
const result1 = findKey(letters, (x) => x >= 5);

assertEqual(result1, "C");

const result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(result2, "noma"); //PASS

const testObject = {
  Jim: { age: 46, countryOfOrigin: "USA" },
  Beth: { age: 40, countryOfOrigin: "UK" },
  Sven: { age: 37, countryOfOrigin: "Sweden" },
};
const result3 = findKey(testObject, (x) => x.age <= 30);

assertEqual(result3, undefined);
 */
