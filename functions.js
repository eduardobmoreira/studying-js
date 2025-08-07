
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



function regularFunction(){
    const vara1 = "1 Some text.";
    this.vara2 = "2 Another text.";
    const arrowFunction = () => {
        this.vara3 = "3 Arrow function text.";

        console.log(this);    
        console.log(vara1); 
        console.log(this.vara2);
        console.log(this.vara3);
    };
    arrowFunction();
}

regularFunction();