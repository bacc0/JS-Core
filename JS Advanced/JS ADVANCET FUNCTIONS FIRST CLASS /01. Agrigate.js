function agrigate( arr ) {

    function reduce( arr, func ) {
        let result = arr[0];
        
        for (let nextElement of arr.slice(1))
            result = func (result, nextElement);
        return result;    
    }
    
}