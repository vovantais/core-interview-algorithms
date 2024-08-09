/**
 * Returns the string revert.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   '123'  =>  '321'
 *   'test' => 'tset'
 *   'sex'  =>  'xes'
 */
function revertString(str) {
  let result = '';
  if (str == null || typeof str !== 'string') {
    return 'Error: Invalid data!';
  }
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = {
  revertString,
};
