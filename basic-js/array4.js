// Removing Elements
let numbers = [1,2,3,4,5];
let another = numbers;

// for adding you learn 3 method
// numbers.push();//end
// numbers.unshift();//beginning
// numbers.splice();//middle

// remove from end
const last = numbers.pop();
console.log(numbers);
console.log(last);

// remove element from beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// remove element from any position
const element = numbers.splice(2,1);
console.log(numbers);
console.log(element);

// remove all element from the array

//solution 1
// numbers = [];
// console.log(numbers);
// console.log(another);//it points previous array

// sollution 2
// numbers.length = 0;
// console.log(numbers);
// console.log(another);

// sollution 3
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(another);

// sollution 4 (not recomanded)
// while (numbers.length > 0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);
