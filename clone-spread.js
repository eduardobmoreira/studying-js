const gradeList = [10, 9, 8];
const newGradeList = gradeList; // Shallow copy of gradeList (just a reference)
newGradeList.push(7, 6, 5); // Modifying newGradeList will also modify gradeList
console.log(`Grade List: ${gradeList}`); 
console.log(`New Grade List: ${newGradeList}`); 


const newGradesListSpread = [...gradeList, 8, 4, 7, 6, 5]; // Using spread operator to create a new array with additional grades
// This does not modify the original gradeList
console.log(`Grades List with Spread: ${newGradesListSpread}`); 

// Cloning primitive values does not affect the original.
const originalValue = 10;
let clonedValue = originalValue; // Cloning a primitive value
clonedValue += 5; // Modifying clonedValue does not affect originalValue
console.log(`Original Value: ${originalValue}`); // Original Value: 10
console.log(`Cloned Value: ${clonedValue}`); // Cloned Value: 15


