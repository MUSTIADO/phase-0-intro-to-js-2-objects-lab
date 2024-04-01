
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"

}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {
        ...employee,
        [key]: value
    };
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
console.log(updatedEmployee); // { name: "Sam", streetAddress: "11 Broadway" }

console.log(employee); // Original employee object remains unchanged

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(employee); // { name: "Sam", streetAddress: "12 Broadway" }

updatedEmployee = deleteFromEmployeeByKey(employee, "name");
console.log(updatedEmployee); // { streetAddress: "12 Broadway" }

console.log(employee); // Original employee object remains unchanged

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(employee); // { name: "Sam" }
