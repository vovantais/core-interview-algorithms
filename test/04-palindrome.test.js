const assert = require('assert');
const tasks = require('../src/04-palindrome');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: 'топот',
    expected: true,
  },
  {
    in: '',
    expected: false,
  },
  {
    in: null,
    expected: false,
  },
  {
    in: [],
    expected: false,
  },
  {
    in: '723210327',
    expected: false,
  },
  {
    in: '34543',
    expected: true,
  },
  {
    in: 34543,
    expected: false,
  },
  {
    in: 'saippuakauppias',
    expected: true,
  },
];

describe('04-palindrome', () => {
  testCase.forEach((test) => {
    it.optional(
      'palindrome should returns is string palindrome.',
      () => {
        assert.equal(
          tasks.isPalindrome(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.isPalindrome(test.in)}`,
        );
      },
    );
  });
});
