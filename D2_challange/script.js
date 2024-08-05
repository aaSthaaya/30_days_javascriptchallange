console.log("Day_2 Operators");

//Activity 1: Arithmetic Operations

//Task 1: Write a program to add two numbers and log the result to console.

let a = 2;
let b = 3;
const c = a + b;
console.log(c);
//
let x = 6 - 8;
document.getElementById('demo').innerHTML = x;
// window.alert("Welcome and have a glare.");

//Task 2: Write a program to subtract two numbers and log the result to the console.

let y = 88;
let z = 99;
const s = z - x;
console.log(s);

//Task 3: Write a program to multiply three numbers and log results to the console.

let num1 = 44;
let num2 = 33;
let num3 = 66;
const mul = num3 * num2 * num1;
console.log(mul);

//Task 4: Write a program to divide two numbers and log results to the console.

let num4 = 17;
let num5 = 34;
const div = num5 / num4;
console.log(div);

//Task 5: Write a program to find the remainder when one number is divide by other and log the result to console.

let i = 55;
let j = 7;
const k = 55 % 7;
console.log(k);

//Activity 2: Assignment operators

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let v = 99;
v += 1;
console.log(v);

//Task 7: Use the -= operator to subtract to a variable and log the result to the console.

let w = 738345;
w -= 732542;
console.log(w);

//Activity 3: Comparision Operator

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let d = 45;
let e = 65;
let f = d > e;
console.log(f);

let g = 67;
let h = 68;
let l = g < h;
console.log(l);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let num6 = 55;
let num7 = 25;
let tot = num6 >= num7;
console.log(tot);

let num8 = 22;
let num9 = 22;
let ans = num8 <= num9;
console.log(ans);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
//Rough
// let o = 30840;
// o == 6474;
// console.log(o);

let number1 = 10;
let number2 = '10';

//Using == operator

if (number1 == number2) {
    console.log(`${number1} == ${number2} is true.`);
} else {
    console.log(`${number1} == ${number2} is false.`);
}

//Using === operator

if (number1 === number2) {
    console.log(`${number1} === ${number2} is true.`);
} else {
    console.log(`${number1} === ${number2} is false.`);
}

//Activity 4: Logical Operators

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let condition1 = false;
let condition2 = true;

let result = condition1 && condition2;
console.log(`The final output is ${result}.`);

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let condition3 = true;
let condition4 = false;

let output = condition3 || condition4;
console.log(`The output is ${output}.`);

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let condition5 = false;

let resultant = !condition5;
console.log(resultant);

//Activity 5: Ternary Operator

// Task 14: Write a program that uses a ternary operator to check if a number is positive or negative and log the result to the console.


let value = 77;
let res = (value >= 0) ? "Positive" : "Negative";
console.log(`The outcome is ${res}.`);

//
let age = 18;
let ageThatCanVote = (age >= 18) ? "Can Vote!" : "Cannot Vote!";
console.log(`This person ${ageThatCanVote}`);

//Feature Request:

//1.Arithmetic Operations Script: Write a script that performs basic arithmetic operations(addition, subtraction, multiplications, Division, Remainder) on two numbers and log the results.

let numberx = 340;
let numbery = 134;

//Additon
const addition = numberx + numbery;
//Subtraction
const subtraction = numbery - numberx;
//Multiplication
const multiplication = numberx * numbery;
//Division
const division = numberx / numbery;
//Remainder
const remain = numberx % numbery;

//Outputs:

console.log(`The output is ${addition}.`);
console.log(`The output is ${subtraction}.`);
console.log(`The output is ${multiplication}.`);
console.log(`The output is ${division}.`);
console.log(`The output is ${remain}.`);

//2. Comparision and Logical Operators Script: Create a script that compares two numbers using different comparision operators and combines conditions using logical operators, logging the results.

// let numbers = 6000;
// let numbert = '6000';
// let numberu = 7000;
// Comparision script

// if (numbers == numbert) {
//     console.log("The numbers are equal.")
// } else {
//     console.log("The numbers are not equal.")
// };
// if (numbers === numbert) {
//     console.log("The numbers are equal in value and type.")
// } else {
//     console.log("The numbers are not equal.")
// };
// if (numbers < numberu) {
//     console.log("True")
// } else {
//     console.log("False")
// };
// if (numbers > numberu) {
//     console.log("True")
// } else {
//     console.log("False")
// };
// if (numbers <= numbert) {
//     console.log("True")
// } else {
//     console.log("False")
// };
// if (numbers >= numbert) {
//     console.log("True")
// } else {
//     console.log("False")
// };

//Again

let numa = 33;
let numb = 44;

//Comparision Operator

console.log("Comparision Operator");
console.log(`numa == numb: ${numa == numb}`);
console.log(`numa != numb: ${numa != numb}`);
console.log(`numa === numb: ${numa === numb}`);
console.log(`numa !== numb: ${numa !== numb}`);
console.log(`numa < numb: ${numa < numb}`);
console.log(`numa > numb: ${numa > numb}`);
console.log(`numa <= numb: ${numa <= numb}`);
console.log(`numa >= numb: ${numa >= numb}`);

//Logical Operator

console.log("Logical Operator");
console.log(`numa<numb && numa>22: ${numa < numb && numa > 22}`);
console.log(`numa<numb || numa>numb: ${numa < numb || numa > numb}`);
console.log(`!(numa===numb): ${!(numa === numb)}`);

//Combined conditions using Comparision Operator and Logical Operator.

console.log("Combined Conditions")
console.log(`numa<numb && numb>17: ${numa < numb && numa > 17}`);
console.log(`numa==33 || numb==99: ${numa == 33 || numb == 99}`);
console.log(`!(numa>numb) && (numa<=numb): ${!(numa > numb) && (numa <= numb)}`);


//
var element = document.querySelector('.example');
console.log(element.textContent);

//3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and log the result.

let number = -40;

let newNumber = (number >= 0) ? "The number is positive." : "The number is negative.";
console.log(newNumber);
