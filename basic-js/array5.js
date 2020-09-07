// Combining and Slicing Arrays

const first = [1,2,3];
const second = [4,5,6];

// concat two array
const combined = first.concat(second);
console.log(combined);

// slice combined array
const slice = combined.slice(2,4);
console.log(slice);


//in the case of refrence type it only coppy reference not value
// when we change first object value it automaticaly change second object value
// let me show this
const objectArray = [{id:10}];
const newArray = first.concat(objectArray);
objectArray[0].id = 20;
console.log(newArray);