
// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

// function runTwice(fn){
//   fn();
//   fn();
// }
// runTwice(function(){
//   console.log("HELLO");
// });


// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

//pure function 
// let a=13;
// function pure(val){
//   console.log(val+2);
// }
// pure(a);
// pure(a);

//impure function 
// let b=14;
// function impure(val){
//   b=val+1;
//   console.log(b);
// }
// impure(b);
// impure(b);


// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

// let obj={
//   name:"Abdullah",
//   age:22,
// }

// function abcd({name,age}){
//   console.log(name);
//   console.log(age);
// }
// abcd(obj);


// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// let obj1 = {
//   name: "Abdullah",
//   fncn: function () {
//     console.log(this);
//   },
// };
// obj1.fncn();


// let obj2 = {
//   name: "Abdullah",
//   fncn: function () {
//     let fnc2=()=>{
//       console.log(this);
//     }
//   fnc2();

//   },
// };
// obj2.fncn();


// let obj3 = {
//   name: "Abdullah",
//   fncn: function () {
//   console.log(this);
//   },
//   fncn2:()=>{
//     console.log(this);
//   }
// };
// obj3.fncn2();


// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

// let arr=[1,2,3];
// let newarr=arr.map(function(val){
//   return val*val;
// })
// console.log(newarr);


// 6. Use `filter()` to get only even numbers from an array.

// let arr1=[1,2,3,4];
// let newarr1=arr1.filter(function(val){
//   return val%2===0;
// })
// console.log(newarr1);


// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let arr2=[1000,2000,3000];
// let newarr2=arr2.reduce(function(acc,val){
//   return acc+val;
// },0);
// console.log(newarr2);


// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

// let names=["Abdullah","Sam","Rody","Saloon","nangu"];
// let namessome=names.some(function(val){
//   return val.length>3;
// });
// console.log(namessome);

// let namesevery=names.every(function(val){
//   return val.length>3;
// });
// console.log(namesevery);


// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

// let obj={
//   name:"Abdullah",
//   age:22,
// }
// Object.freeze(obj);
// Object.seal(obj);

// freeze se kuch change ich nai kar saktey
// na add kar sakte na change

// seal se add kar sakte lekin change nai kar sakte



// 10. Create a nested object (`user → address → city`) and access the city name inside it.

// let obj={
//   user:"Abdullah",
//   address:{
//     city:"Hyderabad",
//   }
// }
// console.log(obj.address.city);
// let {city}=obj.address;
// console.log(city);

