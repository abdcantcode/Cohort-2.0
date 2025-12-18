//arr1=[1,2,4];
//arr2=arr1 se reference copy hoti exact cheez copy nai hoti 

arr1=[1,2,3,4,5,6,7];
arr2=[...arr1];
arr3=[arr1[0],arr1[1],arr1[2]];//iske badle spread use karle sakte basically...
//ino hai spread operator 
let a=arr1[0];

let [x,y,z]=arr1;
let [c,...b]=arr1; //shuru ka 1 c hai phir 2->7 hai b
//destructuring objects x becomes 1 y becomes 2 and so on 
let ar=[1,2,3];
// let [...ar2]=ar;
// let ar2=[...ar] //Yeh do same hai..
// console.log(ar2); 

let obj={
  name:"Abd",
  age:22
}
let obj2={...obj};
let {...obj3}=obj;
console.log(obj2,obj3);