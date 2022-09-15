"use strict"

let noOfLinesToBePrinted=5;
let n="";
let maxValueOfJ=0
let num=1

for(let i=1;i<=noOfLinesToBePrinted;i=i+1){
    //for(let j=maxValueOfJ+1;j<=i;j++){
    for(let j=1;j<=i;j++){
        n=n+" "+num
        //maxValueOfJ=j  
        num=num+1;    
    }
    console.log(n)
    n=""
}




