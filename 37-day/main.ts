// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}






















// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;

while (count > 0) {
    if (count === 5) break;
    console.log(count);
    count--;
}

// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
let nameInVowls: string = "Huzaifa";
let vowels: string = "aeiouAEIOU"
function checkVowel(str: string): void {
    for (let vow of str) {
        if (vowels.includes(vow)) {
            console.log(`First vowel found: ${vow}`);
            break
        };
        console.log(vow);
    }
}

checkVowel(nameInVowls);
