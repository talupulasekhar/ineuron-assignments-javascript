"use strict"
const prompt = require("prompt-sync")();

let inputTemp =  prompt("Enter temparature ::: ", "1") ;
let temp=Number(inputTemp)

if(isNaN(temp))
    console.log("please enter valid number")
else{    
    console.log("please choose CelciusToFarenheit or FarenheitToCelcius")
    let inputConversion =  prompt("Enter conversion type :::  ", "CelciusToFarenheit") ;
    
    if (inputConversion === "CelciusToFarenheit")
            CelciusToFarenheit(temp)
    else 
            FarenheitToCelcius(temp)
}

function CelciusToFarenheit(ip){
    console.log((ip*1.8)+32)    
}
   
function FarenheitToCelcius(ip){
       console.log((ip-32)*0.5556)
}
