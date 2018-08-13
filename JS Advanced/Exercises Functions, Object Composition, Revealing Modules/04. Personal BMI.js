function solve( name, age, weight, height) {

    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    let statusA;

    if (bmi < 18.5){
        statusA = 'underweight'
    } else if  (bmi < 25) { 
        statusA = 'normal' 
    } else if  (bmi < 30){  
        statusA ='overweight' 
    } else  {
        statusA = 'obese'  
    }
    let patient = {
        name: name,
        personalInfo: { 
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: statusA
    }

    if (statusA === 'obese'){
        patient['recomendation'] = 'admission required'
    }
    return patient;
}


console.log(solve('Kotooshu', 33, 152, 203));





