// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function checkWord(sentence: string): boolean {
    return sentence.includes("JavaScript");
}

let result = checkWord("I want to connquerer JavaScript");
console.log(result);










// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractString(sentence: string): string {
    return sentence.substring(0, 9);
}

let result1 = extractString("Hello, What are you doing?");
console.log(result1); // it will return Hello, Wh










// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function roundedNumber(number: number): number {
    return Math.round(number);
}

console.log(roundedNumber(23.5));
console.log(roundedNumber(23.2));







