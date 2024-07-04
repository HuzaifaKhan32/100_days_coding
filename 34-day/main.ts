// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.


let countries = new Map<string, string>();

countries.set("Pakistan", "Islamabad");
countries.set("Iran", "Tehran");
countries.set("USA", "Washington DC");
countries.set("New Zealand", "Willington");

console.log(countries);












// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function checkKey(object : Map<string, string>) {
    if(object.has("Iran")){
        return countries.get("Iran");
    }
} 
console.log(checkKey(countries));






// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
let students = new Map<string, number>();

students.set("Huzaifa", 11821);
students.set("Hamza", 11824);
students.set("Hashir", 11820);

students.forEach((id, names) => {
    console.log(`Student ID: ${id}, Name : ${names}`);
})