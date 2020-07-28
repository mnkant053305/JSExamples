var num1 = window.prompt('Please enter Number1:'); // ask user to enter number1
var num2 = window.prompt('Please enter Number2:'); // ask user to enter number2

// check if number1 is smaller than number2 or vice-versa using ternary operator and display the result
(parseInt(num1) < parseInt(num2)) ? window.alert('Number1 ' + num1 + ' is smaller than Number2 ' + num2) :
    window.alert('Number2 ' + num2 + ' is smaller than Number1 ' + num1);
