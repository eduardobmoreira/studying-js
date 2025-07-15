const grades = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const updatedGrades = grades.map((grade) => grade + 1 >= 10 ? 10 : grade + 1);

console.log(`Updated Grades: ${updatedGrades}`); // Updated Grades: 10,10,9,8,7,6,5,4,3,2

const names = ['Alice', 'Bob', 'Charlie'];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(`Uppercase Names: ${upperCaseNames}`); // Uppercase Names: ALICE,BOB,CHARLIE