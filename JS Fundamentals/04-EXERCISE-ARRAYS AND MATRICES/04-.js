function rotate(arr) {

    let counter = Number(arr.pop());
    counter %= arr.length;

    for (let i = 0; i < counter; i++) {

        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}



rotate(['1', '2', '3', '4', 
                       '2']);

rotate(['Banana', 'Orange', 'Coconut', 'Apple', 
                                          '15']);