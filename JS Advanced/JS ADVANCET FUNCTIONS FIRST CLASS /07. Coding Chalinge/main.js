function Qustion( qustion, answers, correct ) {
    this.qustion = qustion;
    this.answers = answers;
    this.correct = correct;
};

Qustion.prototype.displayQuestion() {
    console.log(this.qustion)
}
   


let q1 = new Qustion('Is Javascript the coolerst programming lenguage in the world?',
['Yes', 'No'],
0);

let q2 = new Qustion("What is the name of this course's teacher?" ,
['John', 'Michael', 'Jonas'],
2);

let q3 = new Qustion("What dose best describe coding?" ,
['Boring', 'hard', 'Fun', 'Tedious'],
2);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random() * questions.length);

questions[n]