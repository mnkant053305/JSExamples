console.log('0 refers to --> ' + false);
console.log('1 refers to --> ' + true);

console.log('\n');

// logical AND Operator (&&)
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        console.log('Output of ' + i + ' && ' + j + ' : ' + (i && j));
    }
}

console.log('\n');

// logical OR Operator (||)
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        console.log('Output of ' + i + ' || ' + j + ' : ' + (i || j));
    }
}

console.log('\n');

// logical NOT Operator
for (var i = 0; i < 2; i++) {
    console.log('Output of !' + i + ' : ' + !(i));
}
