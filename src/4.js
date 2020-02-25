function range(start, end, step){
    let arr = [];

    if(isNaN(start) || isNaN(end) ){
        console.log("Arguments are numbers");
        return;
    }

    if((start > end && (step > 0 || step == undefined))
        ||(start < end && step < 0)){
        let temp = start;
        start = end;
        end = temp;
    }


    if (step < 0) {
        for (let i = start; i > end - 1; i += step) {
          arr.push(i);
        }
      } else {
        for (let i = start; i <= end; (step == undefined) ? i++ : i += step) {
          arr.push(i);
        }
      }

    return arr;
}

function sum(arr){
    let sum = 0;

    for(let item of arr){
        sum += item;
    }

    return sum;
}

console.log(range(3,7));
console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(range("7","2"));
console.log(range("dwdw",""));