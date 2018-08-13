function sortArray(array, orderType) {
    if(orderType === 'asc'){
        console.log(array.sort((a, b) => {
            return a - b;
        }));
    } else {
        console.log(array.sort((a, b) => {
            return b - a;
        }));
    }
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');