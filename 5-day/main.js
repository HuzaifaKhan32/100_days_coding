// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guestList = ["Rovman", "Harry", "Pooran", "Bob", "Head", "Charles"];
console.log("Unfortunately, I can only invite two guests");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}Sorry, You are not inviting`);
}
guestList.forEach((guest) => console.log(`Dear ${guest}, You are still invited`));
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places_world = ["Berlin", "Dubai", "Macca", "New Zealand", "Australia"];
places_world.forEach((place) => {
    console.log(`I would to visit ${place}`);
});
// We can sort the array alphabetically
console.log("Alphabetically arranged: ", [...places_world].sort());
// We can sort the array in reverse alphabetical order
console.log("Reverse Alphabetically arranged: ", [...places_world].sort().reverse());
// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
let guest_list = ["Rovman", "Harry", "Pooran", "Bob", "Head", "Charles"];
console.log(`I am inviting ${guest_list.length} guests to dinner`);
export {};
