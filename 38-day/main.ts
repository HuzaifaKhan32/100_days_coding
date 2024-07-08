// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

let obj = {
    name : "Huzaifa",
    logName : function (){
        console.log(this.name);
    }
}

obj.logName();




// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// changing variable name for avoiding an assignablity error
let obj1 = {
    name : "Huzaifa",
    age : 18,
    logName : function (){
        console.log(this.name);
        console.log(this.age);
    }
}

obj1.logName();


// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

let demonstrate = {
    name : "Huzaifa",
    outerFunction : function (){
        console.log(this.name);


        let innerFunction = () => {
            console.log(this.name);
        }
        innerFunction();
    }
}

demonstrate.outerFunction()