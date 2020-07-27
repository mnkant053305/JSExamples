// hoisting functions and variables


// functions
console.log(calculateAge(1988)); // execution context - execution phase

function calculateAge(year) { // global context - VO creation phase
    return 2020- year;        // execution context - execution phase
}

console.log(calculateAge(1988));  // execution context - execution phase
//console.log(calcAge(1989));       // execution context - execution phase

var calcAge = function(year) {  // global context
    return 2020-year;           // execution context - execution phase
}

console.log(calcAge(1989)); // execution context - execution phase


console.log(age);
var age = 30;
console.log(age);
