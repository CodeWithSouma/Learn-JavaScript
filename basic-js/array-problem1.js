//make a function that take min and max and return a array

function arrayFromRange(min,max) {
    let output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
    return output;
}

const numbers = arrayFromRange(1,4);
console.log(numbers);

