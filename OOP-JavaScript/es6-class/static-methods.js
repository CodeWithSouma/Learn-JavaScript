// Static methods

class Circle {
    constructor(radious){
        this.radious = radious;
    }

    // Instance Method
    draw(){//exist on object
        console.log('Draw');
    }

    // Static Method
    static parse(){//not exist on object
        console.log('Parse');
    }
}

const circle = new Circle(1);
console.log(circle);
Circle.parse;//o need to define object to call static methods static methods are no present in the object
