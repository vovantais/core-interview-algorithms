# Core-Interview-Algorithms

## Task
The task is to implement functions on different topics. Each module consists of tasks for specified algorithm:

1. Max number 
2. Find unique values ​​in array
3. Find unique values ​​in two arrays
4. Palindrome
5. FizzBuzz
6. Anagram
7. Search for vowels
8. Fibonacci
9. Factorial
10. Trees
11. Sum Between Numbers
12. Reverse String
13. Reverse Integer
14. Matrix
15. Binary Search
16. High-end year
17. Remove duplicate values ​​from array
18. Bubble sort
19. Selection sort
20. Insertion sort

## Prepare and test
1. Install Node.js
2. Fork this repository: https://github.com/vovantais/core-interview-algorithms/
3. Clone your newly created repo: `https://github.com/<%your_github_username%>/core-interview-algorithms/`
4. Go to folder `core-interview-algorithms`
5. To install all dependencies use `npm install`
6. Each task is usually a regular function:
    ```javascript
      /**
       * Returns the result of concatenation of two strings.
      *
      * @param {string} value1
      * @param {string} value2
      * @return {string}
      *
      * @example
      *   'aa', 'bb' => 'aabb'
      *   'aa',''    => 'aa'
      *   '',  'bb'  => 'bb'
      */
      function combineStrings(value1, value2) {
        throw new Error('Not implemented');
      }
    ```
    Read the task description in the comment above the function. Try to understand the idea. You can see the tests prepared if you don't understand it.
7. Write your code in `src/*.js`.

    Remove the throwing error line from function body:
    ```javascript
        throw new Error('Not implemented'); 
    ```
    Implement the function by any way and verify your solution by running tests until the failed test become passed (green).
8. Run `npm test` in command line. If everything is OK you can try to resolve the next task.
9. You will see the number of passing and pending tests: `101` of passing tests is equal to `100` in score.
