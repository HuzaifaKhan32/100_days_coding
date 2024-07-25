// Create a class Person with properties name and age. Add a method introduce that returns a string introducing the person.
// typescript
// first, I create a class named Person. Class is a blueprint of an object. Class can have properties(variables) and methods (functions)
class Person {
    name;
    age;
    // It helps us to intialize an object right over created an instance.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // introduce is a method and it is like a function.
    introduce() {
        return `Hi! My name is ${this.name} and I'm ${this.age} years old`;
    }
}
let person = new Person("Huzaifa Khan", 18);
console.log(person.introduce());
export {};
