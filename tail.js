//  FUNCTION IMPLEMENTATION

const tail = function (arr) {
  // Function uses slice method to return shallow copy of array

  return arr.slice(1);
};

module.exports = tail;
