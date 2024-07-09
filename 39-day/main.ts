// Question 127: Convert a traditional function expression to an arrow function.

function addNum (num1 : number, num2 : number){
    return num1 + num2
}

let sum = (num1 : number, num2 : number) => num1 + num2;

console.log(addNum(5, 5));
console.log(sum(5, 5));




// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

let numbersProduct = (...numbers : number[]) => numbers.reduce((total, number) => total * number, 1);
console.log(numbersProduct(5,5,5));





// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

let obj = {
    value : "Huzaifa",
    traditionalFunc : function (){
        console.log(`My name is ${this.value}`)
    },
    arrowFunc : () => console.log(`My name is ${this.value}`)

}

obj.arrowFunc();
obj.traditionalFunc();