"use strict"

const prompt = require("prompt-sync")();
let s =  prompt("Enter range ::: ", "1 10") ;
let numList=s.split(" ")
let counter=0   
let sum=0


for(let num=Number(numList[0]);num<=Number(numList[1]);num=num+1){
   identifyPrimeNumber(num)
   if(counter==0){
        factorial(num)
    }
    counter=0   
}

console.log("Sum of factorials of numbers in geven interva is ::: "+sum)

function identifyPrimeNumber(num) {
    for(let i=2 ; i<num ; i=i+1){
        if(num%i == 0){  
            counter=counter+1      
            break;            
        }
    } 
}

function factorial(num){
    let factorial=1
        for(let i=num;i>1;i=i-1){
               factorial=factorial*i
        }
    console.log(`factorial of prime number ${num} is :::   ` + factorial) 
    sum=sum+factorial   
}


