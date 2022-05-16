// Write your solution in this file!
const employee = {
    name: "Franklin"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
    
}

function deleteFromEmployeeByKey(employee, key) { 
    const copy =  {...employee}
    delete copy[key]
    return copy
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}