import Employee from "./Employee.js";

function main() {
  let employees = new Array();
  employees = initEmployees(employees);
  outputEmployees(employees);

  inputEmployees(employees);
  outputEmployees(employees);
}

function outputEmployees(employeeList) {
  console.log("List of employees is: ");
  employeeList.forEach((e) => console.log(e));
}

function initEmployees(employeeList) {
  let firstEmployee = new Employee(1, "Ty", 500, 50);
  let sencondEmployee = new Employee(2, "kkk", 550, 55);
  let thirdEmployee = new Employee(3, "meo", 450, 45);
  let fouthEmployee = new Employee(4, "cho", 600, 60);
  let fifthEmployee = new Employee(5, "bo", 650, 65);

  employeeList.push(firstEmployee);
  employeeList.push(sencondEmployee);
  employeeList.push(thirdEmployee);
  employeeList.push(fouthEmployee);
  employeeList.push(fifthEmployee);
  return employeeList;
}

function inputEmployee(idx) {
  let id = idx + 1;
  let fullName = prompt(`Enter employees[${id}] full name: `);
  let baseSalary = Number(prompt(`Enter employees[${id}] base salary: `));
  let productSalary = 50;
  let productQuantity = Number(
    prompt(`Enter employees[${id}] product quantity: `)
  );
  return { id, fullName, baseSalary, productSalary, productQuantity };
}

function inputEmployees(employeeList) {
  let n = Number(prompt("Enter number of employees: "));
  let nextIdx = employeeList.length;

  for (let i = 0; i < n; i++) {
    let newEmployee = inputEmployee(i + nextIdx);
    employeeList.push(newEmployee);
  }
}

main();
