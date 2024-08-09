const assert = require('assert');
const tasks = require('../src/02-find-unique-values​-in-array');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: [1, 8, 5, 0, 0, 9, 5],
    expected: [1, 8, 5, 0, 9],
  },
  {
    in: null,
    expected: [],
  },
  {
    in: [],
    expected: [],
  },
  {
    in: [false],
    expected: [false],
  },
  {
    in: [22, 5, 5, 2, 22, 3, 3, 5],
    expected: [22, 5, 2, 3],
  },
];

describe('02-find-unique-values​-in-array', () => {
  testCase.forEach((test) => {
    it.optional(
      'findUniqueValues should returns unique values in array.',
      () => {
        assert.deepEqual(
          tasks.findUniqueValues(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${test.in}`,
        );
      },
    );
  });
});
