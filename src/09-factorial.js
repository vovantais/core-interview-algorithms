/**
 * Returns factorial number.
 * 5 = 1 * 2 * 3 * 4 * 5 = 120
 * @param {integer} num
 * @return {integer}
 *
 * @example
 *  5 => 120
 *  8 => 40320
 *  12 => 479001600
 */

function calcFactorial(num) {
  if (num == null || typeof num !== 'number') {
    return 'Error: Invalid data!';
  }
  if (num <= 1) {
    return num;
  }
  return num * calcFactorial(num - 1);
}

module.exports = {
  calcFactorial,
};
