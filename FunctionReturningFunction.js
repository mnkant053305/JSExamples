var interviewQuestion = function (job) {

    switch (job) {
        case 'teacher':
            return function (name) {
                console.log('What subject do you teach ' + name + '?');
            }
        case 'driver':
            return function (name) {
                console.log('What car do you drive ' + name + '?');
            }
        default:
            return function (name) {
                console.log('What do you do ' + name + '?');
            }
    }
}

var jane = interviewQuestion('teacher');
jane('Jane');
var john = interviewQuestion('driver');
john('John');
interviewQuestion('programmer')('Mike');
