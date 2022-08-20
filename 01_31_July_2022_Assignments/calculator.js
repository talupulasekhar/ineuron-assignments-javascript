"use strict"
const prompt = require("prompt-sync")();
let a =  Number(prompt("Enter first number ::: ", "1")) ;
let b =  Number(prompt("Enter first number ::: ", "1")) ;
let operator = prompt("Enter operator +,-,*,% ::: ", "+")


let result 
switch(operator) {
    case "+":
         console.log(` addition is  ` + (a+b));
         break;
    case "-":
          console.log(` substrction is  ` + (a-b));
          break;         
    case "*":
          console.log(` multiplication is  ` + (a*b));
          break;
    case "/":
           console.log(` divison is  ` + (a/b));
           break; 
    case "%":
            console.log(` modulus is  ` + (a%b));
            break;  
    default:
           "enter + , - , * , / , % as operator ";                                        

}
