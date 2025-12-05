function rps(user,comp){
  if(user===comp) return "Draw, Try Again";
  else if(user==="rock" && comp==="scissor" || user==="paper" && comp==="rock" || user==="scissor" && comp==="paper") return "User Wins";
  else return "Computer Wins";
}
console.log(rps("paper","scissor"));