const student = 'John Doe';
let teacher; // let allows for reassignment, it alocates memory for the variable, we can not do it with const
console.log(typeof student);
teacher = 'Mr. Brown';
console.log(student, teacher);
// Demonstrating different types of variables

const aStringNumber = '123';
const aNumber = 42;
const anotherNumber = 3.14;
const aBoolean = true;
const aNan = NaN; // Not a Number (result of invalid arithmetic operation) - NaN is a number type in JavaScript
const aNull = null; // Null value (intencional absence of value or object) typyof null is 'object' in JavaScript, which is a known quirk of the language (js old version problem)
const aUndefined = undefined; // Undefined value
console.log(typeof aStringNumber, typeof aNumber, typeof anotherNumber, 
    typeof student, typeof teacher, typeof aBoolean, typeof aNan,
    typeof aNull, typeof aUndefined);

let declaredVariable;
console.log(declaredVariable + 3); // This will output NaN because declaredVariable is undefined, and adding undefined to a number results in NaN
console.log('aNull + 4: ', aNull + 4); // This will output 4 because null is treated as 0 in arithmetic operations
console.log('aUndefined + 5: ', aUndefined + 5); // This will output NaN because undefined is not a number, and adding it to a number results in NaN
console.log('aStringNumber + aNumber: ', aStringNumber + aNumber); // This will output '12342' because aStringNumber is a string, and adding a string to a number results in string concatenation
console.log('aStringNumber * aNumber: ', aStringNumber * aNumber); // This will output 5166 because aStringNumber is a string that can be converted to a number, and multiplying it by a number results in a numerical operation
console.log('aStringNumber - aNumber: ', aStringNumber - aNumber); // This will output -41 because aStringNumber is a string that can be converted to a number, and subtracting it from a number results in a numerical operation
console.log('aStringNumber / aNumber: ', aStringNumber / aNumber); // This will output 2.9285714285714284 because aStringNumber is a string that can be converted to a number, and dividing it by a number results in a numerical operation
console.log('aStringNumber % aNumber: ', aStringNumber % aNumber); // This will output 3 because aStringNumber is a string that can be converted to a number, and the modulus operation results in the remainder of the division
console.log('aStringNumber ** aNumber: ', aStringNumber ** aNumber); // This will output 1.5151515151515151e+81 because aStringNumber is a string that can be converted to a number, and raising it to the power of a number results in a numerical operation
console.log('aStringNumber + aBoolean: ', aStringNumber + aBoolean); // This will output '123true' because aBoolean is converted to a string and concatenated with aStringNumber
console.log('aStringNumber * aBoolean: ', aStringNumber * aBoolean); // This will output 123 because aBoolean is converted to a number (true becomes 1) and multiplied by aStringNumber
console.log('aStringNumber - aBoolean: ', aStringNumber - aBoolean); // This will output 122 because aBoolean is converted to a number (true becomes 1) and subtracted from aStringNumber
console.log('aStringNumber / aBoolean: ', aStringNumber / aBoolean); // This will output 123 because aBoolean is converted to a number (true becomes 1) and divided by aStringNumber
console.log('aStringNumber % aBoolean: ', aStringNumber % aBoolean); // This will output 0 because aBoolean is converted to a number (true becomes 1) and the modulus operation results in the remainder of the division
console.log('aStringNumber ** aBoolean: ', aStringNumber ** aBoolean); // This will output 123 because aBoolean is converted to a number (true becomes 1) and raised to the power of aStringNumber
console.log('aStringNumber + aNan: ', aStringNumber + aNan); // This will output '123NaN' because aNan is converted to a string and concatenated with aStringNumber
console.log('aStringNumber * aNan: ', aStringNumber * aNan); // This will output NaN because multiplying a string by NaN results in NaN
console.log('aStringNumber - aNan: ', aStringNumber - aNan); // This will output NaN because subtracting a string by NaN results in NaN
console.log('aStringNumber / aNan: ', aStringNumber / aNan); // This will output NaN because dividing a string by NaN results in NaN
console.log('aStringNumber % aNan: ', aStringNumber % aNan); // This will output NaN because the modulus operation with NaN results in NaN
console.log('aStringNumber ** aNan: ', aStringNumber ** aNan); // This will output NaN because raising a string to the power of NaN results in NaN
console.log('aStringNumber + aNull: ', aStringNumber + aNull); // This will output '123null' because aNull is converted to a string and concatenated with aStringNumber