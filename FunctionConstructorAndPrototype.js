// Function Constructor (Blueprint)
var Person = function (name, yearOfBirth, sex) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.sex = sex;
    //console.log(this);
}

// Person instances
var jane = new Person('jane smith', 1990, 'female');
var john = new Person('john smith', 1985, 'male');
var jude = new Person('jude law', 1980, 'male');

// print the data
console.log(Person);
console.log(jane, john, jude);


// Function Prototyping
Person.prototype.calculateAge = function () {
    this.age = 2020 - this.yearOfBirth;
}


// check the prototype result
jane.calculateAge();
john.calculateAge();   
