for (let i = 1; i <= 10; i++) {
    if (i === 5)
        continue;
    console.log(i);
}
let count = 10;
while (count > 0) {
    if (count === 5)
        break;
    console.log(count);
    count--;
}
let nameInVowls = "Huzaifa";
let vowels = "aeiouAEIOU";
function checkVowel(str) {
    for (let vow of str) {
        if (vowels.includes(vow)) {
            console.log(`First vowel found: ${vow}`);
            break;
        }
        ;
        console.log(vow);
    }
}
checkVowel(nameInVowls);
export {};
