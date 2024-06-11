// Question 42: Great Magicians: Add "the Great" to magician names.
let magicians = ["Harry Porter", "Alice", "Bob", "Devin"];
for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
}
console.log(magicians);
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// let magician_names: string[] = ["Harry Porter", "Alice", "Bob", "Devin"];
// function showMagician(magician: string[]): string[] {
//     let magicians: string[] = magician
//     return magicians
// }
// function makeGreat(magician: string[]) {
//     console.log("The Great Added List:");
//     magician.forEach((names) => {
//         console.log("The Great " + names);
//     })
// }
// makeGreat(magician_names);
// console.log(showMagician(magician_names));
function showMagician(magician) {
    let magicians = magician;
    return magicians;
}
let magicianss = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let greatMagicianss = [];
    magicians.forEach(magician => {
        greatMagicianss.push(`${magician} the Great`);
    });
    return greatMagicianss;
}
let greatMagicians = make_great(magicianss.slice()); // Creates a new modified array
console.log("Original magicians:");
console.log(showMagician(magicianss)); // Shows original names
console.log("Great magicians:");
console.log(showMagician(greatMagicians)); // Shows modified names
export {};
