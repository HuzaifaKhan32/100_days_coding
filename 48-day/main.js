// Create a class Person with properties name and age. Add a method introduce that returns a string introducing the person.
// typescript
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi! My name is ${this.name} and I'm ${this.age} years old`;
    }
}
let person = new Person("Huzaifa Khan", 18);
console.log(person.introduce());
export {};
