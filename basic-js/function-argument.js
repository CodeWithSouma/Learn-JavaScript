function sum(a,b) {
    return a + b;
}

console.log(sum(2,3));
console.log(sum(1,2,3,4,5));//you get 3 as a output
console.log(sum(1));//sum() return 1 + undefine = NaN

// spacial type of parameter
function add() {
    //we use built in argument object to recive 
    // as much as user pass argument in this add function

    let total = 0;
    for (const value of arguments) 
        total += value;

    return total;

}

console.log(add(1,2,3,4,5));