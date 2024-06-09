// Function takes object and a variable, then it returns the first property key that matches with the value given.
const findKeyByValue = function (object, inputValue) {
  if (typeof object !== "object") {
    return "No Object Provided";
  }
  for (const key of Object.keys(object)) {
    if (object[key] === inputValue) {
      return key;
    }
  }
  return "Key Not Found";
};

module.exports = findKeyByValue;
