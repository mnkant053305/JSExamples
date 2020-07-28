function returnRandomNumber() {
    return Math.floor(Math.random() * 10);
}

var temp = returnRandomNumber(); // intialize temp variable
while (temp != 0) { // exit while loop when temp == 0
    console.log(temp); // print random number
    temp = returnRandomNumber(); // refresh temp variable to check the while condition
    if (temp == 0) {
        console.log('Found 0! Exiting while loop'); // check when temp == 0 to exit loop condition
    }
}
