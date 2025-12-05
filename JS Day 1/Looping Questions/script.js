//Printing numbers from 1 to 10 using a for loop
// for(let i=1;i<11;i++){
//   console.log(i);
// }


//Printing numbers from 10 to 1 using a while loop
// for(let i=10;i>0;i--){
//   console.log(i);
// }

// let i=10;
// while(i>0){
//   console.log(i);
//   i--;
// }


//Printing even numbers from 1 to 20 using a for loop
// for (let i=1;i<21;i++){
//   if(i%2===0){
//     console.log(i);
//   }
// }


//Printing odd numbers from 1 to 15 using a while loop
// let i=1;
// while(i<16){
//   if(i%2===0){
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

//Printing the table of 5
// for( let i=1;i<11;i++){
//   console.log(`5 x ${i} = ${5*i}`);
// }

//Sum of numbers from 1 to 100
// let sum=null;
// for( let i=1;i<101;i++){
//   sum+=i;
// }
// console.log(sum)

//Printing numbers from 1 to 50 divisible by 3
// for(let i =1;i<51;i++){
//   if(i%3===0){
//     console.log(i);
//   }
// }

//Take input from user and print all the numbers till there are odd or even
// let num=prompt("Enter your number");
// for( let i=1;i<=num;i++){
//   if(i%2===0){
//     console.log(`${i} is Even`);
//   }else{
//       console.log(`${i} is Odd`);

//   }
// }

//Count of numbers between 1 and 100 divisible by 3 and 5 both 
// let count=null;
// for( let i=1;i<101;i++){
//   if(i%3===0 && i%5===0){
//     console.log(i);
//     count++;
//   }
// }
// console.log(count);

//Print numbers but stop at the first multiple of 7 from 1 to 100
// for(let i=1;i<101;i++){
//   if(i%7===0){
//     break;
//   }
//   console.log(i);
// }

//Print from 1 to 20 skipping multiples of 3
// for( let i =1;i<21;i++){
//   if (i%3===0){
//     continue;
//   }
//   console.log(i);
// }

//Print first 5 odd numbers only use if, continue, counter and break from 1 to 100
// let count =0;
// for( let i =1;i<101;i++){
//   if(i%2===0){
//     continue;
//   }
  
//   if(count===5){
//     break;
//   }
//   else{
//     console.log(i);
//     count+=1;
//   }
// }