// for loop
// we want to display hello world 5 times
// we can imlement like this but it is not the currect way
// console.log('Hello world'); 
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');

// using for loop
for(let i = 0; i < 5; i++){
    console.log('Hello world');
}

// print odd number between 1 to 5
console.log('Printing odd number between 1 to 5: ');
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0)
        console.log(i);
}