//polymorphism
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

//this two override method are the example of polymorphism

//Override method (Put allaways after extend )
Circle.prototype.duplicate = function () {
    console.log('Duplicate Circle');
}

//Override method (Put allaways after extend )
Square.prototype.duplicate = function () {
    console.log('Duplicate Square');
}

function Square(size) {
    this.size = size;
} 


const shapes = [new Circle(),new Square()];

for (const shape of shapes) 
    shape.duplicate();


