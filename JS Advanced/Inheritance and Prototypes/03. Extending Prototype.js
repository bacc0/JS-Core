function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject
        }
        toString() {
            let parentToString = super.toString().slice(0, -1)
            return parentToString + `, subject: ${this.subject})`
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course
        }
        toString() {
            let parentToString = super.toString().slice(0, -1)
            return parentToString + `, course: ${this.course})`
        }
    }


    return {
            Person,
            Teacher,
            Student
    }
}

let result = solve()
let Person = result.Person
let Teacher = result.Teacher
let Student = result.Student

function extendPrototype (cla) {
    cla.prototype.species = 'Human'
    cla.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ` + this.toString()
    }
}

let t = new Teacher('Pesho', 'test@mail.com', 'JS')

extendPrototype(Teacher)

console.log(t.toSpeciesString());

