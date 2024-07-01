let fruit_names : string[] = ["Cherry", "Banana", "Apple"];

// Question 92: Write a function to remove the last element from an array and return the removed element.

function removedLastElemnt(array : string[]){ 
    return array.pop();
}

console.log(removedLastElemnt(fruit_names));











// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceElement(array : string[]){
    let index = array.indexOf("Banana");
    array[index] = "Mango"
    return array 
}

console.log(replaceElement(fruit_names));







// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

function lengthOfWord(array : string[]) : number[] {
    return array.map((word) => word.length);
}

console.log(lengthOfWord(fruit_names));










