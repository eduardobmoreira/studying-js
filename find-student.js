const students = require('./estudantes.json');

function findInfo(list, key, value){
    return list.find((student) => student[key].includes(value));
}

console.log(findInfo(students, 'nome', 'Juliet'));