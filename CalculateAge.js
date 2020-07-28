var currentYear = new Date().getFullYear(); // get the current year using date function
var myBirthYear = window.prompt('Please enter your birth year : '); // ask the user to enter the year of birth

// calcuate and display age of the user
// display error in case the user inputs incorrent value.
if (parseInt(myBirthYear) && parseInt(myBirthYear) < parseInt(currentYear) && Math.sign(myBirthYear) != '-1') {
    var calcAge = currentYear - myBirthYear;
    // display age of the user
    window.alert('You are ' + calcAge + ' years old!');
} else {
    // display error message
    window.alert('Please enter a valid birth year');
}

