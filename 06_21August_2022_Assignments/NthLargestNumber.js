"use strict"

const prompt = require("prompt-sync")();

let input =  prompt("Enter array elements separated by space ::: ", "1 2 3") ;
console.log("input value is ::: " + input)
let num = input.split(" ")
let noOfDigits= Number(prompt("Enter no of digits ::: ", "2"))

let res = num.filter((n) => (n.length == noOfDigits )).sort((a,b) => {return b-a})
console.log(res[0])

