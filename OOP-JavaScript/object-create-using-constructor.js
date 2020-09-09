// Object create using constructor function


// Constructor function 
// always use pascal notation to declair constructor function
function Circle(radious,x,y) {
    this.radious = radious;
    this.location = {x,y};
    this.draw = function () {
        console.log('Draw');
    }
    
}

const circle = new Circle(1,1,1);
console.log(circle);
circle.draw();