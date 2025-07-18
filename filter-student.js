const students = require('./estudantes.json');

function filterByProperty(list, property){
    return list.filter((student) => !student.endereco.hasOwnProperty(property));
}

console.log(filterByProperty(students, 'cep'));