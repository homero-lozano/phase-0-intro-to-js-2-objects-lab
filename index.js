const employee = {name: "Nico", streetAddress: "123 apple"} 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value 
    return newEmployee
}

const myObject = {name:"Mike", streetAddress:"456 link"}


console.log(updateEmployeeWithKeyAndValue(myObject, "streetAddress", "123 Broadway"))
console.log(myObject) 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
     const newEmployee = {...employee}
     delete newEmployee[key]
     return newEmployee 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
    return employee 
}
