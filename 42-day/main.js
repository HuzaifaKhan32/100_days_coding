// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i} and value of i is: ${i}`);
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// in this try block, the function isn't defined so the catch block will be executed.
try {
    nonExistFunction();
}
catch (error) {
    console.log("error");
}
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
function order(callback) {
    console.log("Ordering Burger...");
    setTimeout(() => {
        console.log("Burgers are Ready!");
        callback();
    }, 5 * 1000);
}
function Rider(callback) {
    console.log("Searching the rider...");
    setTimeout(() => {
        console.log("Rider confirms the order!");
        callback();
    }, 2 * 1000);
}
function travelling(callback) {
    console.log("Rider is travelling...");
    setTimeout(() => {
        console.log("Rider delivered the order!");
        callback();
    }, 2 * 1000);
}
function enjoy() {
    setTimeout(() => {
        console.log("Enjoy the meal");
    }, 1 * 1000);
}
order(() => {
    Rider(() => {
        travelling(() => {
            enjoy();
        });
    });
});
export {};
