const person = {
    name: 'Eduardo',
    born: '1985-09-30',
    phoneNumbers: ['5567999999999', '5567888888888']
}

console.log(`Person phone numbers: ${person.phoneNumbers}`);
console.log(`First phone number: ${person.phoneNumbers[0]}`);

person.address = {
    street: 'Joseph Climber',
    number: '12-a'
};

console.log(person);

person.born = new Date(1985, 9, 30);

console.log(person);

/*
🧠 Why new Date(1985, 9, 30) gives October, not September
- In JavaScript, months are zero-indexed when using the Date constructor.
- 0 = January
- 1 = February
- ...
- 9 = October
- So, new Date(1985, 9, 30) means October 30th, not September 30th.

🌎 What's up with the T04:00:00.000Z part?
- That’s the time in UTC (Z means Zulu Time).
- Since you’re likely running this in Brazil, which is UTC−4, JavaScript is converting your local time to UTC for display.
*/

person.born = new Date(1985, 8, 30);

console.log(person);

const person2 = {
    name: 'Eduardo',
    born: '1985-09-30',
    phoneNumbers: ['5567999999999', '5567888888888'],
    addresses: [{
        street: 'Ms Clotilde',
        number: '71a',
        complement: ''
    }]
}

person2.addresses.push({
    street: 'Joseph Climber',
    number: '184a',
    complement: 'next drugstore'
});

console.log('Person 2: ', person2);

console.log('Adresses of person 2 that has complement: ', person2.addresses.filter((address) => address.complement)); //truthy