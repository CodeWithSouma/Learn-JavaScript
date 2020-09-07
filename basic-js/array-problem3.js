// create a function that takes two array and remove second array 
// from first array and return new array 

const numbers = [1,2,3,4,1,5];

const output = except(numbers,[1,2,3]);

function except(array,excluded) {
    let output = [];
    for(let element of array)
       if(!excluded.includes(element)) output.push(element);
    
    return output;
}

console.log(output);