// Built in string object
//primitive type don't have method and property  string is a primitve data type
// so why string have property and method 
// here is your answer in javascript there are two type of string 

// 1.Primitive type string
const message = '  This is my first message  ';
console.log('Type of message: '+typeof message);

// But when we message. the js engin wrap it in to a string object and shows method and property


//2.Object type string
const another = new String('Hi');
console.log('Type of another: '+typeof another);

// some built in property of string object
// 1. Length 
console.log('Length of message: '+message.length);

// 2.Index
console.log('character of message in index 0: '+message[0]);

// 3. check string spacial word N:B searches are case sencetive.
console.log('message content my: '+message.includes('my'));

// 4. startWith
console.log('message start with This: '+message.startsWith('This'));

// 5. endWith
console.log('message start with hello: '+message.startsWith('hello'));

//6.find index
console.log('Index of my: '+message.indexOf('my'));

//7. replace string
//message.replace() returns a new string not modify old
console.log('Replage first with second: '+message.replace('first','second'));

// 8. convert uppercase
console.log('Uppercase: '+message.toUpperCase());

// 9. convert lowercase
console.log('Lowercase: '+message.toLowerCase());

// 10. remove space before and after a string
console.log('Remove extra space before and after: '+message.trim());