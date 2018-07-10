function n(input) {
    let matrix = input;

    let diagonalOne = 0;
    let diagonalTwo = 0;

    for (let i = 0; i < matrix.length; i++) {

        diagonalOne += Number(matrix[i][i]);
        diagonalTwo += Number(matrix[i][matrix.length - 1 - i]);
    }
    console.log(diagonalOne + ' ' + diagonalTwo);
}

n([ [3, 5, 17 ],
    [-1, 7, 14],
    [1, -8, 89] ]);

n([ [20, 40],
    [10, 60] ]);