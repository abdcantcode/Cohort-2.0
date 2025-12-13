//Js single threaded hai, ek ke baad ek kaam synchronous kaam karta uney, lekin synchronous rehna bekaar hai kaiku bolto wait karna padhta
//Async approach yeh hai ki bekaar lambe kaam ku wait karao dusre kaaman karlete raho...

//Call back function ek function jo dusre function ku as an argument pass hota ya phir kuch time ke baad chalta basically

setTimeout(function(){ //Jaise yeh function
  console.log(Hi);  
},2000);

getDataFromInstagram("Abdullah",function(){//Yeh data aajane ke baad yeh function chalaado typa shit

})


function alubaba(fn){
  fn();
}
alubaba(function(){
  console.log("Yeh hai fn jo chalra");
})

//Call back hell dekhinge aajao lala 

function alubaba(fn){//2
  fn(function(fn2){//3//6
    fn2(function(){//7
      console.log("Chal hagru");//10
    });
  });
}
alubaba(function(fn){//1//4 idhar fn accept huwa....
  fn(function(fn3){//5//8
    fn3();//9
  }); 
})

//JAHAN BHI FUNCTION CALL HOGA AAP WAHAN AUR EK FUNCTION PASS KAR SAKTE HO...