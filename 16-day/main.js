// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartphone = {
    model: "C11",
    brand: "Realme",
    keyFeatures: {
        ram: "2GB",
        storage: "32GB",
        screenSize: "14.5 inch",
        batteryLife: "4000 mah"
    }
};
console.log(`I have ${smartphone.brand}'s brand mobile, which model name is ${smartphone.model}. It has many features like, it has ${smartphone.keyFeatures["ram"]} ram, ${smartphone.keyFeatures["storage"]} storage, ${smartphone.keyFeatures["screenSize"]} screenSize and with very long ${smartphone.keyFeatures["batteryLife"]} batteryLife.`);
let developerSkills = {
    language: ["JavaScript", "TypeScript", "Python"],
    framework: ["Django", "AngularJS"],
    tools: ["Git", "Webpack", "Docker"]
};
let { language, framework, tools } = developerSkills;
console.log(`Language : ${language[0]}, Framework : ${framework[1]}, Tools : ${tools[0]}`);
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
export {};
