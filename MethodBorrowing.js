var john = {                            // object 
    fullName: 'John Smith',             // properties
    job: 'teacher',
    birthYear: 1989,
    calculateAge: function () {        // methods
        console.log(this);
        this.age = 2020 - this.birthYear;
    }
}



var jane = {                            // object 
    fullName: 'Jane Smith',             // properties
    job: 'Engineer',
    birthYear: 1994,
}

john.calculateAge();

// method borrowing
jane.calculateAge = john.calculateAge;

jane.calculateAge();
console.log(john, jane);
