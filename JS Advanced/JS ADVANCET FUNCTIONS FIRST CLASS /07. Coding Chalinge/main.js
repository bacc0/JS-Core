/*
______________SOLUTION ONE____________________
(function () {
        function Question(question, answers, correct) {
        this.question = question;
        this.answers  = answers;
        this.correct  = correct;
    };
    Question.prototype.questionDisplay =
        function () {
            console.log(this.question);
            for (let i = 0; i < this.answers.length; i++) {
                console.log(`${i} 🔘 ${this.answers[i]}`);
            }
        };
    Question.prototype.checkTheAnswer =
        function (answer) {
            if (answer == this.correct) {
                console.log('😀😀😀 Correct Answer 😀😀😀');
            }  else {
                console.log('💀💀💀 Wrong Answer 💀💀💀');
            }
        };
   let q1 = new Question('Is Javascript the best programming language in the world?',
                        ['Yes', 'No', "I don't know!"],
                         0); 
   let q2 = new Question('What is the name of the teacher', 
                        ['John', 'Jane', 'Johnas'], 
                         2);
   let q3 = new Question('What does best describe coding?', 
                        ['boring', 'hard', 'fun', 'tedious'], 
                         2);
    let arrQuestions = [q1, q2, q3];
    let randomNum = Math.floor(
                    Math.random() * arrQuestions.length);
        arrQuestions[randomNum].questionDisplay();    
    let answer = prompt('Please answer the question ▷ !');
        arrQuestions[randomNum].checkTheAnswer(answer); 
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
    
    Qustion.prototype.checkAnswer = function(ans, callback) {

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