/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(array) {
  const arrayCopy = array.slice();
  let newArray = []; // will use it for nums except -1
  const resultArray = [];
  for (let i = 0; i < arrayCopy.length; i++) { // get array without -1
    if (arrayCopy[i] !== -1) {
      newArray.push(arrayCopy[i]);
    }
  }
  newArray = newArray.sort((a, b) => a - b);
  let newArrayIndex = 0;
  for (let j = 0; j < arrayCopy.length; j++) {
    if (arrayCopy[j] === -1) {
      resultArray.push(arrayCopy[j]);
    } else if (arrayCopy[j] !== -1) {
      resultArray.push(newArray[newArrayIndex]);
      newArrayIndex++;
    }
  }
  return resultArray;
}

module.exports = sortByHeight;
