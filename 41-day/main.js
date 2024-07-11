// Question 133: Write a JavaScript object and convert it into a JSON string.
let person = {
    name: "Huzaifa",
    age: 18,
    profession: "Student"
};
let jsonObject = JSON.stringify(person);
console.log(jsonObject);
// Question 134: Take a JSON string and parse it into a JavaScript object.
let jsObject = JSON.parse(jsonObject);
console.log(jsObject);
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
// If you have a large data then this will decreases readablity
// I am using Person object again from question 133
let Person = {
    name: "Huzaifa",
    age: 18,
    city: "Karachi"
};
let jsonobj = JSON.stringify(Person, null, 2);
console.log(jsonobj);
export {};
