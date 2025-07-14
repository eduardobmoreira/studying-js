const firstNumber = 8;
const secondNumber = 6.3;
const thirdNumber = -2;
const fourthNumberString = '5';
const fifthNumber = 4;

const wrongSum = firstNumber + secondNumber + thirdNumber + fourthNumberString + fifthNumber;
console.log('Wrong sum: ', wrongSum); // This will output a string concatenation (12.354, 12,35 concatenated with 5) instead of a numerical sum

const correctSum = firstNumber + secondNumber + thirdNumber + Number.parseInt(fourthNumberString) + fifthNumber;
console.log('Correct sum: ', correctSum); // This will output the correct numerical sum (21.3)

const mean = correctSum / 5;
console.log('Mean: ', mean); // This will output the mean of the numbers (4.26)
console.log('Fixed mean: ', mean.toFixed(1)); // This will output the mean rounded to two decimal places (4.3)

const sextNumber = 3;
const seventhWrongNumber = 'a';
const eighthNumber = '1.5';

const wrongMultiplication = sextNumber * seventhWrongNumber;
console.log('Wrong multiplication: ', wrongMultiplication); // This will output NaN (Not a Number) because 'a' cannot be converted to a number
console.log(Number.isNaN(wrongMultiplication)); // This will return true, indicating that the result is NaN
console.log(isNaN(wrongMultiplication)); // This will also return true, indicating that the result is NaN
console.log(isNaN(seventhWrongNumber)); // This will return true, indicating that 'a' can not be evaluated as a number if the code tries to convert to number
console.log(Number.isNaN(seventhWrongNumber)); // This will return false, indicating that 'a' is not a number
console.log(Number.isNaN(eighthNumber)); // This will return false, indicating that '1.5' is a string that can be converted to a number

console.log('Correct multiplication int * str: ', firstNumber * fourthNumberString); // This will output the correct multiplication (4.5)
console.log('Hexadecimal number: ', 0xA); // 0xA is 10 in decimal
console.log('Binary number: ', 0b1010); // 0b1010 is 10 in decimal
console.log('Octal number: ', 0o12); // 0o12 is 10 in decimal