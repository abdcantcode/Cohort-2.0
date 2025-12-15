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
