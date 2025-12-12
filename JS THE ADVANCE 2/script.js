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
//Idhar bhi ek case dekhlo lala
let h1=document.querySelector('h1');
h1.addEventListener('click',function(){
  console.log(this); //Idhar this ki value h1 ki rehti 
});
//settimeout ke andar this ki value window aati



//CALL APPLY AUR BIND, function mein this ki value window hoti aur agar usku window nai koi aur object hona hai toh call apply aur bind use karna 

let objbgn={
  name:"Abdullah",
}

function bgn(){
  console.log(this);
}
bgn.call(objbgn);


function bgn1(a,b,c){
  console.log(this);
}
bgn1.call(objbgn,1,2,3);
bgn1.apply(objbgn,[1,2,3]);
let nayabaiganfnc=bgn1.bind(objbgn,1,2,3);
nayabaiganfnc();