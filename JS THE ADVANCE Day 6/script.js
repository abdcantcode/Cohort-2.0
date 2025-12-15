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