function checkWord(sentence) {
    return sentence.includes("JavaScript");
}
let result = checkWord("I want to connquerer JavaScript");
console.log(result);
function fetchString(sentence) {
    return sentence.substring(0, 9);
}
let result1 = fetchString("Hello, What are you doing?");
console.log(result1); // it will return Hello, Wh
function roundedNumber(number) {
    return Math.round(number);
}
console.log(roundedNumber(23.5));
console.log(roundedNumber(23.2));
function convertInNumber(num) {
    return parseFloat(num);
}
console.log(convertInNumber("123")); // 123 number
console.log(convertInNumber("fff112")); // NaN
console.log(convertInNumber("112fff")); // 112 number
console.log(convertInNumber("112.34")); // 112 number
function checkingNumber(input) {
    return isNaN(input);
}
console.log(checkingNumber("fss"));
console.log(checkingNumber(123));
// The reduce method will iterate through each and every element of the array and it takes 2 arg the first is previous one and the second one will be the current. Like, if we give this: [1,2,3,4,5,6,7,8,9,10] the first argument is num1 it will iterate through 1 and num1 is the holder of this value then num2 iterate through the 2nd value that's 2 then plus both values and then num1 stores the result of the previous operation t
function reduceFunction(array) {
    return array.reduce((num1, num2) => num1 + num2, 0);
}
console.log(reduceFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function currentDate() {
    let now = new Date();
    let date = String(now.getDate()).padStart(2, ":)");
    let month = String(now.getMonth()).padStart(2, ":)");
    let year = String(now.getFullYear());
    return `${date}-${month}-${year}`;
}
console.log(currentDate());
export {};
