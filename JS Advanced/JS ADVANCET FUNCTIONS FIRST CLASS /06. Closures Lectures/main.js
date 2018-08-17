
function retirement (retirementAge) {

    let a =' years left until retirement.';

    return function (yearOfBirth) {
        let age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a );
    }
}

//    retirementUs = retirement(66);  // USA
//    retirementEu = retirement(65);  // EUROPE
//    retirementIseland = retirement(67);  // ISELAND


retirement(66)(1990)  // USA        ->  40
retirement(65)(1990)  // EUROPE     ->  39
retirement(67)(1990)  // ISELAND    ->  41