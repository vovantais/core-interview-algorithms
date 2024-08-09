const assert = require('assert');
const tasks = require('../src/12-reverse-string');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: 'test',
    expected: 'tset',
  },
  {
    in: 'prod',
    expected: 'dorp',
  },
  {
    in: '4213',
    expected: '3124',
  },
  {
    in: null,
    expected: 'Error: Invalid data!',
  },
  {
    in: 8,
    expected: 'Error: Invalid data!',
  },
  {
    in: 'data test',
    expected: 'tset atad',
  },
];

describe('12-reverse-string', () => {
  testCase.forEach((test) => {
    it.optional(
      'Should returns the string revert.',
      () => {
        assert.equal(
          tasks.revertString(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.revertString(test.in)}`,
        );
      },
    );
  });
});
