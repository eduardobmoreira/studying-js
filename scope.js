let student;

if(1 > 0){
    student = 'John Doe';
    console.log(student);
}
student = 'Jane Smith';
console.log(student);



if(1 > 0){
    let teacher = 'Mr. Brown';
    console.log(teacher);
}
//console.log(teacher); // teacher is not defined here, as it was declared with let inside the if block

if(1 > 0){
    let teacher = 'Ms. Blue';
    console.log(teacher);
}   
//teacher = 'Ms. Green'; //It creats a new global variable with var 
console.log(teacher);

const name = 'Alice';
console.log(`Hello, my name is ${name}.`);



