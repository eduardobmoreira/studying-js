let grades = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let sumOfGrades = 0;
grades.forEach(function(grade) {
    sumOfGrades += grade;
});

let averageGrade = sumOfGrades / grades.length;
console.log(`Average grade: ${averageGrade.toFixed(2)}`); // Average grade: 5.50

let gradesExp = [7.5, 8.0, 10, 6.5, 5.0];

let sumOfGradesExp = 0;
const sumExp = function (grade) {
    sumOfGradesExp += grade;
}

gradesExp.forEach(sumExp);

let averageGradeExp = sumOfGradesExp / gradesExp.length;
console.log(`Average grade (expression): ${averageGradeExp.toFixed(2)}`); // Average grade: 7.40

const numberList = [1, 2, 3, 4, 5];
let sumArrow = 0;
 
numberList.forEach(number => sumArrow += number);
console.log(`Sum of numbers (arrow function): ${sumArrow}`); // Sum of numbers (arrow function): 15

sumArrow = 0; // Resetting sumArrow for the next example
numberList.forEach(number => {
    sumArrow += number;
    console.log(`Current number: ${number}, Running total: ${sumArrow}`);
});
console.log(`Final sum of numbers (arrow function with block): ${sumArrow}`); // Final sum of numbers (arrow function with block): 15



