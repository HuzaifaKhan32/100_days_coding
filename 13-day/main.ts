// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function sandwichOrder(...ingredients : string[]){
    console.log(`Sandwich contains these items: ${ingredients.join(", ")}`);
}
sandwichOrder("Egg", "Tomato");
sandwichOrder("Egg", "Tomato", "Chicken");


// Question 45: Cars: Create detailed car objects with flexible properties.
interface Car{
    manufacture : string;
    model : string;
    [key : string] : any
}
function carModel(manufacture : string, model : string, ...options : [string, any][]){
    let car : Car = {manufacture, model};
    options.forEach(([key , value]) => {
        car[key] = value
    })

    
    return car
}
console.log(carModel("Toyota", "Corolla", ["colour", "Silver"], ["year", "2020"]));