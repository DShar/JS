var month = (function(){

    //приватный массив
    let _months = [
        {name:"January", num: 0}, 
        {name: "February", num: 1},
        {name: "March", num: 2},
        {name: "April", num: 3}, 
        {name: "May", num: 4}, 
        {name: "June", num: 5}, 
        {name: "July", num: 6}, 
        {name: "August", num: 7}, 
        {name: "September", num: 8}, 
        {name: "October", num: 9}, 
        {name: "November", num: 10}, 
        {name: "December", num: 11}
    ];

    return {
        //публичный метод name()
        name: function(number){
            if(number >= 0 && number <=11){
                return _months[number].name;
            }
                return "Incorrect number";
        },

        //публичный метод number()
        number: function(name){
            let result = _months.find((element, index, array) => {
                if(element.name == name){
                    return true;
                }
                else{
                    return false;
                }
            });
        
            if(result != undefined){
                return result.num;
            }
            
            return "Incorrect month name";
        }
    };
})();

console.log(month.name(4));
console.log(month.number("December"));
console.log(month.number("May1"));