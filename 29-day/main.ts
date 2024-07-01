// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

let numbers : number[] = [1,2,34,5,6,7,8,5,445,74,2,4,62,3,5];

function filterArray(array : number[]) : number[] {
    return array.filter((num) => num > 10);
}

console.log(filterArray(numbers));










// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// The reduce method will iterate through each and every element of the array and it takes 2 arg the first is previous one and the second one will be the current. Like, if we give this: [1,2,3,4,5,6,7,8,9,10] the first argument is num1 it will iterate through 1 and num1 is the holder of this value then num2 iterate through the 2nd value that's 2 then plus both values and then num1 stores the result of the previous operation t

function reduceFunction(array: number[]): number {
    return array.reduce((num1, num2) => num1 + num2, 0);
}

console.log(reduceFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));









// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function currentDate(){
    let now = new Date();
    let date = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth()).padStart(2, "0");
    let year = String(now.getFullYear());
    return `${date}-${month}-${year}`;
}



console.log(currentDate());