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
    }],
    averageGrade: 7.6,
    isAproved: function () {
        return this.averageGrade >= 7;
    },
    isAprovedArrow: () => this.averageGrade >= 7, // this doesn't refers to the object
    arrowThis: () => this // empty object
}

console.log('Student: ', student);
console.log('Is approved? ', student.isAproved());
console.log('Is approved (arrow function)? ', student.isAprovedArrow()); 
console.log('this (arrow function)? ', student.arrowThis()); 