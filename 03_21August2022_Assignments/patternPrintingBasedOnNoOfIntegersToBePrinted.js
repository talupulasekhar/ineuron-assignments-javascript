"use strict"

let num=50
let n =""
let line=1

for(let i=1;i<=num;i=i+1){ // purpose of this for loop is to generate numbers 
  //n=i;
  //n=n+" "+i;
  let k=0;
    for(let j=1;j<=line;j++){ //  purpose of this for loop is to generate numbers to be printed in each line
      if(i<num){
        if(k==0){
          i=i
          k=k+1
        }
        else{
          i=i+1
        }
        //n=n+" "+(i+j)
        n=n+" "+i
      }
      else{
        break;
      }
    }

    console.log(n)
    n=""
    line=line+1    
}


