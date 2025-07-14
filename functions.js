
function getInfoStudent(name, grade) {
    return `Student Name: ${name} - Grade: ${grade}`;
}

console.log(getInfoStudent('John Doe', 8.5)); // Student Name: John Doe - Grade: 8.5
console.log(getInfoStudent('Jane Smith', 9.2)); // Student Name: Jane Smith - Grade: 9.2

function division(a, b) {    
    a / b;
}
const resultOfDivision = division(10, 2);
console.log(`Result of division: ${resultOfDivision}`); // Result of division: undefined