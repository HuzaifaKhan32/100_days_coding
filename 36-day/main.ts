// Question 118: Write a loop that logs numbers from 1 to 10 to the console.

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// Question 119: Create a while loop that logs "Hello, World!" 5 times.

let counter = 0;
while(counter <= 4){
    console.log("Hello World");
    counter++;
}

// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

function iterateArray(movies : string[]) : void{
    for(let movie of movies){
        console.log(movie);
    }
}

iterateArray(["The Gray Man", "Interstaller", "Avengers: Endgame", "The Flash"]);