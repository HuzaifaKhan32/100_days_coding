// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value
let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// this makes number double 
let doublesNumber = integers.map((num) => num * 2);
// this will return the square of the number
let squareNumber = integers.map((num) => num * num);
console.log(doublesNumber);
console.log(squareNumber);
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixTypes = ["Huzaifa", 18, true, "Rafay", 25, false, "JavaScript"];
let onlyStrings = mixTypes.filter((item) => typeof item === "string");
console.log(onlyStrings);
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade
let grades = [82, 71, 55.5, 88, 81.9];
let average = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(average.toFixed(2));
export {};
