const student = require('./student.json');

console.log(student);

console.log('Keys of student: ', Object.keys(student));

const studentString = JSON.stringify(student);
console.log(studentString);

const studentObj = JSON.parse(studentString);
console.log(studentObj);

const originalObj = { key: 'value' };
const referenceCopy = originalObj;

referenceCopy.key = 'newValue';
console.log(originalObj.key); // Output: newValue


const deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.key = 'deepCopy';
console.log(originalObj.key);
console.log(deepCopy.key);


