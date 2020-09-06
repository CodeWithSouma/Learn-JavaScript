// show prime number based on a limit

function showPrimes(limit) {
    for(let num = 2; num <= limit; num++){
        if(prime(num)) 
            console.log(num);
    }
}

function prime(num) {
    for(let factor = 2; factor < num; factor++)
        if(num % factor === 0) return false; 
    return true; 
}

showPrimes(20);