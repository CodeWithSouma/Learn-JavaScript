// calculate the sum of multiple of 3 and 5
//limit:10
// Multiple of 3 : 3,6,9
// Multiple of 5 : 5,10
// sum = 33

function sum(limit){
    let sum = 0;
    for(let i=0; i <= limit; i++)
        if(i%3 === 0 || i%5 === 0) sum +=i;
    
    return sum;
}

console.log(sum(10));