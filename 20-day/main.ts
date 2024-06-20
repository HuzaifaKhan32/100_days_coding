// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

let joiningText = (text : string, number : number) : string => text + number;
console.log(joiningText("Age: ", 30));


// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

let remainder = (num1: number, num2: number) : number => num1 % num2;
console.log(remainder(5, 2));


// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.


let checkBothTrue = (value1 : boolean, value2 : boolean) : boolean => value1 && value2;
console.log(checkBothTrue(true, false));
console.log(checkBothTrue(true, true));


// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

let sumValue = (numStr : string, num : number) : number => Number(numStr) + num;

console.log(sumValue("5", 2));


// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

let sumDecimals = (decimal1 : number, decimal2 : number) : number => Math.round((decimal1 * decimal2) * 100) / 100;

console.log(sumDecimals(23.5, 23.7));


// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function quotientRemaindr(num1 : number, num2 : number){
    let remainder = num1 % num2;
    let quotient = num1 / num2;
    let result = {
        quotient : quotient.toFixed(2),
        remainder : remainder
    }
    return result;
}

console.log(quotientRemaindr(5, 3));