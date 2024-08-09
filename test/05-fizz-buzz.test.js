const assert = require('assert');
const tasks = require('../src/05-fizz-buzz');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: 15,
    expected: 'FizzBuzz',
  },
  {
    in: 3,
    expected: 'Fizz',
  },
  {
    in: 5,
    expected: 'Buzz',
  },
  {
    in: 1,
    expected: 1,
  },
  {
    in: 11,
    expected: 11,
  },
  {
    in: '',
    expected: '',
  },
  {
    in: '34543',
    expected: '34543',
  },
  {
    in: null,
    expected: null,
  },
];

describe('05-fizz-buzz', () => {
  testCase.forEach((test) => {
    it.optional(
      'Fizz-buzz should returns is string FizzBuzz/Fizz/Buzz.',
      () => {
        assert.equal(
          tasks.checkNumberForDivision(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.checkNumberForDivision(test.in)}`,
        );
      },
    );
  });
});
