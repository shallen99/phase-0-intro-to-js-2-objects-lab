// Write your solution in this file!
var employee={
 name:"", streetAddress:""
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{
  ...employee,
  [key]: value,
    }
}
const newEmployee=updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
)

newEmployee.name;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
        employee[key]=value;
        return employee
    
}

function deleteFromEmployeeByKey(employee, key,value){
  return{
    ... employee,
    [key]: value,
}
}

delete employee.name;
employee();

function destructivelyDeleteFromEmployeeByKey(employee, key,){
Object.assign({}, employee);
delete employee[key];
return employee;
}

