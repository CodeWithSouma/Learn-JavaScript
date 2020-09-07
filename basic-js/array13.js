// Reducing an Array
const numbers = [1,-1,2,3,4,5];

// using for of loop
// let sum = 0;
// for(let number of numbers)
//    sum += number;
// console.log(sum);


// using reduce method
let newSum  = numbers.reduce((accumulator,currentValue)=> accumulator + currentValue)
console.log(newSum);