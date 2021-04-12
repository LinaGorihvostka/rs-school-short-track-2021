/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  const array = string.split('');
  let counter = 1;
  let letter = '';
  const encoded = [];
  for (let i = 0; i < array.length; i++) {
    letter = array[i];
    if (array[i - 1] === array[i]) {
      counter++;
    } else if (i > 0) {
      if (array[i - 1] !== array[i]) {
        encoded.push(counter);
        encoded.push(array[i - 1]);
        counter = 1;
      }
    }
  }
  encoded.push(counter);
  encoded.push(letter);
  const re = /1/g;
  let result = encoded.join('');
  result = result.replace(re, '');
  return result;
}

module.exports = encodeLine;
