//prototypical inheritance
// circle and shape both are inherite object

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}


function extend(Child,Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radious,color) {
    Shape.call(this,color);
    this.radious = radious;
}

Circle.prototype.draw = function () {
    console.log('Draw');
}

extend(Circle,Shape);
extend(Square,Shape);

//Override method (Put allaways after extend )
Circle.prototype.duplicate = function () {
    console.log('Duplicate Circle');
}

function Square(size) {
    this.size = size;
} 


const shape = new Shape();
const circle = new Circle(1,'red');
const square = new Square(1);

console.log(shape);
console.log(circle);
console.log(square);


