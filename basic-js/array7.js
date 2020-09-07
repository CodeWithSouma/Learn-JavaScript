// Iterating an Array 
const numbers = [1,2,3,4,5];

// using for of loop
for(let number of numbers)
    console.log(number);

// using for each method
// each element are pass as an argument of of callback function
// numbers.forEach(function (number) {
//     console.log(number);
// });
//after refactor code look like this(we use arrow function)
numbers.forEach(number => console.log(number));
