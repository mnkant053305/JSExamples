// Primitives store the value within itself
var a = 30;
var b = a;
a = 45;
console.log(a, b);

// Objects use reference to actual place in memory
var obj1 = {
    name: 'John',
    age: 29
};

var obj2 = obj1;
obj1.age = 35;
console.log(obj1, obj2);


function change(a,obj){
    a = 55;
    obj.age= 50;
}

change(a,obj1);
console.log(obj1, obj2);

