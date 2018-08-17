// let John  = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

let Person = function(name, yearOfBirth, job, hairColor){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.hairColor = hairColor || 'red (ginger)';
}


Person.prototype.calcukateAge = function(){
    console.log(2016 - this.yearOfBirth)  //add Methods
}
Person.prototype.anatomically = 'Homo sapiens (Homo Erectus)'  //add Property


let john = new Person('John', 1990, 'theacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

john.calcukateAge();
jane.calcukateAge();
mark.calcukateAge();

console.log(john.anatomically);
console.log(jane.anatomically);
console.log(mark.anatomically);

console.log(`name: ${john.name}
year of birth: ${john.yearOfBirth}
job: ${john.job}
hair color: ${john.hairColor}
`);



