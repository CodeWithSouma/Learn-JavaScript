// Adding Elements

const numbers = [3,4];

// add element in end
numbers.push(5,6);
console.log(numbers);


// add element in beginning
numbers.unshift(1,2);
console.log(numbers);


// add element in middle
numbers.splice(2,0,'a','b');
console.log(numbers);