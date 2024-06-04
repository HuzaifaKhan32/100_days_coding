// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
let alien_color = "Green";
if (alien_color === "Green") {
    console.log(`The color of alien is ${alien_color}`);
}
// Version that fails (no output):
if (alien_color === "Red") {
    console.log(`The color of alien is ${alien_color}`);
}
// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain
if (alien_color === "Green") {
    console.log(`You shot down ${alien_color} alien, You earned 10 pionts!`);
}
else {
    console.log(`You shot down Red alien, You earned 5 pionts!`);
}
// Version that runs the else block:
alien_color = "Red";
if (alien_color === "Green") {
    console.log(`You shot down ${alien_color} alien, You earned 10 pionts!`);
}
else {
    console.log(`You shot down Red alien, You earned 5 pionts!`);
}
// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
if (alien_color === "Green") {
    console.log(`You shot down ${alien_color} alien, You earned 10 pionts!`);
}
else if (alien_color === "Red") {
    console.log(`You shot down Red alien, You earned 5 pionts!`);
}
else if (alien_color === "Yellow") {
    console.log(`You shot down Yellow alien, You earned 3 pionts!`);
}
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age = 18;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favorite_fruits = ["Mango", "Apple", "Water Melon"];
let checkFruits = favorite_fruits.includes("Mango") ? "I like mangoes" : "I want to eat mangoes";
console.log(checkFruits);
export {};
