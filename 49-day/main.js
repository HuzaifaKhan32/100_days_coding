// function counting() {
//     for(let i = 1; i <= 5; i++){
//         let str = "";
//         for(let j = 1; j <= i; j++){
//             str += i;
//         }
//         console.log(str)
//     }
// }
// counting();
// function stars(){
//     let str = ""
//     for(let i = 1; i <= 10; i++){
//         str += "*"
//         console.log(str);
//     }
// }
// stars();
class Employee {
    employeeId;
    employeeName;
    employeeSalary;
    constructor(employeeId, employeeName, employeeSalary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }
    getEmployeeSalary(sal) {
        if (sal === this.employeeSalary) {
            console.log(`\n\t\t\tName: ${this.employeeName} \n\t\t\tId: ${this.employeeId} \n\t\t\tSalary: ${this.employeeSalary}`);
        }
    }
}
let listOfEmployees = [];
function createEmployees(employeeId, employeeName, employeeSalary) {
    let employee = new Employee(employeeId, employeeName, employeeSalary);
    listOfEmployees.push(employee);
}
// console.log(employee);
createEmployees(1, "Huzaifa Khan", 3000);
createEmployees(1, "Huzaifa Khan", 3000);
createEmployees(1, "Huzaifa Khan", 3000);
createEmployees(1, "Huzaifa Khan", 3000);
createEmployees(1, "Huzaifa Khan", 3000);
createEmployees(1, "Huzaifa Khan", 3000);
console.log(listOfEmployees);
export {};
