const grades = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const mean = (grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] 
    + grades[7] + grades[8] + grades[9]) / grades.length;

console.log(`Mean of grades: ${mean}`); // Mean of grades: 55

const mixedArray = [1, 'Hello', true, null, undefined, { name: 'John' }, [1, 2, 3]];

grades.push(11); // Adding a new grade to the grades array
console.log(`Updated grades: ${grades}`); // Updated grades: 10,9,8,7,6,5,4,3,2,1,11

//first expression of the for loop is the initialization, 
// the second is the condition to continue looping, 
// and the third is the increment or decrement operation
// The for loop iterates through the grades array, logging each grade and calculating the sum
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${grades[i]}`); // Grade 1: 10, Grade 2: 9, ..., Grade 11: 11
    sum += grades[i];
    if (i === (grades.length - 1)) {
        console.log(`Sum of grades: ${sum}`); // Sum of grades: 66
        console.log(`Average of grades: ${(sum / grades.length).toFixed(2)}`); // Average of grades: 6.00
    }
}

let sumForOf = 0;
for (const grade of grades) {
    console.log(`Grade: ${grade}`); // Grade: 10, Grade: 9, ..., Grade: 11
    sumForOf += grade;
}
console.log(`Sum of grades using for...of: ${sumForOf}`); // Sum of grades using for...of: 66
console.log(`Average of grades using for...of: ${(sumForOf / grades.length).toFixed(2)}`); // Average of grades using for...of: 6.00

const numbers = [100, 200, 300, 400, 500, 600];
for(let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Number: ${numbers[i]}`); // Number: 600, Number: 500, ..., Number: 100
}

for(let i = numbers.length - 1; i >= 0; i -= 2) {
    console.log(`Number with step 2: ${numbers[i]}`); // Number with step 2: 600, Number with step 2: 400, Number with step 2: 200
}

for(let i = numbers.length - 1; numbers[i] > 300; i -= 2) {
    console.log(`Number greater than 300: ${numbers[i]}`); // Number greater than 300: 600, Number greater than 300: 400
}

let evenNumbers = [];
for (let i = 0; i <= 100; i += 2) {
    evenNumbers.push(i);
}
console.log(`Even numbers from 0 to 100: ${evenNumbers}`); // Even numbers from 0 to 100: 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98

const emptyArray = [,,,];
console.log(emptyArray.length)
console.log(emptyArray[0])
console.log(emptyArray[1])
console.log(emptyArray[2])
emptyArray.push(1);
console.log(emptyArray.length) // 4
console.log(emptyArray[0]) // undefined
console.log(emptyArray[1]) // undefined
console.log(emptyArray[2]) // undefined
console.log(emptyArray[3]) // 1

emptyArray.pop();
console.log(emptyArray.length) // 3

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];

const names1 = names.slice(0, names.length / 2)
const names2 = names.slice(names.length / 2)
console.log(`First half of names: ${names1}`); // First half of names: Alice,Bob,Charlie,David,Eve
console.log(`Second half of names: ${names2}`); // Second half of names: Frank,Grace,Heidi,Ivan,Judy
// Indexing starts at 0, so the first element is at index 0 and the last element is at index names.length - 1

console.log(`The array: ${names}`); // The array: Alice,Bob,Charlie,David,Eve,Frank,Grace,Heidi,Ivan,Judy 
names.splice(1, 2, 'Zoe', 'Liam', 'Mia');
console.log(`Updated names: ${names}`); // Updated names: Alice,Zoe,Liam,Mia,David,Eve,Frank,Grace,Heidi,Ivan,Judy
// The first argument is the index where to start removing elements, the second argument is the number of elements to remove, and the rest are the elements to add


const roomJavaScript = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const roomPython = ['Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
const unifiedRooms = roomJavaScript.concat(roomPython);
console.log(`Unified rooms: ${unifiedRooms}`); // Unified rooms: Alice,Bob,Charlie,David,Eve,Frank,Grace,Heidi,Ivan,Judy
// The concat method combines two or more arrays into a new array

const concatTest = roomJavaScript.concat(roomPython, true);
console.log(`Concat test: ${concatTest}`); // Concat test: Alice,Bob,Charlie,David,Eve,Frank,Grace,Heidi,Ivan,Judy,true
console.log(`Last element type: ${typeof concatTest[concatTest.length - 1]}`); // Last element type: boolean

const classMembers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
const gradesClass = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const classList = [classMembers, gradesClass];
console.log(`Class list: ${classList[0][1]}`); // Class list: Bob
console.log(`Class list: ${classList[1][1]}`); // Class list: 9

function getMedia(name) {
    if (classMembers.includes(name)) {
        const index = classMembers.indexOf(name);
        return gradesClass[index];
    } else {
        return `Student ${name} not found.`;
    }
}

console.log(`Media of Alice: ${getMedia('Alice')}`); // Media of Alice: 10
console.log(`Media of Eduardo: ${getMedia('Eduardo')}`); // Media of Eduardo: Student Eduardo not found.

// Unstructured way to get media
function getMediaUnstructured(name) {
    if (classMembers.includes(name)) {
        const [members, grades] = classList;  
        const index = members.indexOf(name);
        return grades[index];
    } else {
        return `Student ${name} not found.`;
    }
}

console.log(`Media of Alice: ${getMediaUnstructured('Alice')}`); // Media of Alice: 10
console.log(`Media of Eduardo: ${getMediaUnstructured('Eduardo')}`); // Media of Eduardo: Student Eduardo not found.