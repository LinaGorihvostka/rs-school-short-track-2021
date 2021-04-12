/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const array = number.toString().split('');
  let min = '';
  if (array.length === 2) {
    min = array[0] < array[1] ? array[0] : array[1];
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        min = array[i];
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === min) {
      array.splice(i, 1);
    }
  }
  const result = array.join('');
  return +result;
}

module.exports = deleteDigit;
