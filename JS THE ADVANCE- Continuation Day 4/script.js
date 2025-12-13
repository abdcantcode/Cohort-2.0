//Js single threaded hai, ek ke baad ek kaam synchronous kaam karta uney, lekin synchronous rehna bekaar hai kaiku bolto wait karna padhta
//Async approach yeh hai ki bekaar lambe kaam ku wait karao dusre kaaman karlete raho...

//Call back function ek function jo dusre function ku as an argument pass hota ya phir kuch time ke baad chalta basically

setTimeout(function(){ //Jaise yeh function
  console.log("Hi");  
},2000);

// getDataFromInstagram("Abdullah",function(){//Yeh data aajane ke baad yeh function chalaado typa shit

// })


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
function abcd(fn){
  fn(function(fn3){
    fn3(function(){
      console.log("Bail ka bulla code");
    })
  })
}
abcd(function(fn2){
  fn2(function(fn4){
    fn4();
  })
})

//3 cheezan ek saaath function call, function pass karna aur dusre valey mein parameter likhna khallas

function amitseAddresskelatlonglao(address,cb){//callback function
  console.log("Iney address ku jaake details calculate karra");
  setTimeout(function(){
    cb({lat:30,lang:40});//2 yeh return hora by the logic ki call karre jab ek cheez bhejo ya function call karo aur dusre side kuch lelo 
  },3000);
}
amitseAddresskelatlonglao("16-2-54/1",function(latlong){//3 dusre side kuchleru
  console.log(latlong);
})//1