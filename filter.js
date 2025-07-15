const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const averageGrades = [10, 9, 8, 7, 6];

const reprovedStudents = students.filter((student, index) => {
    return averageGrades[index] < 7;
});

const reprovedStudentsUnderline = students.filter((_, index) => {
    return averageGrades[index] < 7;
});

console.log(`Reproved Students: ${reprovedStudents}`); // Reproved Students: Eve
console.log(`Reproved Students (Underline): ${reprovedStudentsUnderline}`); // Reproved Students (Underline): Eve

const aprovedGrades = averageGrades.filter((grade) => grade >= 7);
console.log(`Aproved Grades: ${aprovedGrades}`); // Aproved Grades: 10,9,8,7