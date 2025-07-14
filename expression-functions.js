
const getInfoStudent = function (name, grade) {
    return `Student Name: ${name} - Grade: ${grade}`;
}

console.log(getInfoStudent('John Doe', 8.5)); // Student Name: John Doe - Grade: 8.5
console.log(getInfoStudent('Jane Smith', 9.2)); // Student Name: Jane Smith - Grade: 9.2

// Error - hoisting problem
console.log(getInfoStudentBefore('John Doe', 8.5)); // Student Name: John Doe - Grade: 8.5
console.log(getInfoStudentBefore('Jane Smith', 9.2)); // Student Name: Jane Smith - Grade: 9.2

const getStudentBefore = function (name, grade) {
    return `Student Name: ${name} - Grade: ${grade}`;
}