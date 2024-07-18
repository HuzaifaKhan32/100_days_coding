// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// It is a triditional function which takes a function as an argument that is known as callback function.
// Moreover, it takes two argument of strings
function coding(callback, arg1, arg2) {
    return callback(arg1, arg2);
}
// I invoked the function, and give an arrow function for callback and console the result.
coding((arg1, arg2) => {
    console.log(`${arg1} ${arg2}`);
}, "Huzaifa", "Khan");
// Question 146: Show an example of a callback function used to filter an array of numbers.
// Array that contains numbers from 1 to 10;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using filtered mathod which accepts an callback function and a condition.
// It will create a new array with given conditions
let newArray = array.filter((word) => word > 5);
console.log(`Orignal Array:`, array); // Orignal Array
console.log(`Filtered Array:`, newArray); // Filtered Array
function fetchData(callback) {
    let error = new Error("Something went wrong");
    let data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData((error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});
export {};
