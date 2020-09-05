// Bitwise Operators

// 1 = 00000001
// 2 = 00000010
// 1 | 2 operation
// 3 = 00000011 
// 1 & 2 operation
// 0 = 00000000
console.log(1 | 2);
console.log(1 & 2);

// real world example 
// a user make a access control system
// this app have three permisson read,write,execute
// 1. read = 00000100
// 2. read and write = 00000010
// 3. all permission = 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission)? 'yes':'no';
console.log(message);
