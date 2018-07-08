function point(input) {

           let x    = Number(input[0]);
           let y    = Number(input[1]);
           let xMin = Number(input[2]);
           let xMax = Number(input[3]);
           let yMin = Number(input[4]);
           let yMax = Number(input[5]);

           if ( x >= xMin && x <= xMax &&
                y >= yMin && y <= yMax ) {

<<<<<<< HEAD
               console.log('inside');

           } else
               console.log('outside');
=======
                console.log('inside');

           } else
                console.log('outside');
>>>>>>> 2d093c91fecf2f0d12b3d019b274c214c8dd8334
}

point([-1, 2, 12, -3, 3]);
