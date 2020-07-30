// Prototyping using Object.create function

var personInfo = {
    calculateAge: function () {
        return 2020 - this.yearOfBirth;
    }
};

// Inherit prototype using Object.create

var john = Object.create(personInfo);
john.name = 'John Smith';
john.yearOfBirth = 1989;
john.age = john.calculateAge();

// print john information to the console
console.log(john);


// another way of using Object.create function

var jane = Object.create(personInfo, {
    name: { value: 'Jane Smith' },
    yearOfBirth: { value: 1995 },
})

jane.age = jane.calculateAge();

// print jane information to the console.
console.log(jane);
