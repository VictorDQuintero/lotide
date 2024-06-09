//Function takes a sentence and will return a count of each letter. As of now function treats numbers and special characters in strings as letters. If sent any other data type the function will throw an error message.

const countLetters = function(sentence) {
  const letterCount = {};

  if (typeof sentence !== "string") {
    return "Parameter is not a string";
  }

  for (const letter of sentence) {
    if (letter === " ") {
      continue;
      // if there is a space in the string the function won't count it
    } else if (letterCount[letter]) {
      letterCount[letter]++; // if there is an instance of the letter in result, increment its value by 1
    } else {
      letterCount[letter] = 1; // if there is no instance of the letter in result, initialize its value to 1
    }
  }

  return letterCount;
};

module.exports = countLetters;
