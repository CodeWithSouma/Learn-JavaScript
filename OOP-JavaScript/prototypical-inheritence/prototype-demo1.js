//in javascript every object inherit base object/ protptype
const myArray = [];
const x = {};
// it shows inherited method and property these are inherited from prtotype
console.log(Object.getPrototypeOf(myArray));//it run on browser console,not work on node
console.log(Object.getPrototypeOf(x));//it run on browser console,not work on node