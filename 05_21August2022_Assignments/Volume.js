"use strict"

class Cylinder{
    constructor(radius,height){
     this.radius=radius;
     this.height=height;
     this.pievalue = 22/7;
    }

    volume(){
        return (this.pievalue)*this.radius*this.radius*this.height
    }
}
let c = new Cylinder(5,6)
console.log("volume of cylinder ::  "+c.volume().toFixed(4))




class Sphere{
    constructor(radius){
     this.radius=radius;
     this.pievalue = 22/7;
    }

    volume(){
        return (4/3)*(this.pievalue)*this.radius*this.radius*this.radius
    }
}
let s = new Sphere(5)
console.log("volume of Sphere is ::  "+s.volume().toFixed(4))



class Cone{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
        this.pievalue = 22/7;
       }
   
       volume(){
           return (this.pievalue)*this.radius*this.radius*(this.height/3)
       }
   }   
let cne = new Cone(5,6)
console.log("volume of Cone ::  "+cne.volume().toFixed(4))
   



