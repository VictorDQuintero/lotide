// Function takes a string/sentence and returns an object with properties of each letter as keys and an array containing the original indeces for that letter.
const letterPositions = function(sentence) {
  const results = {};

  if (typeof sentence !== "string") {
    return "Parameter is not a string";
  }

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;

      // if there is a space in the string, the function won't count it
    } else if (results[sentence[i]]) {
      // if there is an instance of the letter already in the object, it pushes the positioning of the new instance of the letter into the value of the key representing the letter in the object
      results[sentence[i]].push(i);
    } else {
      // if there is no instance of the letter in the object, it assigns the positioning of the letter into the object as an array

      results[sentence[i]] = [i];
    }
    // }
  }
  return results;
};

module.exports = letterPositions;
