

const readline = require("readline-sync");
var userName = readline.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var num1 = readline.question('What is first number? ');
console.log(num1);
var num2 = readline.question('What is second number? ');
console.log(num2);
    function add(num1, num2){
    return Number(num1) + Number(num2);
    }

    function subtract(num1, num2){
    return num1 - num2;
    }

    function multiply(num1, num2){
    return num1 * num2;
    }

    function divide(num1, num2){
    return num1 / num2;
    }

var choice = readline.question('Which would you like to do?'),
    functions = ['Add', 'Subtract', 'Multiply', 'Divide'],
    index = readline.keyInSelect(functions, 'This is the answer ');
        console.log(functions[index]);
        let result = 0
        if(functions[index] === "Add"){
            result = add(num1, num2)
        }

        if(functions[index] === "Subtract"){
            result = subtract(num1, num2)
        }

        if(functions[index] === "Multiply"){
            result = multiply(num1, num2)
        }

        if(functions[index] === "Divide"){
            result = divide(num1, num2)
        }

        console.log(result)