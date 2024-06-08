// Function takes object and a variable, then it returns the first property key that matches with the value given.
const findKeyByValue = function (object, inputValue) {
  for (const [key, value] of Object.entries(object)) {
    if (value === inputValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
