//Class expression bolto basically variable ke through class banana
let apniclass=class{
  constructor(){
    this.name="Abdullah";
  }
}
console.log(apniclass.name);

//Isku hoisting work nai karti... Agar console.log() karey first line mein toh work nai karta is what I mean

//Inheritance
class animal{
  constructor(){
    this.legs=2;
    this.hands=2;
  }
  eat(){};
  sleep(){};
}

//Yeh hai inheritance toh ismein octopus mein legs aur hands rehte plus eat aur sleep bhi rehta
class octopus extends animal{
  constructor(){
    super();
    this.hands=4;
    this.legs=4;
  }
  munch(){

  };
}
//So octopus has munch(), eat() and sleep() as well
  
//Getter and setter ka concept
class baalu{
  constructor(){
    this._age=12;
    //generally _ ke saath variable rakhe toh people this its meant to be private but it can be accessed obviously...
  }
  set age(val){//Can be named anything basically age set karne use hota iney, iney ek param leta 
    if(val<0){
      console.log("Pgl hai kya re");
      return;
    }
    this._age=val;
    return this._age;
  }
  get age(){
    console.log(this._age);
  }
}
let nayavar=new baalu();
nayavar.age=12;//Set karne 
console.log(nayavar);//Get karne 