// Question 36: T-Shirt: Create a function for customizing t-shirts.
function tshirtCustomize(size, design, colour) {
    return `You ordered a T-Shirt.\n Colour: ${colour}\n Size: ${size}\n Design: ${design}`;
}
let infromation = tshirtCustomize("Medium", "Check T-Shirt", "Red");
console.log(infromation);
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "Meduim", design = "Strippes", colour = "Black") {
    return `You ordered a T-Shirt.\n Colour: ${colour}\n Size: ${size}\n Design: ${design}`;
}
// Default parameter
console.log(make_shirt());
export {};
