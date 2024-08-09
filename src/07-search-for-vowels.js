/**
 * Returns number of vowels in string.
 * @param {string} str
 * @return {integer}
 *
 * @example
 *  'test' => 1
 *  'data' => 2
 *  'chEaters' => 3
 *  'cheat' => 2
 *  'Hmm' => 0
 */

function calcVowelsInString(str) {
  let counter = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];
  if (str == null || typeof str !== 'string' || str?.trim().length <= 0) {
    return counter;
  }
  str = str.toLocaleLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (checker.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}

module.exports = {
  calcVowelsInString,
};
