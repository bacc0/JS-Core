/*
______________SOLUTION ONE____________________
(function() {
    function Qustion( qustion, answers, correct ) {
        this.qustion = qustion;
        this.answers = answers;
        this.correct = correct;
    };
    
    Qustion.prototype.displayQuestion = function() {
        console.log(this.qustion);
    
        for (let i = 0; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`);
        }
    }
    Qustion.prototype.checkAnswer = function(ans){
        if(ans === this.correct){
            alert('Correct Answer');
        } else {
            console.log('Wrong Answer');
        }
    }
    
    let q1 = new Qustion('Is Javascript the coolerst programming lenguage in the world?',
    ['Yes', 'No', "I don't know!"],
    0);
    
    let q2 = new Qustion("What is the name of this course's teacher?" ,
    ['John', 'Michael', 'Jonas'],
    2);
    
    let q3 = new Qustion("What dose best describe coding?" ,
    ['Boring', 'hard', 'Fun', 'Tedious'],
    2);
    
    
    let questions = [q1, q2, q3];
    
    let rand = Math.floor(Math.random() * questions.length);
    
    questions[rand].displayQuestion();
    
    let answer = parseInt(prompt('Please select the corect answer!'));
    
    questions[rand].checkAnswer(answer);
})();
______________SOLUTION TWO____________________
*/




(function() {
    function Qustion( qustion, answers, correct ) {
        this.qustion = qustion;
        this.answers = answers;
        this.correct = correct;
    };
    
    Qustion.prototype.displayQuestion = function() {
        console.log(this.qustion);
    
        for (let i = 0; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`);
        }
    }
    
    Qustion.prototype.checkAnswer = 
        function(ans, callback){

        let sc;

        if(ans === this.correct){

            alert('Correct Answer');

            sc = callback(true);

        } else {

            console.log('Wrong Answer');
            
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    
    Qustion.prototype.displayScore = function(score){
        console.log(`Your current score is ${score}-------------------------------------`);
    }


    let q1 = new Qustion('Is Javascript the coolerst programming lenguage in the world?',
    ['Yes', 'No', "I don't know!"],
    0);
    
    let q2 = new Qustion("What is the name of this course's teacher?" ,
    ['John', 'Michael', 'Jonas'],
    2);
    
    let q3 = new Qustion("What dose best describe coding?" ,
    ['Boring', 'hard', 'Fun', 'Tedious'],
    2);
    
    let questions = [q1, q2, q3];

    function score() {
        let sc = 0;
        return function ( correct ) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    let keepScore = score();

    
    function nextQuestion() {
    
        let rand = Math.floor(Math.random() * questions.length);
        
        questions[rand].displayQuestion();
        
        let answer = prompt('Please select the corect answer!');
        
        if (answer !== 'exit') {

            questions[rand].checkAnswer( parseInt(answer), keepScore);
            
            nextQuestion(); 
        }
    }
    nextQuestion();
})();
