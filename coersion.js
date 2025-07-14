console.log("Number('123') ", Number('123')); // Converts string to number, returns 123
console.log("Number('abc') ", Number('abc')); // Converts string to number, returns NaN (Not a Number)
console.log("Number('123abc') ", Number('123abc')); // Converts string to number, returns NaN (Not a Number)
console.log("Number('') ", Number('')); // Converts empty string to number, returns 0
console.log("Number('nan') ", Number('nan')); // Converts string to number, returns NaN (Not a Number)
console.log("Number(undefined) ", Number(undefined));
console.log("Number('0x1A') ", Number('0x1A')); // Converts hexadecimal string to number, returns 26
console.log("Number('0b1010') ", Number('0b1010')); // Converts binary string to number, returns 10

console.log("parseInt('4.5') ", parseInt('4.5')); // Parses string to integer, returns 4
console.log("parseInt('4.5', 10) ", parseInt('4.5', 10)); // Parses string to integer with base 10, returns 4
console.log("parseInt('4.5', 2) ", parseInt('4.5', 2)); // Parses string to integer with base 2, returns NaN (Not a Number)
console.log("parseInt('4.5', 16) ", parseInt('4.5', 16)); // Parses string to integer with base 16, returns 4

console.log("parseFloat('4') ", parseFloat('4')); // Parses string to float, returns 4
console.log("parseFloat('4.5') ", parseFloat('4.5')); // Parses string to float, returns 4.5
console.log("parseFloat('4.5abc') ", parseFloat('4.5abc')); // Parses string to float, returns 4.5
console.log("parseFloat('abc') ", parseFloat('abc')); // Parses string to float, returns NaN (Not a Number)

console.log("typeof +'45' ", typeof +'45'); // Converts string to number using unary plus, returns 'number'
console.log("typeof -'45' ", typeof -'45'); // Converts string to number using unary minus, returns 'number'
console.log("typeof +true ", typeof +true); // Converts boolean to number using unary plus, returns 'number'
console.log("typeof -true ", typeof -true); // Converts boolean to number using unary minus, returns 'number'

console.log("String(2) ", String(2), typeof String(2)); // Converts number to string, returns '2'
console.log("String(undefined)", String(undefined), typeof String(undefined)); // Converts undefined to string, returns 'undefined'
console.log("String(true) ", String(true), typeof String(true)); // Converts boolean to string, returns 'true'
console.log("String(null) ", String(null), typeof String(null)); // Converts null to string, returns 'null'
console.log("String([1, 2, 3]) ", String([1, 2, 3]), typeof String([1, 2, 3])); // Converts array to string, returns '1,2,3'
console.log("String({}) ", String({}), typeof String({})); // Converts object to string, returns '[object Object]'
console.log("String(Symbol('foo')) ", String(Symbol('foo')), typeof String(Symbol('foo'))); // Converts symbol to string, returns 'Symbol(foo)'
console.log("String(new Date()) ", String(new Date()), typeof String(new Date())) // Converts date to string, returns current date as string

console.log("'studying JavaScript'.includes('Java')", 'studying JavaScript'.includes('Java')); // true

const text = 'studying JavaScript';
console.log("text.includes('Java') ", text.includes('Java')); // true

console.log("'PLEASE, DO NOT SHOUT!'.toLowerCase(); ", 'PLEASE, DO NOT SHOUT!'.toLowerCase()); // 'please, do not shout!'
console.log("'please, do not shout!'.toUpperCase(); ", 'please, do not shout!'.toUpperCase()); // 'PLEASE, DO NOT SHOUT!'
console.log("'  Hello World!  '.trim(); ", '  Hello World!  '.trim()); // 'Hello World!'
console.log("'Hello World!'.slice(0, 5); ", 'Hello World!'.slice(0, 5)); // 'Hello'
console.log("'Hello World!'.substring(0, 5); ", 'Hello World!'.substring(0, 5)); // 'Hello'
console.log("'Hello World!'.substr(0, 5); ", 'Hello World!'.substr(0, 5)); // 'Hello'
console.log("'Hello World!'.charAt(0); ", 'Hello World!'.charAt(0)); // 'H'
console.log("'Hello World!'.indexOf('World'); ", 'Hello World!'.indexOf('World')); // 6
console.log("'Hello World!'.lastIndexOf('o'); ", 'Hello World!'.lastIndexOf('o')); // 7
console.log("'Hello World!'.split(' '); ", 'Hello World!'.split(' ')); // ['Hello', 'World!']
console.log("'Hello World!'.replace('World', 'JavaScript'); ", 'Hello World!'.replace('World', 'JavaScript')); // 'Hello JavaScript!'
console.log("'Hello World!'.repeat(2); ", 'Hello World!'.repeat(2)); // 'Hello World!Hello World!'
console.log("'Hello World!'.startsWith('Hello'); ", 'Hello World!'.startsWith('Hello')); // true
console.log("'Hello World!'.endsWith('World!'); ", 'Hello World!'.endsWith('World!')); // true
console.log("'Hello World!'.localeCompare('Hello'); ", 'Hello World!'.localeCompare('Hello')); // 1 (greater than)
console.log("'Hello World!'.localeCompare('Hello World!'); ", 'Hello World!'.localeCompare('Hello World!')); // 0 (equal)
console.log("'Hello World!'.localeCompare('Hello Universe!'); ", 'Hello World!'.localeCompare('Hello Universe!')); // -1 (less than)
console.log("'Hello World!'.match(/World/); ", 'Hello World!'.match(/World/)); // ['World']
console.log("'Hello World!'.search(/World/); ", 'Hello World!'.search(/World/)); // 6 (index of match)
console.log("[...'Hello World!'.matchAll(/o/g)]; ", [...'Hello World!'.matchAll(/o/g)]); // [['o'], ['o']] (all matches)
console.log("'Hello World!'.padStart(20, '*'); ", 'Hello World!'.padStart(20, '*')); // '*******Hello World!'
console.log("'Hello World!'.padEnd(20, '*'); ", 'Hello World!'.padEnd(20, '*')); // 'Hello World!*******'
console.log("'Hello World!'.toLocaleLowerCase('en-US'); ", 'Hello World!'.toLocaleLowerCase('en-US')); // 'hello world!'
console.log("'Hello World!'.toLocaleUpperCase('en-US'); ", 'Hello World!'.toLocaleUpperCase('en-US')); // 'HELLO WORLD!'
console.log("'Hello World!'.toLocaleString('en-US'); ", 'Hello World!'.toLocaleString('en-US')); // 'Hello World!'
console.log("'Hello World!'.toLocaleDateString('en-US'); ", 'Hello World!'.toLocaleDateString('en-US')); // 'Invalid Date' (not a date)

