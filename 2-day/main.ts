let personName : string = "huzaifa nadeem";
console.log(`Hello ${personName}, would you like to some python today`); 






let titleCase = personName.split(" ").map((x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()).join(' ');
console.log(titleCase);

let upperCase = personName.toUpperCase();
console.log(upperCase);

let toLowerCase = personName.toLowerCase();
console.log(toLowerCase);





let author : string = "Albert Einstein";
let quote : string = "If you can't explain it simply, You can't understand it well enough";

console.log(`${author} said, ${quote}`);