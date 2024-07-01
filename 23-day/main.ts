// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

function addition(num1 : number, num2 : number) : number{
    return num1 + num2;
}

console.log(addition(5, 10));


// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function defaultParameter(name : string = "Huzaifa") : void{ 
    console.log(`Hello ${name}`);
}

defaultParameter("Akash");

// Default Parameter
defaultParameter();








// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function subtraction(num1 : number, num2 : number) : number{
    return num1 - num2;
}

let subtractExpresion = function(num1 : number, num2 : number) : number{
    return num1 - num2;
}

console.log(subtractExpresion(223, 23));
console.log(subtractExpresion(223, 23));