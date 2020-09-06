// constructor function
// you should use Pascal Notation: OneTwoThreeFour
function Circle(radious) {
    this.radious = radious,
    this.draw = function () {
        console.log('Draw');
    }
}

const circle1 = new Circle(1);
console.log(circle1);