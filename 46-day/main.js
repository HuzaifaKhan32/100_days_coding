// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// "setTimeout" is a built-in function in JavaScript. We can run the code after some specific time means delay
console.log("Hello"); // First
setTimeout(() => {
    console.log("World!"); // After 2 sec
}, 2000);
// "setTimeout" function takes a callback function and delay argument.
// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("One"); // this line will go into the call stack 
setTimeout(() => {
    console.log("Three"); // the setTimeout function will go to the node API even though this setTimeout function has 0 dalay but
    // the sequence will be this 
    //One
    //Two
    //Three
}, 0);
// When node API resolve this function it will transfer this function to queue event Loop checks if the call stack is empty it will transfer into the call stack then this callback executed
console.log("Two");
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
export {};
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
