// Question 133: Write a JavaScript object and convert it into a JSON string.

let person = {
    name : "Huzaifa",
    age : 18,
    profession : "Student"
}

let jsonObject = JSON.stringify(person)
console.log(jsonObject);




// Question 134: Take a JSON string and parse it into a JavaScript object.

let jsObject = JSON.parse(jsonObject);

console.log(jsObject);

// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// If you have a larger 