//Array with three fruits and printing the second fruit

let arr=["apple","mango","banana","bhendi"];
console.log(arr[1]);

//Add mango at the end and guava at the beginning of this array
arr.push("pineapple");
arr.unshift("guava");

//replace guava with aalu
arr.pop();
arr.push("aalu");

//add watermelon at index 1 
arr.splice(1,0,"watermelon");
//iska matlab hai ki index 1 se kuch mat hajao aur yeh add karo damnnnnn

//extract middle 3 
console.log(arr);
//it has 7 elems -> index 0 1 2 3 4 5 6 -> so 2 3 4th index stuff are removed 
let newarr=arr.slice(2,5);
console.log(newarr);

//sort it alphabetically and reverse it 
arr.sort().reverse();
console.log(arr);

//square using map function
let arr1=[1,2,3,4];
let newarr1=arr1.map(function(val){
  return val*val;
});
console.log(newarr1);

//use .filter to keep numbers greater than 2
let newarr2=arr1.filter(function(val){
  if(val>2) return true;
});
console.log(newarr2);

let newarr3=arr1.filter((val)=>{
  return val>2;
});
console.log(newarr3);

//calculate sum using reduce()
let summarr=arr1.reduce((acc,val)=>{
  return acc+val;
},0);
console.log(summarr);

//find to find the first number less than 3 _(NOICEEEE)
let finder=arr1.find(function(val){
  return val<3;
});
console.log(finder);

//use .some to check if anyone has scored less than 35
let marks=[100,45,9,56,34,12,343,56,57,6,6,76,6765,5676];
let marksdekho=marks.some(function(val){
  return val<35;
})
console.log(marksdekho);

//every() to find if all are even
let even=marks.every(function(val){
  return val%2===0;
});
console.log(even);

//destructure to get first and last name 
let name=['Abdullah','Aajaz'];
let [firstname,lastname]=name;
// alert(`Your first name is ${firstname} and your last name is ${lastname}`);

//merge using spread operator 
let a=[1,2];
let b=[3,4];
let c=[...a,...b];
console.log(c);

//add 6 to this c 
c=[6,...c];
console.log(c);