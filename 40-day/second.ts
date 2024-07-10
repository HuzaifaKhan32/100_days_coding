import { addNum, Person } from "./first.js";
// Exporting dafault
import greet from "./first.js"
// We must have to give a random name for export default
let result = addNum(5,5);
console.log(result);




let person = new Person("Huzaifa");
person.greet();


greet();



