function n(arr) {
    
    let matrix = [];

    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i]
              .split(' ')
              .map(Number));
    }
    let diagonalOne = 0;
    let diagonalTwo = 0;

    for (let i = 0; i < matrix.length; i++) {

        diagonalOne += Number(matrix[i][i]);
        diagonalTwo += Number(matrix[i][matrix.length - 1 - i]);
    }
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            
            if ( j !== matrix[i].length - 1 - i && 
                 j !== i ) {
                 matrix[i][j] = diagonalOne;
            }
        }
    }
    let result = matrix.map(row => row
                       .join(' '))
                       .join('\n');
    console.log(result);
}

n([ '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

n(['1 1 1',
   '1 1 1',
   '1 1 0']);