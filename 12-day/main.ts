// Question 42: Great Magicians: Add "the Great" to magician names.

let magicians: string[] = ["Harry Porter", "Alice", "Bob", "Devin"];
for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
}
console.log(magicians);

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magician_names: string[] = ["Harry Porter", "Alice", "Bob", "Devin"];
function showMagician(magician: string[]): string[] {
    let magicians: string[] = magician
    
    return magicians
}
function makeGreat(magician: string[]) {
    console.log("The Great Added List:");

    magician.forEach((names) => {
        console.log("The Great " + names);
    })

}

makeGreat(magician_names);
console.log(showMagician(magician_names));

