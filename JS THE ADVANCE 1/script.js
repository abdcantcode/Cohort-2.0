//Class is the blueprint for an object...
//Constructor-->Automatic chalne waala function 
class Remote{
  constructor(){
    this.product="LG";
    this.price=60
  }
  open(){
    console.log("Khulgaya");
  }
  close(){
    console.log("Band hogaya");
  }
}
let remote1=new Remote();

class Baigan{
  constructor(product,price){
    this.product=product; //idhar this ki value naya banra so object rehta
    this.price=price;
  }
  open(){
    console.log("Khulgaya");
  }
  close(){
    console.log("Band hogaya");
  }
}
let baigan1=new Baigan("DELL",60);

// Class objects ke liye blueprint h, new se object banta aur constructor se woh object ke values set hunge, class ka naam humesha capital rakho, Constructor automatically chalne waala function hai jab ek class ka ek instance create hota jab 
//Agar class ke prototype mein kuch bhi add kardiye toh uske har ek instance mein share hojata woh
//Constructor ke baher kuch bhi daalo woh prototype mein add hojayega... idhar jaisa open() aur close() huwa....
Baigan.prototype.kholo=function(){
  console.log("Baigan");
}
Baigan.prototype.bgnvariable=12;
//Yeh do har ek usmein share hota basicallly....

