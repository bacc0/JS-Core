function bigThreNums( input ) {
    
    let theBiggerNum = Math.max( Number(input[0]), 
                                 Number(input[1]), 
                                 Number(input[2]) );

    console.log(theBiggerNum);
}

bigThreNums([-1, 2, 12, -3, 3]);