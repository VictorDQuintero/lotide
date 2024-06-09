// Function takes a source array and a second array with the items to remove from the source array. It returns a third array similar to the source array but without the elements from itemsToRemove.

const without = function(sourceArr, itemsToRemove) {
  let newArr = [];

  let isMatchFound = false; //Boolean variable that 'flags' a match

  for (let sourceElement of sourceArr) {
    // Iterates source array

    for (let removeElement of itemsToRemove) {
      // Iterates iTR array, while sourceElement is 'static'

      if (removeElement === sourceElement) {
        isMatchFound = true;
      } // If an element from iTR matches an element from source, the source element gets 'flagged'
    }
    if (!isMatchFound) {
      // If the flag never went up during an iteration of the iTR array then the sourceElement goes into the new array
      newArr.push(sourceElement);
    }
    isMatchFound = false; // 'Flag' gets reset for the next element in source array
  }
  return newArr;
};

module.exports = without;
