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

function showPhoneNumbers(number1, number2){
    console.log('Number 1: ', number1);
    console.log('Number 2: ', number2);
}

showPhoneNumbers(student.phoneNumbers[0], student.phoneNumbers[1]);
showPhoneNumbers(...student.phoneNumbers);

const deliverInfo = {
    to: student.name,
    ...student.addresses[0]
}

console.log('deliverInfo: ', deliverInfo);


const wizard = {
 nome: "Gandalf",
 classe: "wizard"
}

const warrior = {
 nome: "Aragorn",
 classe: "warrior"
}
 
const ranger = {
 nome: "Legolas",
 classe: "ranger"
}

const characters = { ...wizard, ...warrior, ...ranger }; // JavaScript overwrites the keys with the same name with each occurrence, 
// making the final result only the last object declared within the object characters
console.log(characters);

/*
Although practical, using spread syntax can generate a lot of processing, 
so it should be used with caution in the case of loops or recursive functions.
*/