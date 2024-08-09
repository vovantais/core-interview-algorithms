const assert = require('assert');
const tasks = require('../src/11-sum-between-numbers');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    inFirst: 1,
    inSecond: 1,
    expected: 1,
  },
  {
    inFirst: 1,
    inSecond: 2,
    expected: 3,
  },
  {
    inFirst: null,
    inSecond: 2,
    expected: 'Error: Invalid date format',
  },
  {
    inFirst: '2232',
    inSecond: 1,
    expected: 'Error: Invalid date format',
  },
  {
    inFirst: 5,
    inSecond: 10,
    expected: 45,
  },
  {
    inFirst: 10,
    inSecond: 12,
    expected: 33,
  },
  {
    inFirst: 10,
    inSecond: 20,
    expected: 165,
  },
  {
    inFirst: -4,
    inSecond: 4,
    expected: 0,
  },
];

describe('11-sum-between-numbers', () => {
  testCase.forEach((test) => {
    it.optional(
      'Should returns the sum of integer numbers between n1 and n2',
      () => {
        assert.equal(
          tasks.getSumBetweenNumbers(test.inFirst, test.inSecond),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.getSumBetweenNumbers(test.inFirst, test.inSecond)}`,
        );
      },
    );
  });
});
