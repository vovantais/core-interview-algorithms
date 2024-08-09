/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  if (n1 == null || n1 == null || typeof n1 !== 'number' || typeof n2 !== 'number') {
    return 'Error: Invalid date format';
  }
  if (n1 === n2) {
    return n1;
  }
  let max = n1 > n2 ? n1 : n2;
  let min = n1 < n2 ? n1 : n2;
  let result = 0;
  for (min; min <= max; min++) {
    result += min;
  }
  return result;
}

module.exports = {
  getSumBetweenNumbers,
};
