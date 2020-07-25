var jsVarTypes = ['String', 25, true, , null]; // null is an object as well
for (var i = 0; i < jsVarTypes.length; i++) {
    if (i === 0) {
        console.log('JavaScript Variable Types:');
    }
    console.log(typeof jsVarTypes[i]);
}
