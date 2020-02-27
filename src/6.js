function concatArray(arr){
    
    return arr.reduce(function(accumulator, currentValue){
        if(Array.isArray(currentValue)){
            return accumulator.concat(concatArray(currentValue));
        }
        else
        {
            return accumulator.concat(currentValue);
        }
    }, []);
}

console.log(concatArray([[1,2,3],[4,5],[6]]));
console.log(concatArray([1,2,3,4,5, [6, [7,8, [9,10,11], [12,13]]]]));
console.log(concatArray([6, [7,8,[9,10]]]));