// Finding Elements (Primitives)

const numbers = [1,2,3,4,1,5];
// it returns -1 because a is not present in the array
console.log(numbers.indexOf('a'));

// it returns 2 because the index of 3 = 2
console.log(numbers.indexOf(3));


// last index of returns last position of 1
console.log(numbers.lastIndexOf(1));

// a given number is present in the array 
console.log(numbers.indexOf(1) !== -1);

// new waya to check 
console.log(numbers.includes(2));