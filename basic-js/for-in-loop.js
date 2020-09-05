// for...in loop
const person = {
    name:'Souma',
    age:22
}

// we can access object poperty 
// 1. using dot notation 
// 2. using bracket notation

// when we don't know what key present in the object
//  then we use brcket notation to access object property 
console.log('---------------------');
console.log('|    Object access  |');
console.log('---------------------');
for (let key in person) {
   console.log(key,person[key]);
}

console.log('---------------------');
console.log('|    Array access   |');
console.log('---------------------');
// array access using for in loop
let colors = ['red','green','blue'];
for(let index in colors){
    console.log(index,colors[index]);
}
