import { addNum, Person } from "./first.js";
// Exporting dafault
import greet from "./first.js";
let result = addNum(5, 5);
console.log(result);
let person = new Person("Huzaifa");
person.greet();
console.log(greet());
