function solve(input) {

    let matrix = input;

    let horizont1 = 0;
    let horizont2 = 0;
    let horizont = 0;


    let vertical = 0;

    for (let i = 0; i < matrix[0].length - 1; i++) {

        for (let j = 0; j < matrix[0].length; j++) {
            horizont1 += matrix[i][j];
            horizont2 += matrix[i + 1][j];
        }
        if ( horizont1 !==  horizont2) {
            console.log('hhhhhh')
        } else {
            horizont = horizont1; 
            console.log(horizont);
        }
    }
    



}

solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]);

// solve([[11, 32, 45],
//        [21,  0, 1],
//        [21,  1, 1]]);

// solve([[1, 0, 0],
//        [0, 0, 1],
//        [0, 1, 0]]);       

