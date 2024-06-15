// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby
function myHobbies(...hobbies : string[]){
    for(let hobby of hobbies){
        console.log(`I really enjoy to ${hobby}`);
    }
}
myHobbies("play Cricket", "do coding");
myHobbies("play football", "do cycling");



















// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

console.log(`
            My ideal day would involve:
             1. Waking up early and read a book
             2. Do coding
             3. Offering 5 prayers of a day
`);













//  Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function findingArea(width : number, height : number){
    return width * height;
}

let area = (width : number, height : number ) => width * height
console.log(area(10, 13));
console.log(findingArea(10, 13));

