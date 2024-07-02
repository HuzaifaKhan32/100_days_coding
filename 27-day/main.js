// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function convertInNumber(num) {
    return parseFloat(num);
}
console.log(convertInNumber("123")); // 123 number
console.log(convertInNumber("fff112")); // NaN
console.log(convertInNumber("112fff")); // 112 number
console.log(convertInNumber("112.34")); // 112 number
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean
function checkingNumber(input) {
    return isNaN(input);
}
console.log(checkingNumber("fss"));
console.log(checkingNumber(123));
// Functions overload
// Syncronous Programming
// Run-time enviroment 
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
let fruit_names = ["Cherry", "Banana", "Apple"];
console.log("Array Before Adding:", fruit_names, "\n");
fruit_names.push("Peach");
console.log("Array After Adding:", fruit_names);
export {};
