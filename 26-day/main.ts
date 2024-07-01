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


function convertInNumber(num: string): number {
    return parseFloat(num);
}

console.log(convertInNumber("123")); // 123 number
console.log(convertInNumber("fff112")); // NaN
console.log(convertInNumber("112fff")); // 112 number
console.log(convertInNumber("112.34")); // 112 number




function checkingNumber(input: any): boolean {
    return isNaN(input);
}

console.log(checkingNumber("fss"))
console.log(checkingNumber(123));

// The reduce method will iterate through each and every element of the array and it takes 2 arg the first is previous one and the second one will be the current. Like, if we give this: [1,2,3,4,5,6,7,8,9,10] the first argument is num1 it will iterate through 1 and num1 is the holder of this value then num2 iterate through the 2nd value that's 2 then plus both values and then num1 stores the result of the previous operation t

function reduceFunction(array: number[]): number {
    return array.reduce((num1, num2) => num1 + num2, 0);
}

console.log(reduceFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


function currentDate(){
    let now = new Date();
    let date = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth()).padStart(2, "0");
    let year = String(now.getFullYear());
    return `${date}-${month}-${year}`;
}



console.log(currentDate());


// Functions overload
// Syncronous Programming
// Run-time enviroment 
