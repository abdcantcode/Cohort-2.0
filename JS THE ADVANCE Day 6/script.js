//Promises->essentially jaake ke kaam karo 
//Huwe tak ->Pending state
//Hogaya toh-->Resolved
//Nai huwa toh-->Rejected

//Facebook ku jao data lao data laaye tak pending, laaliye toh resolved ya phir rejected 

//Promise ku aisa samjho mama jaisa ek dabba hai, thodi der ke baad khulta, agar khulgaya toh ya toh yes aata ya no types samajh lala

//Bolto pedning se jab resolve hota toh woh fulfiled bolte basically matlab un ya toh resolve ya toh reject hota

let prm=new Promise((resolve,reject)=>{//Iney ek function accept karta samajh re bhai 
  setTimeout(() => {
    resolve();//Toh aisa samjho ki 3 second tak pending mein rehta uske baad lala hojaate resolve
  }, 3000);
})
//Ab yeh promise ku chalane 
prm.then(function(){//.then se resolve waala handle hota I mean agar resolve hogaya toh .then chalta nai toh .catch chalta
  console.log("Resolved");
})
.catch(function(){
  console.log("Rejected");
})

//Fetch API ka timepass 
fetch(`https://randomuser.me/api/`)//Fetch woh url pe jaata data laata more like a promise ya technically ek promise ich samjho lekin gicchi yeh rehti woh data rehta nahi json format mein, bgni format mein rehta uney toh uske liye...bolto jab tak pending state mein rehta sab aagaya toh ya toh resolve ya toh reject
.then(function(rawdata){//woh rawdata readable stream rehti .json() se object banjata
  return rawdata.json(); //yeh bhi technically ek promise ich return karta
})
.then(function(data){
  console.log(data.results[0].name.first);
})
.catch(function(err){
  console.log(err);//In case daldiye kuch galat url or stuff ya api respond nai kara and shit toh yeh chalta 
})

fetch(`https://randomuser.me/api/`)
.then((raw)=>raw.json())
.then((data)=>console.log(data))//Aisa bhi likh sakte 

//Asycn await promise pe kaam karta hai, agar promise bana hai toh woh chalega
//I mean ki agar promise return hota hai toh ig
//Await sirf promise ke pehle lagta hai 

async function abcd(){
  let rawdata=await fetch(`https://randomuser.me/api/`);
  let data=await rawdata.json();
  console.log(data);
}
abcd();
//.then ke badle await pehle likh sakte lekin await koi function mein rehna padhta necessary aur agar function banaye toh woh function ku async dena bhi necessay hai 
function getnum(){
return new Promise((resolve,reject)=>{
  setTimeout(() => {
     let num=Math.floor(Math.random()*10);
     if(num<5){
      resolve("DALLE");
     }
     else reject("NALLE");
  },2000);
})};
async function abcd(){
  let v=await getnum();
  console.log(v);
}

//Types of errors
//Syntax error->Format mein error
//leat a=12;
//consoool.log(a); 

//Runtime error-->bolto compile time nai runtime mein error
//let a=12;
//function abcd(){
//console.log(a.name.lullu);
//}
//abcd();
//Aise kuch hai ich nai toh aata runtime error;
//a mein name hai ich nai basically toh error likhte waqt nai chalte waqt error 

//Logical error add() function mein tum ich - kardiye toh tumhari galti errors batate nai yeh sab 
