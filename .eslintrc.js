module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-plusplus": 0,
    "array-callback-return": "off",
    "no-compare-neg-zero": "off",
    "no-useless-escape": "off",
    "no-param-reassign": "off",
    "no-cond-assign": "off",
    "no-return-assign": "off",
    "no-tabs": "off",
    "prefer-spread": "off",
    "no-unused-vars": "off",
    "linebreak-style": 0,
    'no-restricted-syntax' : 0,
    'prefer-const': "off",
    'consistent-return': "off",
  },
};