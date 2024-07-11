// Question 127: Convert a traditional function expression to an arrow function.
function addNum(num1, num2) {
    return num1 + num2;
}
let sum = (num1, num2) => num1 + num2;
console.log(addNum(5, 5));
console.log(sum(5, 5));
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
let numbersProduct = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(numbersProduct(5, 5, 5));
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
let obj = {
    value: "Huzaifa",
    traditionalFunc: function () {
        console.log(`My name is ${this.value}`);
    },
    // arrowFunc : () => console.log(`My name is ${this.value}`) // Error
};
// obj.arrowFunc(); // Error
obj.traditionalFunc();
export {};
