const assert = require('assert');
const tasks = require('../src/03-find-unique-values​-in-two-arrays');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    inFirst: [1, 8, 5, 0, 0, 9, 5],
    inSecond: [1, 19, 5, 30, 0, 9, 5],
    expected: [8, 19, 30],
  },
  {
    inFirst: null,
    inSecond: null,
    expected: [],
  },
  {
    inFirst: [],
    inSecond: [],
    expected: [],
  },
  {
    inFirst: [false],
    inSecond: [],
    expected: [false],
  },
  {
    inFirst: [false],
    inSecond: [-1],
    expected: [false, -1],
  },
  {
    inFirst: [],
    inSecond: [-1, 20, 2111],
    expected: [-1, 20, 2111],
  },
  {
    inFirst: [22, 5, 5, 2, 22, 3, 3, 5, -1],
    inSecond: [222, 5, 5, 2, 22, 31, 3, 5, 2],
    expected: [-1, 222, 31],
  },
  {
    inFirst: ['test', -2, 3, 2, 'test', '3'],
    inSecond: [-12, 3, 2, 'test', '5'],
    expected: [-2, '3', -12, '5'],
  },
];

describe('03-find-unique-values​-in-two-arrays', () => {
  testCase.forEach((test) => {
    it.optional(
      'findUniqueValues should returns unique values from two array in array.',
      () => {
        assert.deepEqual(
          tasks.findUniqueValues(test.inFirst, test.inSecond),
          test.expected,
          `Expected ${test.expected}, but actually ${test.inFirst} and ${test.inSecond}`,
        );
      },
    );
  });
});
