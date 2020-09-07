// Function Declarations vs Expressions
// Hoisting:- move all the function declaration before call it is 
// automatically moved by the javascript engin that is called hoisting


// function declaration

// In this case we can call before declaration like this
walk();

function walk() {
    console.log('walk');
}



// Anonymous function expression
// In this case we can't call before declaration like this
// run();// it occure error.

let run = function () {
    console.log('run');
};

run();
let move = run;
move();