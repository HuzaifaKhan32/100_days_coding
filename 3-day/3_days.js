// // Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time
// let friend_name: string[] = ["Huzaifa", "Ebtisam", "Wasif", "Oman"];
// // Use forEach function for printing elements of array
// friend_name.forEach((name) => {
//     console.log(name)
// })
// // Use for map function for printing elements of array
// let name = friend_name.map((name) => console.log(name));
// // Use for loop "iteration loop" for printing elements of array
// for (let i = 0; i < friend_name.length; i++){
//     console.log(friend_name[i]);
// }
// // Use for of loop for printing elements of array
// for(let name of friend_name){
//     console.log(name);
// }
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// Use same list of names
let friend_name = ["Huzaifa", "Ebtisam", "Wasif", "Oman"];
// make a variable named greetings
let greetings = "Hello";
// use for of loop for printing greetings with name
for (let name of friend_name) {
    // Use template literals for better readability
    console.log(`${greetings} ${name}`);
}
export {};
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let mode_transportation : string[] = ["Honda Motorcycle", "Civic", "Bugati", "Rover"];
// mode_transportation.forEach((vehicle) =>{
//     console.log(`I would like to own a ${vehicle}.`);
// });
