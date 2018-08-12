function reduce(arr, func) { 

    let result = arr[0];

    for(nextElement of arr.slice(1)){
        result = func(result, nextElement)
    }
    return result;
}

console.log(reduce(['3', '4', '5', '6'] , (x, y)=> Number(x) + Number(y)));