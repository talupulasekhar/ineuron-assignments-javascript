"use strict"
const prompt = require("prompt-sync")();

let input =  prompt("Enter length of sides of triangle ::: ", "1 2 3") ;
console.log("input value is ::: " + input)
let [a,b,c] = input.split(" ")

if (a==b && a==c)
    console.log("Given triangle is equilateral")
else if (a==b || b==c || c==a)    
    console.log("Given triangle is isosceles")
else
    console.log("Given triangle is scalene")  
    
    
