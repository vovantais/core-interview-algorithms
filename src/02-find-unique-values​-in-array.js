/**
 * Returns unique values in array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [1, 8, 5, 0, 0, 9, 5]           => [ 1, 8, 5, 0, 9 ]
 *   ['test', -2, 3, 2, 'test, '3']  => [ 'test', -2, 3, 2, '3' ]
 *   [false, true, '22', 2, false]   => [false, true, '22', 2]
 */
function findUniqueValues(arr) {
  if (arr != null && arr.length > 0) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  return [];
}

module.exports = {
  findUniqueValues,
};
