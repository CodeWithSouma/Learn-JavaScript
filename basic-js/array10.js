// Testing the Elements of an Array
const numbers = [1,2,3];
const numbers2 = [1,-1,2,3];
// every() => cheak every element matches citria
let allPositive = numbers.every(value => value >= 0);
console.log(allPositive);

allPositive = numbers2.every(value => value >= 0);
console.log(allPositive);

// some() => cheak  if at least one element matches citria
let atListOnePositive = numbers2.some(value => value >= 0);
console.log(atListOnePositive);