"use strict"
const prompt = require("prompt-sync")();

let sumOfNumbers=0
for(let num=1;num<=1000;num=num+1){
  //if(num%3==0 && num%5==0){          // if logic to findout if a number  multiple of both 3 and 5
      if(num%3==0 || num%5==0){    // if logic to findout if a number  multiple of either 3 or 5
        // console.log(num);
        sumOfNumbers=sumOfNumbers+num;
   }
}
console.log("Sum of multiples of 3 and 5 is :::  "+sumOfNumbers)

