// scoping chains

var age = 25;

function getAge(){
    var age = 60;
    console.log('Inside getAge() function : ' + age);
    scoping1();
    function scoping1(){
        var temp = 25;
        console.log('Inside scoping1() function : ' + temp + age);
    }
}

getAge();
console.log(age);

scoping2();
function scoping2(){
    var temp = 25;
    getAge();
    console.log('Inside scoping2() function : ' + temp + age);
}
