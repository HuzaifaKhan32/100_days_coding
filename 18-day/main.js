// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
let scores = [10, 13, 34, 56, 14];
let averageScore = scores.reduce((total, score) => total + score) / scores.length;
console.log(averageScore);
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function addNumber(addValue) {
    return function specialNumber(number) {
        return addValue + number;
    };
}
let addingNumber = addNumber(7);
console.log(addingNumber(23));
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
class UserProfile {
    userName;
    email;
    age;
    constructor(id, email, age) {
        this.userName = id;
        this.email = email;
        this.age = age;
    }
    getname() {
        return this.userName;
    }
    getemail() {
        return this.email;
    }
    getage() {
        return this.age;
    }
}
let userProfile = new UserProfile("hzaifa_nadeem", "huzaifakhan@gmail.com", 18);
console.log(`User Information: Username : ${userProfile.userName}, Email: ${userProfile.email}, Age: ${userProfile.age}`);
export {};
