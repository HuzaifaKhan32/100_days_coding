// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let now = new Date();

let hours = now.getHours();
if (hours < 12) {
    console.log("Good Morning")
} else if (hours > 12) {
    console.log("Good Afternoon")
} else if (hours > 18) {
    console.log("Good Evening");
}










// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

let student_scores: number[] = [40, 87, 92, 71, 81, 30, 56];
student_scores.forEach((score) => {
    if (score >= 80) {
        console.log(`Student get A+ Grade`)
    } else if (score >= 70 && score <= 79) {
        console.log(`Student get A Grade`)
    } else if (score >= 60 && score <= 69) {
        console.log(`Student get B Grade`)
    } else if (score >= 50 && score <= 59) {
        console.log(`Student get C Grade`)
    } else if (score >= 33 && score <= 49) {
        console.log(`Student get D Grade`)
    } else {
        console.log(`Student get F Grade`)
    }
});







// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult)

let age: number = 18;

if (age >= 18 && age >= 59) {
    console.log("You are a Adult");
} else if (age >= 13 && age <= 18) {
    console.log("You are a Teenager");
} else if (age >= 5 && age <= 12) {
    console.log("You are a Child");
} else if (age >= 2 && age <= 4) {
    console.log("You are a Toddler");
} else if (age >= 0 && age <= 1) {
    console.log("You are a Baby");
} else {
    console.log("You are a Senior");
}


