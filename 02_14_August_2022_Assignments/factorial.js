"use strict"
const prompt = require("prompt-sync")();


let inputNum =  prompt("Enter number ::: ", "1") ;
let num=Number(inputNum)


if(isNaN(num))
    console.log("please enter valid number")
else {
    let factorial=1
        for(let i=num;i>1;i=i-1){
               factorial=factorial*i
        }

    console.log(` factorial of number ${num} is ${factorial}`)
}
