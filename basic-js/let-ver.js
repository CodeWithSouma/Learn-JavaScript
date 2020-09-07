// Let vs Var

// let: scope is limited
// var: scope is not limited

// let x = 0;
// var y = 0;

function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);//i only accessable inside of this code blocks
    }
    console.log(i);//returns undefine

    for (var i = 0; i < 5; i++) {
        console.log(i);//i accessable outeside of this code blocks
    }

    console.log(i);//returns 5 as a output
}

start();