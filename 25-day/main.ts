// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both
let UpperCase = "huzaifa Khan"
let LowerCase = "huzaifa Khan"
function upperAndLowerCase(str1: string, str2: string) {
    let upper = str1.toUpperCase();
    let lower = str1.toLowerCase();
    return console.log("Uppercase:", upper,"\n", "Lowercase:", lower) 
}

upperAndLowerCase(UpperCase, LowerCase);






// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word
// "JavaScript" with "TypeScript".


function replaceString (str : string) : string{
    let sentence = str;
    let replace = sentence.replace("JavaScript", "TypeSscript");
    return replace
}

console.log(replaceString("I love JavaScript"));





// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function findingString(sentence : string){
    return console.log("With Space", sentence.indexOf("code"),"\n", "Without Space", sentence.split(" ").indexOf("code"));
     
}

console.log(findingString("My code is easy to understand"));