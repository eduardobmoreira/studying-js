const student = "Carol";
const teacher = "Mr. Smith";
const greeting = "Our slogan is 'Learn and Grow'";
const quote = `Ju says: "Our slogan is 'Learn and Grow'"`;

console.log(greeting);
console.log(quote);

console.log('The student is: ' + student);

console.log(`The teacher is: ${teacher}`); // Template literals allow for multi-line strings and string interpolation


// Unicode patterns - UTF-16 by default, that is 16 bits. (\u prefix) can be used to represent characters in JavaScript strings.
// Here are some examples of Unicode characters:
const dollarSign = '\u0024'
const aCapitalLetter = '\u0041'
const tic = '\u2705'
const hiragana = '\u3041'

console.log(`The dollar sign is: ${dollarSign}`);
console.log(`The type of ${dollarSign} is: ${typeof dollarSign}`);
console.log(`The capital letter A is: ${aCapitalLetter}`);
console.log(`The tic mark is: ${tic}`);
console.log(`The hiragana character is: ${hiragana}`);