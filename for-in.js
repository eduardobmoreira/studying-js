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

for(let key in student){
    const type = typeof student[key]; // there is no array type.
    if(type !== 'object' && type !== 'function'){
        console.log(`The key is ${key}, the value is ${student[key]}`);
    }
}