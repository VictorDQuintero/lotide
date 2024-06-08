// Function takes an array and callback function. It returns a slice of the array with elements taken from the beggining, until the callback returns a truthy value.

const takeUntil = function (array, callback) {
  const result = [];

  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }

  return result;
};

module.exports = takeUntil;
