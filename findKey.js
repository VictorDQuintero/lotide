/* Function takes object and returns the first key for which the callback returns a truthy value.
  If no key is found, then it returns 'undefined'. */
const findKey = function (object, callback) {
  if (typeof object !== "object") {
    return "No Object Provided";
  }
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

module.exports = findKey;
