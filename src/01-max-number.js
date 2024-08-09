/**
 * Returns the max number in array.
 *
 * @param {integer} numbers
 * @return {integer}
 *
 * @example
 *   [1, 8, 5, 0]    => 8
 *   [200, -100, 3]  => 200
 *   [-11, -20, -4, '22'] => -4
 */
function findMaxNumber(numbers) {
  if (numbers != null && numbers.length > 0) {
    const filteredNum = numbers.filter((item) => typeof item === 'number');
    let maxNumber = filteredNum.length > 0 ? filteredNum[0] : 0;
    for (let i = 1; i < filteredNum.length; i++) {
      if (filteredNum[i] > maxNumber) {
        maxNumber = filteredNum[i];
      }
    }
    return maxNumber;
  }
  return 0;
}

module.exports = {
  findMaxNumber,
};
