"use strict"
const prompt = require("prompt-sync")();

let input =  prompt("Enter marks of student ::: ", "100") ;
let x = Number(input)

switch(true){
    case x>90 && x<=100 :
        console.log("S Grade");
         break;
    case x>80 && x<=90 :
        console.log("A Grade");
        break;
    case x>70 && x<=80 :
        console.log("B Grade");
        break;       
    case x>60 && x<=70 :
        console.log("C Grade");
        break;                 
    case x>50 && x<=60 :
        console.log("D Grade");
        break;                         
    case x>40 && x<=50 :
        console.log("E Grade");
        break;   
    case x>0 && x<=40 :
        console.log("Student has failed");
        break;                                        
    default :
        console.log("Invalid Marks")
}

