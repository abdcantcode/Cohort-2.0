// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
//   console.log("Hello Javascript");
// }
// sayHello();


// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a,b){
//   let sum=a+b;
//   return sum;
// }
// console.log(add(1,2));


// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function greet(name="Guest"){
//   console.log(`Hi, ${name}`);
// }
// greet();
// greet("Abdullah");


// 4. Use rest parameters to make a function that adds unlimited numbers.

//  function addunmilitednums(...nums){
//   let sum=0;
//   nums.forEach(function(val){
//     sum+=val;
//   })
//   console.log(sum);
// }
// addunmilitednums(1,2,3,4);
// can be done using for and reduce as well


// 5. Create an IIFE that prints `"I run instantly!"`.

// (function(){
//   alert("I run instantly");
// })();


// 6. Make a nested function where the inner one prints a variable from the outer one.

// function outer(){
//   let outervar=1;
//   function inner(){
//     console.log(outervar);
//   }
//   inner();
// }
// outer();


// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruits=["banana","mango","apple","watermelon","kiwi"];
// fruits.push("dragonfruit");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);


// 8. Use a `for` loop to print all elements of an array.

// let arr=[1,2,3,4];
// for(let i=0;i<4;i++){
//   console.log(arr[i]);
// }


// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let person={
//   name:"Abdullah",
//   age:22,
//   city:"Hyderabad",
// }

// for(let key in person){
//   console.log(person[key]);
// }

// Object.entries(person).forEach(element => {
//   console.log(element[1]);
// });


// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
// setTimeout(function(){
//   alert("Time is up re baba");
// },2000);