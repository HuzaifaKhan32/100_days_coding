export function addNum(num1, num2) {
    return num1 + num2;
}
export class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
// Export default: export without variable, function, class name
// Named Exports: Export with name
export default function () {
    console.log("Hi! there");
}
// Except the last function rest of the functions are the example of Named Exports.
