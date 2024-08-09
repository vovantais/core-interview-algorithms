const assert = require('assert');
const tasks = require('../src/09-factorial');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: 1,
    expected: 1,
  },
  {
    in: 0,
    expected: 0,
  },
  {
    in: null,
    expected: 'Error: Invalid data!',
  },
  {
    in: '2232',
    expected: 'Error: Invalid data!',
  },
  {
    in: 8,
    expected: 40320,
  },
  {
    in: 12,
    expected: 479001600,
  },
  {
    in: 5,
    expected: 120,
  },
  {
    in: 3,
    expected: 6,
  },
];

describe('09-factorial', () => {
  testCase.forEach((test) => {
    it.optional(
      'Should returns factorial number',
      () => {
        assert.equal(
          tasks.calcFactorial(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.calcFactorial(test.in)}`,
        );
      },
    );
  });
});
