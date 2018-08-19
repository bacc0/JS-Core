/*
______________SOLUTION ONE____________________


(function () {
    function Question(question, answers, correct) {

        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion =
        function () {
            console.log(this.question);
    
            for (let i = 0; i < this.answers.length; i++) {
                console.log(`${i}: ${this.answers[i]}`);
            }
        };
    
    Question.prototype.checkAnswer = 
        function (correctAnswer) {
            if (correctAnswer == this.correct){
                console.log('Correct Answer !');
            } else {
                console.log('Warong Answer :)');
            }
        }
    
    let q1 = new Question('Is Javascript the coolerst programming lenguage in the world?',['Yes', 'No', "I don't know!"],0); 
    let q2 = new Question('What is the name of the teacher', ['John', 'Jane', 'Johnas'], 2);
    let q3 = new Question('What does best describe coding?', ['boring', 'hard', 'fun', 'tediuos'], 2);
    
    let questions = [q1, q2, q3 ];
    
    let random = Math.floor(
                 Math.random() * questions.length);
    
    let currentQuestion = questions[random];
    
    
    currentQuestion.displayQuestion();
    let answer = prompt('Please corest answer');
    currentQuestion.checkAnswer(answer);
})();

______________SOLUTION TWO____________________
*/




(function() {
    function Question( question, answers, correct ) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (let i = 0; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`);
        }
    }
    
    Question.prototype.checkAnswer = 
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
    
    Question.prototype.displayScore = function(score){
        console.log(`Your current score is ${score}-------------------------------------`);
    }


    let q1 = new Question('Is Javascript the coolerst programming lenguage in the world?',
    ['Yes', 'No', "I don't know!"],
    0);
    
    let q2 = new Question("What is the name of this course's teacher?" ,
    ['John', 'Michael', 'Jonas'],
    2);
    
    let q3 = new Question("What dose best describe coding?" ,
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
