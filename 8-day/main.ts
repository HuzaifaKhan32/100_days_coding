// Question 30: Hello Admin: Greet users differently, especially 'admin'

let loggedUsers: string[] = ["Huzaifa", "Nadeem", "Admin", "Iqbal", "Ranveer"];

for (let user of loggedUsers) {
    if (user == "Admin") {
        console.log(`Hello ${user}, would you like to do some changes `);
    } else {
        console.log(`Hello ${user}, Thank you for logged in`);
    }
}










// Question 31: No Users: Ensure your user list isn’t empty.
let emptyLoggedUsers: string[] = [];

if (emptyLoggedUsers.length === 0) {
    console.log(`List is empty `);
} else {
    console.log("Thank you for logged in")
}








// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let usersList: string[] = ["Huzaifa", "Nadeem", "Admin", "Iqbal", "Ranveer"];

let newUser: string[] = ["Iqbal", "Rafiq", "Shafiq", "maRtoub"];

newUser.forEach((nUser) => {
    if (usersList.some((currentUser) => currentUser.toLowerCase() === nUser.toLowerCase())) {
        console.log(`Sorry! This Username is not available.`);
    } else {
        console.log("Username is available");
    }

})

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes

for(let i = 1; i <= 10; i++){
    if(i == 1){
        console.log(`${i}st`);
    }else if(i == 2){
        console.log(`${i}nd`);
    }else if(i == 3){
        console.log(`${i}rd`);
    }else{
        console.log(`${i}th`);
    }
}