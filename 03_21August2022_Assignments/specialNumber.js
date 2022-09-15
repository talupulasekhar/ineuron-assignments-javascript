"use strict"
const prompt = require("prompt-sync")();

let inputNum =  prompt("Enter number ::: ", "1") ;
let num=Number(inputNum)
if(num<0){
   console.log("Enter positive Number")
   process.exit(1)
}


function fact(n){
    let factorial=1
    for(let i=n;i>1;i=i-1){
           factorial=factorial*i
    }
    return factorial
}


function specialNumber(n){
    return n.split("").reduce((acc,x) => acc+(fact(x)),0)
}


let result=specialNumber(num.toString())
if(num == result)
    console.log(`${num} is special number`)
else
console.log(`${num} is not special number`)




