// Joining Arrays
const numbers = [1,2,3];
// note that join method retuns a string
const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message.';
const parts = message.split(' ');
console.log(parts);

//use to make url
const combined = parts.join('-');
console.log(combined);