#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a welcome message
console.log("\n\tWellcome To \ 'CodewithAkhtar\' - CLI simple calculator\n");

// Asking question from user from inquirer

let answers = await inquirer.prompt ([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

// Conditional statements If-Else

if (answers.operator === "Addition"){
console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}
