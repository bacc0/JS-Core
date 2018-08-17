
function retirement (retirementAge) {

    let x =' years left until retirement in ';
    let y =',\n the person age is ';

    return function (yearOfBirth, country) {
        let age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + x + country + y + age + '.\n');
    }
}

//    retirementUs = retirement(66);       // USA
//    retirementGer = retirement(65);      // GERMANY
//    retirementIseland = retirement(67);  // ISELAND

retirement(66)(1990, 'USA')      //  USA      ->  40
retirement(65)(1990, 'GERMANY')  //  GERMANY  ->  39
retirement(67)(1990, 'ISELAND')  //  ISELAND  ->  41