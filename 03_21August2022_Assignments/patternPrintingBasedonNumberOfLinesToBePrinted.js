"use strict"
const prompt = require("prompt-sync")();

let inputNum =  prompt("Enter number ::: ", "1") ;
let noOfLinesToBePrinted=Number(inputNum)
if(noOfLinesToBePrinted<0){
   console.log("Enter positive Number")
   process.exit(1)
}


let str="";      // str is the string to be printed in each iteration
let num=1       // num is the number generated to print

for(let i=1;i<=noOfLinesToBePrinted;i=i+1){      // for loop to determine no of lines to be printed
    for(let j=1;j<=i;j++){      // for loop to determine no of elements to be present in each line
        str=str+" "+num
        num=num+1;    
    }
    console.log(str)
    str=""
}



