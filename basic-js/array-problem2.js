// create your own include method

const numbers = [1,2,3,4,5];
console.log(numbers.includes(2));

// my include method
function includes(array,searchElement) {
    for(let element of array)
        if(element === searchElement) return true;
    return false;
}

console.log(includes(numbers,5));