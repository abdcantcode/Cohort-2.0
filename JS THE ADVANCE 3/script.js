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
