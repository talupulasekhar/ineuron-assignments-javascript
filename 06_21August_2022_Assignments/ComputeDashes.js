"use strict"

const prompt = require("prompt-sync")();

let input =  prompt("Enter array elements  ::: ", "123") ;
console.log("input value is ::: " + input)
let num = input.split("")

let res=""
for(let i=0;i<num.length;i=i+1){
    if(num[i]%2==0 && num[i+1]%2==0)
            res=res+num[i]+"-"
    else
            res=res+num[i]        
}

console.log("dashed string ::: "+res)

