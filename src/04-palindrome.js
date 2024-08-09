/**
 * Returns is string Palindrome.
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example
 *  34543 => true
 *  723210 => false
 *  топот  => true
 */
function isPalindrome(str) {
  if (str == null || str.length <= 1 || typeof str !== 'string') {
    return false;
  }
  let revertString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revertString += str[i];
  }
  return str === revertString;
}

module.exports = {
  isPalindrome,
};
