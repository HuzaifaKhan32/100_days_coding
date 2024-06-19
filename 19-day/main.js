// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example. 
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(`I Love driving a ${vehicleType[0]}`);
console.log(`I Love driving a ${vehicleType[1]}`);
console.log(`I Love driving a ${vehicleType[2]}`);
let student1 = {
    name: "Huzaifa",
    age: 18,
    studentOf: ["GIAIC", "Computer Science"]
};
let student2 = {
    name: "Ebtisam",
    age: 15,
    studentOf: ["PIAIC", "Physics"]
};
console.log(student1);
console.log(student2);
let shape = {
    kind: "Circle",
    radius: 42
};
let checkShape = shape.kind === "Circle" ? "It is a circle" : "It is a rectangle";
console.log(checkShape);
export {};
