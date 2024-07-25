// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i} and value of i is: ${i}`);
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// in this try block, the function isn't defined so the catch block will be executed.
try {
    // nonExistFunction(); // Error
}
catch (error) {
    console.log("error");
}
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
export {};
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
