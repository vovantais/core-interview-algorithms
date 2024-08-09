const assert = require('assert');
const tasks = require('../src/06-anagram');
it.optional = require('../extensions/it-optional');

const testCase = [
  {
    inFirst: 'nap',
    inSecond: 'ear',
    expected: false,
  },
  {
    inFirst: 'nap',
    inSecond: 'pan',
    expected: true,
  },
  {
    inFirst: 'ear',
    inSecond: 'are',
    expected: true,
  },
  {
    inFirst: 'cheaters',
    inSecond: 'hectares',
    expected: true,
  },
  {
    inFirst: 'ectar',
    inSecond: 'cheat',
    expected: false,
  },
  {
    inFirst: '',
    inSecond: 'fddf1',
    expected: false,
  },
  {
    inFirst: 34543,
    inSecond: 'dsdwd',
    expected: false,
  },
  {
    inFirst: [],
    inSecond: ' ',
    expected: false,
  },
];

describe('06-anagram', () => {
  testCase.forEach((test) => {
    it.optional(
      'anagram should returns is string anagram.',
      () => {
        assert.equal(
          tasks.isAnagram(test.inFirst, test.inSecond),
          test.expected,
          `Expected ${test.expected}, but actually ${tasks.isAnagram(test.inFirst, test.inSecond)}`,
        );
      },
    );
  });
});
