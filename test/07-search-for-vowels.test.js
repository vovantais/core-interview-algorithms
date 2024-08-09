const assert = require('assert');
const tasks = require('../src/07-search-for-vowels');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    in: 'Fizz',
    expected: 1,
  },
  {
    in: null,
    expected: 0,
  },
  {
    in: 'Buzz',
    expected: 1,
  },
  {
    in: 1222,
    expected: 0,
  },
  {
    in: [],
    expected: 0,
  },
  {
    in: '',
    expected: 0,
  },
  {
    in: 'alexsander',
    expected: 4,
  },
  {
    in: 'hmmm',
    expected: 0,
  },
  {
    in: 'a',
    expected: 1,
  },
];

describe('07-search-for-vowels', () => {
  testCase.forEach((test) => {
    it.optional(
      'Should returns number of vowels in string',
      () => {
        assert.equal(
          tasks.calcVowelsInString(test.in),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.calcVowelsInString(test.in)}`,
        );
      },
    );
  });
});
