// Hoisting

sayHello();//it is possiable
// sayGoodBy();//not possiable

// function declairation syntax(no need to add semiclone)
function sayHello() { console.log('Hello'); }//it can declair after or before call(by default hoisted)

// function expression
// by convenssion add semiclone
const sayGoodBy = function () { console.log('Good By'); };//always declair before call because it act as like variable (not hoisted)


// N:B class are not hoisted  

// class using declaration syntax(no need semiclone)
class Circle {
    constructor(radious){
        this.radious = radious;
    }
    draw(){
        console.log('Draw');
    }
}

// class expression (use semiclone)
const Square = class Square {
    constructor(a){
       this.a = a;
    }
    draw(){
        console.log('Draw');
    }
};
