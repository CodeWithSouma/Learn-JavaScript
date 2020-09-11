'use strict'; //this enable strict mode it prevent us accidentally modify global object

// this keyword
function Circle() {
    this.draw = function () { console.log(this); }
}

const circle = new Circle();
// Method Call
circle.draw();

const draw = circle.draw;//getting a refrence of draw method
console.log(draw);

//function call we calling a standalone function it is not a part of the object
// when we call this draw function 'this' will point global object that is
// 'window' object in the browser  and 'global' in the node enviroment
draw();//insted of showing circle object you will see window object(in strict mode you will see undefine)


