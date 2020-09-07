// write a function it returns max value from an array

const numbers = [1,2,3,4,5];
const  max = getMax(numbers);

function getMax(array) {
    if(array.length === 0) return;
    return Math.max(...array);
}

console.log(max);