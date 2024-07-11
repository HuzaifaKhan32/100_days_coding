// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Explanation of "let"
// "let" is a block scope variable means according ro this loop if we trying to use "i" from the outside of this loop this will through me an error. block scope variable is so beneficial for us.   

















// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.


// Assigning with "let"
let fName : string = "Huziafa Nadeem";
fName = "Ebtisam Nadeem";

// Hence, "let" allows us to reassign a variable

// Assigning with "const"

const lName : string = "Nadeem";
// lName = "Jabbar";

// It's throwing me an error: "Cannot assign to 'lName' because it is a constant." 
//  because "const" don't allow us to reassignablity




// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.


// Global Variable
let globalVariable = "Huzaifa";
const GlobalVariable = "Huzaifa";
{
    try{
        console.log(GlobalVariable);
        console.log(globalVariable);
        console.log("It's allowing me to acces a variable which is declared and initialized outside the block {}");
        console.log("This variable is called Global scope variable");
    }catch(error){
        console.log("fail!")
    }

    const LocalVariable = "Nadeem";
    let localVariable = "Nadeem";
}

// It is throwing me an error because "localVariable" is a local scope variable
try {
//     console.log(localVariable); //ERROR
//     console.log(LocalVariable); //ERROR
}
catch (error){
    console.log(" It is throwing me an error because 'localVariable' is a local scope variable");
    console.log("This variable is called Local scope variable");
}










