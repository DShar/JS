function doSecondTask(){
    console.log('№2');
  
    for(let i=0; i<8; i++){  //номер строки
  
      let row = '';
  
      for(let j=0; j<8; j++){  //номер столбца
          if(i%2 == 0){
            (j%2 == 0) ? row +="#" : row +=' ';
          }
          else{
            (j%2 == 0) ? row +=' ' : row +='#';
          }
      }
      console.log(row);
    }

    console.log('\n\r');
  }

  doSecondTask();