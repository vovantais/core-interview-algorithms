/**
 * Returns string Fizz or Buzz or FizzBuzz.
 * If the number is divisible by 3, say "Fizz" instead.
 * If the number is divisible by 5, say "Buzz" instead.
 * And if the number is divisible by both 3 and 5, say "FizzBuzz" instead.
 * if it is not divisible by either 3 or 5, then we output the number itself
 *
 * @param {number} number
 * @return {string} //or number
 * @example
 *  15 => FizzBuzz
 *  3 => Fizz
 *  5  => Buzz
 *  1 => 1
 */

function checkNumberForDivision(number) {
  if (number == null || typeof number !== 'number' || (number % 3 !== 0 && number % 5 !== 0)) {
    return number;
  }

  const isDivisibleByThree = (number % 3 === 0);
  const isDivisibleByFive = (number % 5 === 0);

  if (isDivisibleByThree && isDivisibleByFive) {
    return 'FizzBuzz';
  }
  if (isDivisibleByThree) {
    return 'Fizz';
  }
  return 'Buzz';
}

module.exports = {
  checkNumberForDivision,
};
