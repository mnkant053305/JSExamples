// function declaration and function definition.

// function statement and function definition.
function calcAge(yearOfBirth) {
    var currYear = new Date().getFullYear();
    console.log(currYear - yearOfBirth);
}

// function expression and function definition.
var calcMyAge = function (yearOfBirth) {
    var currYear = new Date().getFullYear();
    return currYear - yearOfBirth;
}



console.log(calcAge(1988));
console.log(calcMyAge(1989));

console.log(function () {
    var currYear = new Date().getFullYear();
    return currYear - 1987;
});
