// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function checkDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("No Found");
            break;
    }
}
checkDay(7);
// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function checkSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("No Found");
            break;
    }
}
checkSeason(12);
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluatesDefault(age) {
    switch (age) {
        case 25:
            console.log("Adult");
            break;
        default:
            console.log("Teenager");
            break;
    }
}
evaluatesDefault(17);
export {};
