"use strict"
const prompt = require("prompt-sync")();

let inputNum =  prompt("Enter number ::: ", "1") ;
let num=Number(inputNum)
if(num<0){
   console.log("Enter positive Number")
   process.exit(1)
}


function armStrongNumber(n){
    return n.split("").reduce((acc,x) => acc+(x*x*x),0)
}

let result=armStrongNumber(num.toString())
if(num==result)
    console.log(`${num} is armStrongNumber`)
else
    console.log(`${num} is not armStrongNumber`)






