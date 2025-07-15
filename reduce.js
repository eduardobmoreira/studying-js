const JavaScriptClassRoom = [7, 8, 9, 10, 6, 5, 4, 3, 2, 1];
const PythonClassRoom = [10, 9, 8, 7, 6.5, 5, 4, 3, 2, 1];
const JavaClassRoom = [10, 9, 8.5, 7, 6, 5, 4, 3, 2.8, 1];

function getAverageGrade(classRoom) {
    const sumOfGrades = classRoom.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumOfGrades / classRoom.length;
}

const averageJavaScript = getAverageGrade(JavaScriptClassRoom);
console.log(`Average JavaScript Grade: ${averageJavaScript.toFixed(2)}`); // Average JavaScript Grade: 5.50

const averagePython = getAverageGrade(PythonClassRoom);
console.log(`Average Python Grade: ${averagePython.toFixed(2)}`); // Average Python Grade: 5.55

const averageJava = getAverageGrade(JavaClassRoom);
console.log(`Average Java Grade: ${averageJava.toFixed(2)}`); // Average Java Grade: 5.63

