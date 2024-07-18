// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.


// Make a variable named with "promise" create an instance with "new" keyword and create a "Promise"
let promise = new Promise((resolve) => {
    // Using setTimeout() function for delay 
    setTimeout(() => {
        // resolve parameter store the value of Promise when it's fulfilled
        resolve("Hello World!");
    }, 2000)
})

promise
    .then((value) => {
        console.log(value)
    })




// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let thenCatch = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve parameter stores the value of Promise when it's fulfilled
        resolve("Hello World!");
        // reject parameter stores the value of Promise when it's rejected
        reject("Error");

    }, 2000)
})

thenCatch
// .then method handles the value of resolve 
    .then((value) => {
        console.log(value)
    })
    // .catch handles rejects
    .catch((val) => {
      console.log(val);  
    })

// Question 144: Explain the use of the Promise.all() method with an example.

let promise1 = Promise.resolve(11);
let promise2 = 33;
let promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "I am a Promise");
});


// Promise.all() 

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    // It will wait for result of these promises then prints all promises in an array  
})
