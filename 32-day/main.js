// Question 106: Determine if a given year is a leap year using comparison.
function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(isLeapYear(2016));
console.log(isLeapYear(1999));
console.log(isLeapYear(2021));
console.log(isLeapYear(2006));
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3
function isDivisible(num) {
    return num % 2 == 0 && num % 3 == 0;
}
console.log(isDivisible(6));
console.log(isDivisible(12));
console.log(isDivisible(10));
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function checkString(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
}
console.log(checkString("HUZAIFA KHAN", "Huzaifa khan"));
console.log(checkString("HUZAIFA KHAN", "Huzaifa kha"));
export {};
