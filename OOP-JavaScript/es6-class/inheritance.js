// inheritence

class Shape {

    constructor(color){
        this.color = color;
    }

    move(){
        console.log('Move');
    }
}

// inherite shape class
class Circle extends Shape{

    constructor(color,radious){
        super(color);
        this.radious = radious;
    }

    draw(){
        console.log('Draw');
    }

}

const circle = new Circle('red',1);
console.log(circle);