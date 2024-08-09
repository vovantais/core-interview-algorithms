const assert = require('assert');
const tasks = require('../src/08-fibonacci');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: 1,
    expected: 1,
  },
  {
    in: 0,
    expected: 1,
  },
  {
    in: 77,
    expected: 5527939700884757,
  },
  {
    in: 3,
    expected: 2,
  },
  {
    in: 7,
    expected: 13,
  },
  {
    in: 8,
    expected: 21,
  },
  {
    in: 9,
    expected: 34,
  },
  {
    in: 10,
    expected: 55,
  },
  {
    in: null,
    expected: 1,
  },
];

describe('08-fibonacci', () => {
  testCase.forEach((test) => {
    it.optional(
      'Should returns fibonacci number',
      () => {
        assert.equal(
          tasks.fib(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.fib(test.in)}`,
        );
      },
    );
  });
});
