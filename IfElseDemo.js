var listOfMaleEmployees, listOfFemaleEmployees;
listOfMaleEmployees = []; // assign empty array
listOfFemaleEmployees = [];

// function to fill in the list of male employees array
function appendListOfMaleEmployees(name) {
    listOfMaleEmployees.push(name);
}

// function to fill in the list of female employees array
function appendListOfFemaleEmployees(name) {
    listOfFemaleEmployees.push(name);
}

// alert the user to submit the employee details
window.alert('Please submit the employee details.');

function getEmployeeDetails() {
    var name = window.prompt('Enter Employee Name:'); // get the employee name
    var sex = window.prompt('Enter Employee Sex (Male | Female'); // get the sex of the employee
    if (sex.toLowerCase() == 'male') {
        appendListOfMaleEmployees(name); // append male employees to array list
    } else {
        appendListOfFemaleEmployees(name) // append female employees to array list
    }
}

var continueVar = 1;

while (continueVar == 1) {
    // iterate to fill in the employee details
    getEmployeeDetails();
    continueVar = window.prompt('Press 1 if you want to contine to sumbit employee data.\nElse Press any other key.') //exit loop when continue variable equals 1

}

var option = window.prompt('Press 1 to diplay the list of male employees.\nElse Press 2 to display the list of female employees.');
if (option == 1) {
    //console.log(listOfMaleEmployees);
    window.alert(listOfMaleEmployees); // display list of male employees
}
else {
    //console.log(listOfFemaleEmployees);
    window.alert(listOfFemaleEmployees); // display list of female employees
}
