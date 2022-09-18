"use strict"

const prompt = require("prompt-sync")();
let dimensions =  Number(prompt("Enter side of square ::: ", "5"));

class Rectangle{
    constructor(length,breadth){
      this.length=length;
      this.breadth=breadth;
    }

    area(){
        return this.length*this.breadth
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
    }
}

let sqre=new Square(dimensions)
console.log("are of square is ::: "+sqre.area())
