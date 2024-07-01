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
// Question 92: Write a function to remove the last element from an array and return the removed element.
function removedLastElemnt(array) {
    return array.pop();
}
console.log(removedLastElemnt(fruit_names));
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceElement(array) {
    let index = array.indexOf("Banana");
    array[index] = "Mango";
    return array;
}
console.log(replaceElement(fruit_names));
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
function lengthOfWord(array) {
    return array.map((word) => word.length);
}
console.log(lengthOfWord(fruit_names));
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
let numbers = [1, 2, 34, 5, 6, 7, 8, 5, 445, 74, 2, 4, 62, 3, 5];
function filterArray(array) {
    return array.filter((num) => num > 10);
}
console.log(filterArray(numbers));
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// The reduce method will iterate through each and every element of the array and it takes 2 arg the first is previous one and the second one will be the current. Like, if we give this: [1,2,3,4,5,6,7,8,9,10] the first argument is num1 it will iterate through 1 and num1 is the holder of this value then num2 iterate through the 2nd value that's 2 then plus both values and then num1 stores the result of the previous operation t
function reduceFunction(array) {
    return array.reduce((num1, num2) => num1 + num2, 0);
}
console.log(reduceFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function currentDate() {
    let now = new Date();
    let date = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth()).padStart(2, "0");
    let year = String(now.getFullYear());
    return `${date}-${month}-${year}`;
}
console.log(currentDate());
export {};
