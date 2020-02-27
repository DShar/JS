function deepEqual(obj1, obj2){
    let result;
    if(obj1 != null && (typeof obj1) == "object" && obj2 != null && (typeof obj2) == "object"){
            for (var i in obj1){
                if(obj2.hasOwnProperty(i)){
                    result = deepEqual(obj1[i], obj2[i]);
                    if(result == false){
                        return result;
                    }
                }
                else{
                    return false;
                }
            }
    }
    else
    {
         result = obj1 === obj2;   
    }

    return result;
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {here: {is: "a"}, object: 2}));

