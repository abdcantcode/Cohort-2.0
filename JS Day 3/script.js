// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age=prompt("Enter your age");
// if(age===null) console.error("Cancel kaiku kara bhai");
// //cancel button ka case
// else{
//   if(age.trim()==="") console.log("Kuch toh likhlo mama");
//   //khaali string ka case
//   else{
//     age=Number(age.trim());
//     if(isNaN(age)) console.log("Number daal baap");
//     else{
//       age>=18?console.log("Aur do Modi ko vote"):console.log("Chal nalle");
//     }
//     }
//   }


// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let counter=0;
// for(let i=1;i<16;i++){
//   if(i>8){
//     counter++;
//   }
// }
// console.log(counter);


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let crctpass="Abdullah";
// while(true){
//   let pass =prompt("Password daalo mama");
//   if(pass===crctpass){
//     console.log("Access Granted");
//     break;
//   }
//   else{
//     alert("Try Again please");
//   }
// }

// Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let pass="abdullah";
// let attempts=3
// let userentry;
// while(attempts!=0 ){
//   userentry=prompt(`Enter the password lala ${attempts} are left`);
//   if(userentry===pass){
//     console.log("Access Granted");
//     break;
//   }
//   attempts-=1;
// }
// if(attempts===0){
//     console.log("NALLE HACKER");
// }


//using flag
// let attempts=0;
// let pass="Abdullah";
// let access=false;

// let user=prompt("Password daalo lala");
// attempts+=1;
// if(user===pass) access=true;
// while(attempts!=3 && access!=true){
//   user=prompt("Password daalo lala");
//   if(user===pass){
//     access=true;
//     break;
//   }
//   attempts+=1;
// }
// if(access===true) console.log("WELCOME LALA");
// else{
//   console.log("Bhak dalle");
// }

// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let count=0;
// let userinput;
// while(userinput!=="stop"){
//   userinput=prompt("Word bolo bhaiyya");
//   if(userinput==="yes"){
//     count+=1;
//   }
// }
// console.log(count);

// Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum=0;
// for(let i=1;i<31;i++){
//   if(i%2===1){
//     sum+=i;
//   }
// }
// console.log(sum);

// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let userinput;
// while(userinput%2!==0){
//   userinput=+prompt("Enter a number nallu lala");
// }

// Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start=+prompt("Pehla number do na mama");
// let end=+prompt("Dusra number do lala");
// for(let i=start;i<=end;i++){
//   console.log(i);
// }

// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count=0;
// for(let i=1;i<21;i++){
//   if(count===3) break;
//   if(i%2===1){
//     console.log(i);
//     count+=1;
//   }
// }
// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let count=0;
// let positivect=0;
// while(count!=5){
//   let usernum=+prompt(`Number do na mama -->${count}`);
//   count++;
//   if (usernum>=0) {
//     positivect+=1;
//   }
// }
// alert(`${positivect} numbers ich positive they`);

//19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let withdrawals=3;
// let balance=1000;
// while(balance!==0 && withdrawals!=0){
//   let amt=+prompt("Kitne paise hona chicha");

//   if(amt>balance && amt!==balance){
//     console.log(`Insufficient balance, bas ${balance} ich hai balance aur bas ${withdrawals} withdrawals hai bas `);
//     withdrawals--;
//   }
  
//   else{
//     balance-=amt;
//     withdrawals--;
//     console.log(`You have withdrawn ${amt}, you have ${balance} remaining and ${withdrawals} withdrawals`);
//   }
// }
// if(balance>0){
//   console.log(`You have ${balance} remaining`);
// }
// else{
//   console.log("HATT GAREEB");
// }