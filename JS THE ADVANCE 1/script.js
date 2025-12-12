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
let remote1=new Remote

class Baigan{
  constructor(product,price){
    this.product=product;
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

// Class objects ke liye blueprint h, new se object banta aur constructor se woh object ke values set hunge, class ka naam humesha capital rakho 
