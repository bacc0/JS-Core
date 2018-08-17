function interviewQuestions( job ) {
    return function( name ) {
        if (job === 'teacher'){
            console.log(`What subject do you teach, ${name}.`);
        } else if (job === 'designer') {
            console.log(`${name}, can you please explain what UX design is?`);
        } else {
            console.log(`Hello ${name}, what do you do for leaving?`);
        }
    }
}

interviewQuestions('teacher')('John');
interviewQuestions('designer')('Jame');
interviewQuestions('singer')('Mark');