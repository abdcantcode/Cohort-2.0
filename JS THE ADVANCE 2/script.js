//global mein this ki value--> window
console.log(this);


//function mein this ki value--> window 
function abcd(){
  console.log(this);
}
abcd();


//object ke andar es5 function ke andar this ki value --> woh object aata
let obj={
  name:"Abdullah",
  fnc:function(){
    console.log(this);
    console.log(this.name); //Idhar Abdullah aata damn 
  }
}
obj.fnc();


//object ke andar es6 function ke andar this ki value --> window aata idhar
let obj1={
  fnc:()=>{
    console.log(this);
  }
}
obj1.fnc();


//Object ke andar es5 function uske andar es5 function--> this ki value window aati idhar 
let obj2={
  fnc:function(){
    function abcd(){
      console.log(this);
    }
    abcd();
  }
}
obj2.fnc();


//Object ke andar es5 function ke andar es6 function ke andar this ki value--> object

