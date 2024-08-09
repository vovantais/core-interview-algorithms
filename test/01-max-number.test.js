const assert = require('assert');
const tasks = require('../src/01-max-number');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: [],
    expected: 0,
  },
  {
    in: null,
    expected: 0,
  },
  {
    in: [10, 5, 7, -1, 22],
    expected: 22,
  },
  {
    in: [false, 15, '7', -1, 66, '222', true],
    expected: 66,
  },
  {
    in: [
      {
        test: 22,
      },
      2, 33, '2222', null, -1222222,
    ],
    expected: 33,
  },
];

describe('01-max-number', () => {
  testCase.forEach((test) => {
    it.optional('findMaxNumber should return max number in array.', () => {
      assert.equal(
        test.expected,
        tasks.findMaxNumber(test.in),
        `Expected ${test.expected}, but actually ${test.in}`,
      );
    });
  });
});
