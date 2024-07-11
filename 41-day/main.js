// Question 133: Write a JavaScript object and convert it into a JSON string.
let person = {
    name: "Huzaifa",
    age: 18,
    profession: "Student"
};
let jsonObject = JSON.stringify(person);
console.log(jsonObject);
let jsObject = JSON.parse(jsonObject);
console.log(jsObject);
export {};
// Question 134: Take a JSON string and parse it into a JavaScript object.
