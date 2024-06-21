// Question 42: Great Magicians: Add "the Great" to magician names.
let magicians = ["Harry Porter", "Alice", "Bob", "Devin"];
for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
}
console.log(magicians);
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magician_names = ["Harry Porter", "Alice", "Bob", "Devin"];
function showMagician(magician) {
    let magicians = magician;
    return magicians;
}
function makeGreat(magician) {
    console.log("The Great Added List:");
    magician.forEach((names) => {
        console.log("The Great " + names);
    });
}
makeGreat(magician_names);
console.log(showMagician(magician_names));
export {};
