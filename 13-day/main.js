// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function sandwichOrder(...ingredients) {
    console.log(`Sandwich contains these items: ${ingredients.join(", ")}`);
}
sandwichOrder("Egg", "Tomato");
sandwichOrder("Egg", "Tomato", "Chicken");
function carModel(manufacture, model, ...options) {
    let car = { manufacture, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
console.log(carModel("Toyota", "Corolla", ["colour", "Silver"], ["year", "2020"]));
export {};
