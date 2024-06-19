// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example. 



enum vehicleType {
    Car,
    Truck,
    Motorcycle
}

console.log(`I Love driving a ${vehicleType[0]}`);
console.log(`I Love driving a ${vehicleType[1]}`);
console.log(`I Love driving a ${vehicleType[2]}`);





















// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.


interface Student {
    name: string,
    age : number,
    studentOf : string[]
}

let student1 : Student = {
    name : "Huzaifa",
    age : 18,
    studentOf : ["GIAIC", "Computer Science"]
}

let student2 : Student = {
    name : "Ebtisam",
    age : 15,
    studentOf : ["PIAIC", "Physics"]
}

console.log(student1);
console.log(student2);







// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape


type Shape = {
    kind : "Circle" | "Rectangle",
    radius? : number,
    width? : number,
    height? : number
}

let shape : Shape = {
    kind : "Circle",
    radius : 42
}

let checkShape = shape.kind === "Circle" ? "It is a circle" : "It is a rectangle";
console.log(checkShape);


