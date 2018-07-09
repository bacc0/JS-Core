function twoSmallerNum(arr) {
    let result = arr.sort((a, b) => a - b);
    return result[0] + ' ' + result[1];
}

console.log(twoSmallerNum([30, 15, 50, 5]));