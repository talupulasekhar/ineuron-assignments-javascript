"use strict"

const prompt = require("prompt-sync")();
let s =  Number(prompt("Enter number ::: ", "1")) ;
let counter=0                                                                                                                                  

if (s<0 || isNaN(s))
    console.log(`enter value greater than 0`) 
else if( s==0 || s==1) 
    console.log(`${s} is not primenumber`)
else
    identifyPrimeNumber(s)

function identifyPrimeNumber(num) {
    for(let i=2 ; i<num ; i=i+1){
        if(num%i == 0){  
            counter=counter+1      
            break;
        }
    }

    counter==0 ? console.log(`${s} is prime number`) : console.log(`${s} is not prime number`)
}




