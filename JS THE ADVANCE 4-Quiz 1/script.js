// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
let user={
  name:"Abdullah",
  email:"abdullah72ftw@gmail.com",
  login:function(){
    console.log("User logged in");
  }
}
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
let user1={
  name:"Abdullah",
  email:"abdullah72ftw@gmail.com",
  login:function(){
    console.log("User logged in");
  }
}

let user2={
  name:"Abdullah",
  email:"abdullah72ftw@gmail.com",
  login:function(){
    console.log("User logged in");
  }
}

let user3={
  name:"Abdullah",
  email:"abdullah72ftw@gmail.com",
  login:function(){
    console.log("User logged in");
  }
}

let user4={
  name:"Abdullah",
  email:"abdullah72ftw@gmail.com",
  login:function(){
    console.log("User logged in");
  }
}

let user5={
  name:"Abdullah",
  email:"abdullah72ftw@gmail.com",
  login:function(){
    console.log("User logged in");
  }
}
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
class userfactory{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }
  login(){
    console.log("User logged in");
  }
}
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.
let product={
  name:"football",
  price:800,
  discount:function(){
    return this.price-200;
  }
}
console.log(product.discount());
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// ⸻

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
class Car{
  constructor(brand,speed){
    this.brand=brand;
    this.speed=speed;
  }
  drive(){
    console.log(this.brand+"-"+this.speed);
  }
}

// 	5.	Create two different car objects from the same class and verify that their data is different.
let car1=new Car("Lamborghini",1000000);
car1.drive();
let car2=new Car("BMW",20000);
car2.drive();
console.log(car1===car2);
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
//Code ke chakle lagjaate they object banalete rehna padhta tha khali pelu ke jaisa
// ⸻

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
class Student{
  constructor(name,rno){
    this.name=name;
    this.rno=rno;
  }
  introduce(){
    console.log(this.name+" "+this.rno);
  }
}
// 	8.	Inside the constructor, set values using this.
//Done uppar ich 
// Then try removing this and notice what error occurs and why.
class Student1{
  constructor(name,rno){
    name=name;
    rno=rno;
  }
  introduce(){
    console.log(this.name+" "+this.rno);
  }
}
//chakle lagjaate
// 	9.	Create an object with two methods:
let apnaobject={
  normal:function(){
    console.log(this);//Returns apnaobject
  },
  arrowwaala:()=>{
    console.log(this);//Window deta iney
  }
}
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.
//Ek window deta ek woich object deta
// The goal is to clearly understand how this works and when it changes.

// ⸻

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
function User(){
  this.name="Abdullah";
  this.login=function(){
    console.log("Tumey login hogayi so");
  }
}
let nalla=new User();
let nalla1=new User();
nalla.login();
//Ek Constructor Function Capital named rehta, this keyword use hota, new keyword use hota aur...
// 	11.	Add a login method in two ways:
// First, inside the constructor
function User1(){
  this.name="Abdullah";
  this.login=function(){
    console.log("Tumey login hogayi so");
  }
}
User1.prototype.loginn=function(){
  console.log("User login hogaya re");
}
let lala=new User1();
let lalu=new User1();
console.log(lala.login===lalu.login);//false
console.log(lala.loginn===lalu.loginn);//true
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.
console.log(nalla===nalla1);//false cuz of the method basically

// The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
function mallu(a,b,c){
  console.log(this.name,a,b,c);
}
let objj={
  name:"Abdullah",
}

// 	14.	Create an object that contains a name property.
// Use call to run the function using the object
mallu.call(objj,1,2,3);
// Use apply to run the function using the object
mallu.apply(objj,[1,2,3]);
// Use bind to create a new function and then call it
let nayafunction=mallu.bind(objj,1,2,3);
nayafunction();
// 	15.	Borrow a method from one object and run it for another object using call.
let user11 = {
  name: "Abdullah",
  greet: function (city) {
    console.log(`Hi, I am ${this.name} from ${city}`);
  }
};

let user22 = {
  name: "Ayaan"
};

// user1 ka method → user2 ke liye use
user1.greet.call(user22, "Delhi");

// The goal is to understand how this can be manually controlled.