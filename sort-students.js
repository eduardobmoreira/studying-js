const students = require('./estudantes.json');

function order(list, property){
    return list.sort((a, b) => {
        if(a[property] < b[property]) return -1;
        if(a[property] > b[property]) return 1;
        return 0;
    });
}

console.log(order(students, 'nome'));