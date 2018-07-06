function rounding(input) {

    let num = input[0];
    let precision = input[1];

    if ( precision > 15) {
         precision = 15;
    }

    num = num.toFixed(precision)
    console.log(Number(num));
}

rounding([3.1415926535897932384626433832795, 2]);