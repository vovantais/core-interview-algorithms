/**
 * Returns unique values in two arrays.
 *
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 *
 * @example
 *   [1, 8, 5, 0, 0, 9, 5] [1, 19, 5, 30, 0, 9, 5]          => [8, 19, 30]
 *  ['test', -2, 3, 2, 'test, '3'] [-12, 3, 2, 'test, '5'] => [-2, 5, -12]
 *  [false, true, '22', 2, false] [true, '12', 2]          => ['22', '12']
 */
function findUniqueValues(arr1, arr2) {
  if ((arr1 != null && arr1.length > 0) || (arr2 != null && arr2.length > 0)) {
    const filteredFirstArr = arr1.filter((item) => arr2.indexOf(item) === -1);
    const filteredSecondArr = arr2.filter((item) => arr1.indexOf(item) === -1);
    return [...filteredFirstArr, ...filteredSecondArr];
  }
  return [];
}

module.exports = {
  findUniqueValues,
};
