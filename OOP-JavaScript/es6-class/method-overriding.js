// Method overriding 

class Shape {

    move(){
        console.log('Move');
    }
}

// inherite shape class
class Circle extends Shape{

    move(){
        super.move();
        console.log('Circle move');//override method
    }

}

const circle = new Circle();
console.log(circle);
console.log(circle.move());