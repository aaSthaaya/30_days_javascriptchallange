console.log("Welcome back!");

//Variable declaration
//Task 1 : Declare a variable using var, assign it to a number, and log the value to the console.

var cat = "666";
console.log(cat);

//Task 2 : Declare a variable using let, assign it to a string, and log the value to the console.

let fruit = "Litchi";
console.log(fruit);

//Task 3 : Declare a variable using const, assign it to a boolean value, and log the value to the console.

const isTrue = "true";
console.log(isTrue);

// examples

function myVar() {
    console.log(x);
    var x = 22;
    console.log(x);
}
myVar();

function myLet() {
    let y = 8;
    console.log(y);
}
myLet();

function myConst() {
    const z = 33;
    console.log(z);
}
myConst();

//Datatypes

//Task 4 : Create variables of different datatypes (number, string, boolean, object, array) and log each variable's type usingthe typeof operator.

let number = 11;
console.log(typeof (number));

let string = "Pineapple";
console.log(typeof (string));

let boolean = true;
console.log(typeof (boolean));

let object = {
    name: "Aastha",
    degree: "Graduated"
};
console.log(typeof (object));

let array = ["Tree"];
console.log(typeof (array));
console.log(Array.isArray(array));

//Reassigning Variables

//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let newVariable = 44;
console.log(newVariable);
newVariable = 33;
console.log(newVariable);

//Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error

// const newVariable = 10;
// console.log(newVariable);

//Feature Request
// 1. Variables Type Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let num = 13;
let str = "Blackpink";
let bool = true;
let obj = { type: "snake" };
let arr = [3, 5, 6, 0];
let func = function () { return "This is a function"; };
let undef;
let nullValue = null;
let symbolVar = Symbol("symbol");

console.log(`Value: ${num}, Type: ${typeof num}`);
console.log(`Value:${str}, Type: ${typeof str}`);
console.log(`Value:${bool}, Type: ${typeof bool}`);
console.log(`Value:${obj}, Type: ${typeof obj}`);
console.log(`Value:${arr}, Type: ${typeof arr}`);
console.log(`Value:${func}, Type: ${typeof func}`);
console.log(`Value:${undef}, Type: ${typeof undef}`);
console.log(`Value:${nullValue}, Type: ${typeof nullValue}`);
console.log(`Value:${symbolVar.toString()}, Type: ${typeof symbolVar}`);

//2. Reassignment Demo: Create a script that demonstrates the difference in behaviour between let and const when it comes to reassignment.

//using let

let variableLet = "This is a initial value.";
console.log(variableLet);
//reassigning let variable
variableLet = "This is reassigned value.";
console.log(variableLet);

//using const

const variableConst = "Immutable Value";
console.log(variableConst);
//Attempt to reassign the value for variableConst.

// try {
//     variableConst = "New value for variableConst.";
// } catch (error) {
//     console.error("Error: Cannot reassign a variable declared with const.");
// }
// console.log(variableConst);

try {
    variableConst = "Reassigning"
}
catch (error) {
    console.log("Error");
}
console.log(variableConst);