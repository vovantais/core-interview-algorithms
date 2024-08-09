/**
 * Returns number of Fibonacci.
 * F(n)=F(n−1)+F(n−2) для 𝑛 > 1
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 - sum two previous numbers
 * @param {integer} num
 * @return {integer}
 *
 * @example
 *  7 => 13 (The 7th Fibonacci number is 13)
 *  8 => 21
 *  3 => 2
 */

function fib(num) {
  if (num == null || num <= 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  let sum;

  for (let i = 1; i < num; i++) {
    //! Example iteration till 6
    sum = a + b; // 0 + 1 // 1 + 1 // 2 + 1 // 3 + 2 // 5 + 3
    a = b; // 1 // 1 // 2 // 3 // 5
    b = sum; // 1 // 2 // 3 // 5 // 8
  }

  return b;
}

module.exports = {
  fib,
};
