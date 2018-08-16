let personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBurth)
    }
};
let john = Object.create(personProto);

    john.name ='John';
    john.yearOfBurth =1990;
    john.job ='teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane'},
        yearOfBurth: { value: 1969},
        job: { value: 'designer'}
    });
    