/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (a + b < c || a + c < b || b + c < a) return false;
  return a === c || a === b || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const rom = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const romDozens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let result = '';
  let rest = num;
  let multiplier = 1;
  do {
    const curNum = rest % 10;
    if (curNum > 0) {
      if (multiplier === 1) {
        result = rom[curNum - 1] + result;
      } else {
        result = romDozens[curNum - 1] + result;
      }
    }
    multiplier *= 10;
    rest = (rest - curNum) / 10;
  } while (rest >= 1);
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '0':
        result += 'zero';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      default:
        break;
    }
    if (i < numberStr.length - 1) result += ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isTrue = true;
  for (let i = 0, j = str.length - 1; i < str.length; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
      isTrue = false;
      break;
    }
  }
  return isTrue;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let pos = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      pos = i;
      break;
    }
  }
  return pos;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let isContain = false;
  let rest = num;
  do {
    const check = rest % 10;
    if (check === digit) {
      isContain = true;
      break;
    }
    rest = (rest - check) / 10;
  } while (rest >= 1);
  return isContain;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let rightSum = 0;
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    const inner = [];
    for (let j = 0; j < size; j += 1) {
      inner[j] = 0;
    }
    matrix[i] = inner;
  }
  let counter = 1;
  let minCol = 0;
  let maxCol = size - 1;
  let minRow = 0;
  let maxRow = size - 1;
  while (minCol <= maxCol && minRow <= maxRow) {
    for (let curCol = minCol; curCol <= maxCol; curCol += 1) {
      matrix[minRow][curCol] = counter;
      counter += 1;
    }
    minRow += 1;
    for (let curRow = minRow; curRow <= maxRow; curRow += 1) {
      matrix[curRow][maxCol] = counter;
      counter += 1;
    }
    maxCol -= 1;
    for (let curCol = maxCol; curCol >= minCol; curCol -= 1) {
      matrix[maxRow][curCol] = counter;
      counter += 1;
    }
    maxRow -= 1;
    for (let curRow = maxRow; curRow >= minRow; curRow -= 1) {
      matrix[curRow][minCol] = counter;
      counter += 1;
    }
    minCol += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const workMatrix = [];
  const rotatedMatrix = matrix;
  const len = matrix.length;
  for (let i = 0; i < len; i += 1) {
    const inner = [];
    for (let j = 0; j < len; j += 1) {
      inner[j] = 0;
    }
    workMatrix[i] = inner;
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      workMatrix[i][j] = matrix[matrix.length - 1 - j][i];
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      rotatedMatrix[i][j] = workMatrix[i][j];
    }
  }

  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) return arr;
  const sortedArr = arr;
  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (pivot > arr[i]) leftArr[leftArr.length] = arr[i];
    else rightArr[rightArr.length] = arr[i];
  }
  const result = [...sortByAsc(leftArr), pivot, ...sortByAsc(rightArr)];
  for (let i = 0; i < result.length; i += 1) {
    sortedArr[i] = result[i];
  }
  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let output = str;
  let count = iterations;
  function shuffle(string) {
    let even = '';
    let odd = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 === 0) even += string[i];
      else odd += string[i];
    }
    return even + odd;
  }
  while (count > 0) {
    output = shuffle(output);
    count -= 1;
    if (output === str) count = iterations % (iterations - count);
  }
  return output;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digitArray = Array.from(String(number), Number);
  let res = '';
  let i = digitArray.length - 2;
  while (i >= 0 && digitArray[i] >= digitArray[i + 1]) i -= 1;
  if (i <= -1) return number;
  let j = digitArray.length - 1;
  while (digitArray[j] <= digitArray[i]) j -= 1;
  let temporary = digitArray[i];
  digitArray[i] = digitArray[j];
  digitArray[j] = temporary;
  let left = i + 1;
  let right = digitArray.length - 1;
  while (left < right) {
    temporary = digitArray[left];
    digitArray[left] = digitArray[right];
    digitArray[right] = temporary;
    left += 1;
    right -= 1;
  }
  for (let k = 0; k < digitArray.length; k += 1) {
    res += digitArray[k];
  }
  return parseInt(res, 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
