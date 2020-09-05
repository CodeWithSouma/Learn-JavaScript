// Break and Continue

// N:B Break keyword :- Jump out of the loop
// Continue Keyword :- Jump to the next iteration

console.log('---------------------------');
console.log('|       break example     |');
console.log('---------------------------');
// break if i === 5 terminate printing
let i = 0;
while (i <= 10) {
    if(i === 5) break;
    console.log(i);
    i++;
}

console.log('---------------------------');
console.log('|     Continue example    |');
console.log('---------------------------');
// continue print odd number using continue
i = 0;
while (i <= 10) {
    if(i % 2 === 0){
        i++;
        continue;
    };
    console.log(i);
    i++;
}
