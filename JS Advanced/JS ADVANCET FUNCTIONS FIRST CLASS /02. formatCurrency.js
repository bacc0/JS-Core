function formatCurrency( separator, symbol, symbolFirst, value ) {
    
    let result = Math.trunc(value) + separator;

    result += value.toFixed(2).substr(-2, 2);

    if(symbolFirst) return symbol + ' ' + result;

    else return result + ' ' + symbol;
}
console.log(formatCurrency(',', 'лв', false, 1.60))
console.log(formatCurrency('.', '€', false, 1200))
console.log(formatCurrency(',', '$', true, 1.66544))