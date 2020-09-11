// Prototype vs instance member
function Circle(radious) {

    //instance member 
    this.radious = radious;

    // it is the common property of all Circle so we cut it and put it into prototype
    // this.draw = function () { 
    //     console.log('Draw');  
    // }

    this.move = function () {
        // we can also call prototypical method from here
        this.draw();
        console.log('Move');
    }
}

//when we create circle object then every time 
// circle object gets radious and draw method
// it is the waste of memory we can extract draw method and
// put into base object let see

// Circle.prototype === c1.__proto__ it referencing the same object 
// that is circle base we know prototype is a nested object of Circle constructor

// prototype memeber
Circle.prototype.draw = function () { 
    console.log('Draw');  
    // we can call instance method from here
    // this.move();
}


const c1 = new Circle(1);
const c2 = new Circle(1);

// becauses of the prototypcal inheritence we can access draw method
c1.draw();

// we can override the toString method
Circle.prototype.toString = function () {
    return 'Circle with radious '+this.radious;
}

console.log(c1.toString());

// N:B Object.keys return only instance member 
// But for in loop return all key instance+prototype member
console.log(c1.hasOwnProperty('radious'));//true because it is instance property
console.log(c1.hasOwnProperty('draw'));//it is false because it is prototype property