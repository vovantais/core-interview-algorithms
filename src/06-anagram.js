/**
 * Returns is string Anagrams.
 * Anagrams are words that have the same letters in the same number,
 * but they are arranged in a different order.
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 *
 * @example
 *  'nap' - 'pan' => true
 *  'ear' - 'are' => true
 *  'cheaters' - 'hectares'  => true
 *  'cheat' - 'ectar'  => false
 */

function isAnagram(string1, string2) {
  let result = true;
  if (string1 == null || string2 == null || typeof string1 !== 'string' || typeof string2 !== 'string') {
    return false;
  }
  if (string1.length !== string2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    if (!string1.includes(string2[i])) {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = {
  isAnagram,
};
