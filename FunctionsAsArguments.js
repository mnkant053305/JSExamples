// Approach 1
var calculateAge = function (birthYear) {
    var date = new Date().getFullYear();
    return parseInt(date) - birthYear;
}

//console.log(calculateAge(1989));

var yearsUntilRetirement = function (calculateAge) {
    console.log(calculateAge);
    var retirmentAge = 60;
    var yearsRetirement = retirmentAge - calculateAge;
    if (yearsRetirement >= 1)
        console.log('Years until retirement : ' + yearsRetirement);
    else
        console.log('Alread retired!');
}

yearsUntilRetirement(calculateAge(1989));
yearsUntilRetirement(calculateAge(1947));
yearsUntilRetirement(calculateAge(1950));

// Approach 2
var calcMyAge = function (birthYear){
    return 2020 - birthYear;
}

var retirementYearsLeft = function(fn) {
    console.log(fn);
    var retirmentAge = 60;
    var yearsRetirement = retirmentAge - fn(1989);
    if (yearsRetirement >= 1)
        console.log('Years until retirement : ' + yearsRetirement);
    else
        console.log('Alread retired!');
}


retirementYearsLeft(calcMyAge);
