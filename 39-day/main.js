// Question 127: Convert a traditional function expression to an arrow function.
function addNum(num1, num2) {
    return num1 + num2;
}
let sum = (num1, num2) => num1 + num2;
console.log(addNum(5, 5));
console.log(sum(5, 5));
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
let numbersProduct = (...numbers) => numbers.reduce((total, number) => total * number, 0);
console.log(numbersProduct(5, 5, 5));
export {};
