import inquirer from "inquirer";
// Question 139: List three reserved words in JavaScript and create a valid use case for each. 
// Reserved in JavaScript are special words which can't be use as an identifiers. Some of them are follows:
// let
// let is use to create a variable.
let create = "variable";
// return
// return keyword is used to return a value from a function.
// function
// function is used to create a function 
function returnValue(num1, num2) {
    return num1 + num2;
    // this will return the output of this operation.
}
returnValue(5, 5);
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// let let = "Error" //Error
// Syntax Error: Unexpected strict mode reserved word.
async function fetchName() {
    let names = await inquirer.prompt([{
            name: "nam",
            message: "Please enter the name",
            type: "input"
        }]);
    return names.nam;
}
console.log(await fetchName());
