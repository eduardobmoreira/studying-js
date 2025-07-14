const finalGrade = 7;
const absence = 5;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) => new Promise(resolve => rl.question(question, resolve));

(async () => {
  this.finalGrade = await ask("What's the final grade? ");
  this.absence = await ask("Absence? ");  
    // Using logical operators to determine if the student is approved
    // Logical AND (&&) and OR (||) operators are used to combine conditions
    if(finalGrade < 7 || absence > 4){
        console.log('Student is not approved');
    } else {
        console.log('Student is approved');
    }

    if(finalGrade < 7 && absence > 4){
        console.log('Student is not approved');
    } else {
        console.log('Student is approved');
    }

  rl.close();
})();

const warning = 0;

if(absence >= 2 && !warning){
    console.log('Bonus and you have a warning!');
} else {
    console.log('No bonus and no warning!');
}

/*
Truthy and Falsy values in JavaScript:

- Falsy values: false, 0, '', null, undefined, NaN
- Truthy values: All other values that are not falsy, including non-empty strings, non-zero numbers, objects, arrays, etc.
- The logical NOT operator (!) can be used to negate a value, converting truthy values to false and falsy values to true.
- The logical AND operator (&&) returns the first falsy value or the last truthy value.
- The logical OR operator (||) returns the first truthy value or the last falsy value.
- The logical operators can be used to control the flow of the program based on conditions.
- The logical operators can also be used to set default values, for example: const value = userInput || 'default'; will set value to 'default' if userInput is falsy.
- The logical operators can be used to combine multiple conditions, for example: if (condition1 && condition2) { ... } will execute the block if both conditions are true.
- The logical operators can be used to create complex conditions, for example: if (condition1 || (condition2 && condition3)) { ... } will execute the block if either condition1 is true or both condition2 and condition3 are true.
- The logical operators can be used to short-circuit evaluation, meaning that if the first condition is sufficient to determine the result, the second condition will not be evaluated.
- The logical operators can be used to create conditional expressions, for example: const result = condition ? valueIfTrue : valueIfFalse; will assign valueIfTrue to result if condition is true, otherwise it will assign valueIfFalse.
- The logical operators can be used to create default values, for example: const value = userInput || 'default'; will assign 'default' to value if userInput is falsy.
- The logical operators can be used to create fallback values, for example: const value = user

if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

*/