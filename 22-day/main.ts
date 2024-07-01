function declareAndUpdate(): void {
    let initialValue = "initial";
    console.log(initialValue);
    initialValue = "udated";
    console.log(initialValue);
}

declareAndUpdate();

function swapValues(): void {
    let a = 5, b = 10;
    console.log(`Values Before Swapping: a = ${a}, b = ${b}`);
    let swap = a
    a = b;
    b = swap;
    console.log(`Values After Swapping: a = ${a}, b = ${b}`);
}

swapValues();

function compundAssignmentOperator() {
    let x = 2;
    console.log(x);
    x += 2;
    console.log("Adition", x);
    x -= 2;

    console.log("Subtraction", x);
    x *= 2;
    console.log("Multiplication", x);
    x /= 2;
    console.log("Divison", x);

}
compundAssignmentOperator();