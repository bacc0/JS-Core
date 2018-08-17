// let John  = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

let Person = function(name, yearOfBirth, job, hairColor){
    this.name = name;
    this.yearOfBirth = yearOfBirth || 'not specified';
    this.job = job || 'unemployed';
    this.hairColor = hairColor || 'red (ginger)';
}


Person.prototype.calcukateAge = function(){
    console.log(2016 - this.yearOfBirth)  //add Methods
}
Person.prototype.anatomically = 'Homo sapiens (Homo Erectus)'  //add Property


let john = new Person('John', 1990, 'theacher');
let jane = new Person('Jane', 1969, 'designer', 'blond');
let mark = new Person('Mark', 1948, undefined, 'brown');
let james = new Person('James');

john.calcukateAge();
jane.calcukateAge();
mark.calcukateAge();

console.log(john.anatomically);
console.log(jane.anatomically);
console.log(mark.anatomically);

console.log('\n');

console.log(`name: ${john.name}
year of birth: ${john.yearOfBirth}
job: ${john.job}
hair color: ${john.hairColor}`);

console.log('\n');

console.log(`name: ${jane.name}
year of birth: ${jane.yearOfBirth}
job: ${jane.job}
hair color: ${jane.hairColor}`);

console.log('\n');

console.log(`name: ${mark.name}
year of birth: ${mark.yearOfBirth}
job: ${mark.job}
hair color: ${mark.hairColor}`);

console.log('\n');

console.log(`name: ${james.name}
year of birth: ${james.yearOfBirth}
job: ${james.job}
hair color: ${james.hairColor}`);



