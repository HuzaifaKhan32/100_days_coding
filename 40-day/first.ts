// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

export function addNum(num1 : number, num2 : number) : number{
    return num1 + num2;
}

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

export class Person {
    name : string
    constructor(name : string){
        this.name = name
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Export default: export without variable, function, class name
// Named Exports: Export with name


export default function (){
    console.log("Hi! there");
}

// Except the last function rest of the functions are the example of Named Exports.