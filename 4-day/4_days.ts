// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestList : string[] = ["Harry", "Bob", "Head"];
// for(let guest of guestList){
//     console.log(`Hello ${guest}, Please join me for dinner`);
// } 










// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

// let guestList : string[] = ["Harry", "Bob", "Head"];
// // using splice method for manipulate array
// console.log(guestList.splice(0, 1, "Marsh") + " can't come to dinner" );
// guestList.map((guest) => {
//     console.log(`Hello ${guest}, Please join me for dinner`);
// })






// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestList : string[] = ["Harry", "Bob", "Head"];
console.log("I am thrilled to announce that I've just found a bigger dinner table.");
// Using splice method for insertion of a guest name at the middle of the array
guestList.splice(guestList.length / 2, 0, "Pooran");
// Using unshift method for insertion of a guest name at the start of the array
guestList.unshift("Rovman");
// Using push method for insertion of a guest name at the end of the array
guestList.push("Charles");

guestList.forEach((guest) => {
    console.log(`Hello ${guest}, Please join me for dinner`);
})












