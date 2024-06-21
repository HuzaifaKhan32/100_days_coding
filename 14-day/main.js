let laptop = {
    make: "Sony Vaio",
    model: "Xps 12-45",
    year: "2014",
    describe: function () {
        console.log(`My Laptop model is ${laptop.model} and year is ${laptop.year}`);
    }
};
laptop.describe();
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptopArray = [
    {
        make: "Dell",
        model: "Alienware X16 R2",
        year: "2024"
    },
    {
        make: "Sony Vaio",
        model: "Vaio Z",
        year: "2021"
    },
    {
        make: "HP",
        model: "Envy x360 14",
        year: "2024"
    }
];
let [laptop1, laptop2, laptop3] = laptopArray;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let priceSet1 = [16000, 25000, 20000];
let priceSet2 = [30000, 99000, 65000];
let combineArray = [...priceSet1, ...priceSet2];
console.log(combineArray.sort((a, b) => a - b));
export {};
