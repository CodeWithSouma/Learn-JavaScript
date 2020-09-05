//array 
//In javaScript array is dynamic it's length can be increases or decreases
// other programming array length fixed in the case of js it's not applicable
// other programming array can store same type of element but js can store diffrent type of data
let selectedColors = ['red','blue'];
console.log(selectedColors);

// access array element using index
console.log(selectedColors[0]);

// add another element
selectedColors[2] = 'green';
console.log(selectedColors);

// we can store number like this
selectedColors[3] = 1;
console.log(selectedColors);

// length of the array
console.log(selectedColors.length);