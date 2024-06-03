// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let cities = ["Dublin", "Berlin", "New York", "Macca", "Dubai"];
cities.forEach((city) => {
    console.log(`I would like to visit ${city} city`);
});
// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
let studentData = {
    name: "Huzaifa",
    age: 18,
    studentId: 805
};
console.log(studentData);
let friends = ["Huzaifa", "Ghilman", "Abdul Wasey"];
// Intentional Error: printing index which is not exist 
console.log(friends[4]);
console.log(friends[2]);
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let num1 = 23;
let num2 = 35;
console.log(num1 < num2); // true
console.log(num1 > num2); // false
console.log(num1 == num2); //false
console.log(num1 === num2); //false
console.log(num1 <= num2); // true
console.log(num1 >= num2); // false
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
let stringTest1 = "Huzaifa";
let stringTest2 = "huzaifa";
console.log(stringTest1 == stringTest2); //false
console.log(stringTest1 === stringTest2); // false
console.log(stringTest1.toLowerCase() == stringTest2); //true
console.log(stringTest1.toUpperCase() == stringTest2.toUpperCase()); //true
console.log(stringTest1 === "Huzaifa"); //true
export {};
