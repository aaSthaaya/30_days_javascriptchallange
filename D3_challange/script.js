console.log("Day 3: Welcome once again developer Aastha Mishra...Let's Do This!")
console.log("Control Structure");

//Activity 1: If-Else Statement

//Task1: Write a program to check if a number is positive, negative or zero and log the result to the console.

let num = 0;

if (num > 0) {
    console.log("The number is positive.")
} else if (num < 0) {
    console.log("The number is negative.")
} else {
    console.log("The number is zero.");
}

//Task2: Write a program to check if a person is eligible to vote or not(age>=18) and console the output to the log.

personAge = 12

if (personAge >= 18) {
    console.log("They can vote.");
} else {
    console.log("They cannot vote.");
}

//Activity 2: Nested If-Else Statements

//Task 3: Write a program to find largest of three numbers using nested if-else statement.

let num1 = 15;
let num2 = 9;
let num3 = 2;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("num1 is the largest of three numbers.");
    } else {
        console.log("num3 is the largest of three numbers.");
    }
} else {
    if (num2 >= num3) {
        console.log("num2 is the largest of three numbers.");
    } else {
        console.log("num3 is the largest of three numbers.");
    }
}

//Activity 3: Switch Case

//Task 4: Write a program that uses a switch case to determine the days of the week based on a number(1-7) and log the day name to the console.

const day = 3;
switch (day) {
    case 1:
        console.log("Sunday - First Day.");
        break;
    case 2:
        console.log("Monday - Second Day.");
        break;
    case 3:
        console.log("Tuesday - Third Day.");
        break;
    case 4:
        console.log("Wednesday - Fourth Day.");
        break;
    case 5:
        console.log("Thursday - Fifth Day.");
        break;
    case 6:
        console.log("Friday - Sixth Day.");
        break;
    case 7:
        console.log("Saturday - Seventh Day.");
        break;
    default:
        console.log("Not a valid day.");
}

//Task 5:Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

const score = 92;
switch (true) {
    case (score >= 80):
        console.log("A");
        break;
    case (score >= 65):
        console.log("B");
        break;
    case (score >= 50):
        console.log("C");
        break;
    case (score >= 32):
        console.log("D");
        break;
    case (score <= 31):
        console.log("F");
        break;
    default:
        console.log("NQ");
}


//filter

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// evenNumbers = numbers.filter(function (numbers) {
//     return numbers % 2 === 0;
// });
// console.log(evenNumbers);

//Activity 4: Conditional(Ternary) Operator

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

const num4 = 33;

const checkNumber = (num4 % 2 == 0) ? "Even Number" : "Odd Number";
console.log(checkNumber);


//Activity 5: Combining conditions

//Task 7: Write a program to check if a year is leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year){
if (year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else if (year % 100 === 0) {
    console.log(`${year} is not a leap year.`);
} else if (year % 4 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
}
isLeapYear(2024);