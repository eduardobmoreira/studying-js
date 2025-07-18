const student = {
    name: 'Eduardo',
    born: new Date(1985, 8, 30),
    phoneNumbers: ['5567999999999', '5567888888888'],
    addresses: [{
        street: 'Ms Clotilde',
        number: '71a',
        complement: ''
    },
    {
        street: 'Joseph Climber',
        number: '184a',
        complement: 'next the drugstore'
    }]
}

const keys = Object.keys(student);
console.log(keys);

if(!keys.includes('title')){
    console.error('The title is necessary.');
}

console.log('Values: ', Object.values(student));
console.log('Entries: ', Object.entries(student));


const originalObj = { a: 1, b: 2 };
const toCopyObj = { b: 3, c: 4 };

const fusedObj = Object.assign({}, originalObj, toCopyObj);

console.log('Fused object with Object.assign(): ', fusedObj);
// Output: { a: 1, b: 3, c: 4 }

const myObj = {};

Object.defineProperty(myObj, 'notEnumerableProperty', {
  value: 42,
  enumerable: false
});

for (let key in myObj) {
  console.log(key); // Output: nothing because to enter in the for loop is necessary to be enumerable.
}

const myObjE = {};

Object.defineProperty(myObjE, 'enumerableProperty', {
  value: 65,
  enumerable: true
});

for (let key in myObjE) {
  console.log(key); // Output: nothing because to enter in the for loop is necessary to be enumerable.
}

console.log('enumerableProperty: ', myObjE.enumerableProperty);