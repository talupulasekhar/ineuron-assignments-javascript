"use strict"
const prompt = require("prompt-sync")();

let inputNum =  prompt("Enter number ::: ", "1") ;
let noOfmatchHouses=Number(inputNum)
if(noOfmatchHouses<=0){
   console.log("Enter positive Number")
   process.exit(1)
}


function matchHouses(n){
    let num=1 
    if(n>1)
        num=(n*6)-(n-1)
             
    console.log(`number of matchSticks required is :::: ${num}`)
}

matchHouses(noOfmatchHouses)

