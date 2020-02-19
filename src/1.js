function doFirstTask(){
    console.log('1');

    var output = "#";
    for(let i=0; i<7; i++){
        console.log(output);
        let newLength = output.length + 1;
        output = output.padEnd(newLength, "#");
    }
    
    console.log('\n\r');
}

doFirstTask();