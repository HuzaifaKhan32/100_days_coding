// Question 100: Use the JavaScript Math object to find the square root of 144.

console.log(Math.sqrt(144));






// Question 101: Generate a random integer between 1 and 10.

let randomNumber = Math.ceil(Math.random() * 10) + 1;

console.log(randomNumber);


// Question 102: Calculate and log the absolute difference between the number -5 and 5.

function differenceCheck(num : number) : number{
    return Math.abs(num);
}

console.log(differenceCheck(-3 - 5));