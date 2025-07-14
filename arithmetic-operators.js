const gradeFirstBimester = 8;
const gradeSecondBimester = 6.3;
const gradeThirdBimester = 7;
const gradeFourthBimester = 9.3;

let averageGrade = (gradeFirstBimester + gradeSecondBimester + gradeThirdBimester + gradeFourthBimester) / 4;
console.log('Average grade: ', averageGrade.toFixed(2)); // This will output the average grade rounded to two decimal places (7.65)

if(averageGrade >= 7){
    averageGrade += averageGrade * 0.1;
}

console.log(`Adjusted average grade: ${averageGrade.toFixed(2)}`); // This will output the adjusted average grade rounded to two decimal places (7.65 + 0.1 * 7.65)

/*
Precedence of arithmetic operators:
1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication `*`, Division `/`, and Modulus `%`
4. Addition `+` and Subtraction `-`
5. Assignment `=`
Note: The precedence of operators can affect the result of expressions, so it's important to use parentheses to clarify the order of operations when necessary.
*/

let result;
result = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("The result is: ", result);

/*
first- 5 * 2 = 10
second- 10 / 3 ≈ 3.333
third- 15 * 3 = 45
fourth- 45 / 5 = 9
fifth- 4 * 2 = 8
*/

result = 10 + ((5 * 2) / 3) - 7 + ((15 * 3) / 5) + 20 - (4 * 2);
console.log("The result is: ", result);

let i = 5;
console.log(i++); // Output: 5 (i is printed before incrementing)
console.log(i);   // Saída: 6 (i incremented after printing)

let j = 5;
console.log(++j); // Output: 6 (j is incremented before printing)
console.log(j);   // Output: 6 (j remains incremented)